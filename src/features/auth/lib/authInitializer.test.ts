import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import type { User, Unsubscribe } from "firebase/auth";
import { initializeAuthListener, cleanupAuthListener } from "./authInitializer";

// Firebaseモジュールをモック
vi.mock("firebase/auth", () => ({
  getAuth: vi.fn(() => ({})),
  onAuthStateChanged: vi.fn(),
}));

vi.mock("./config", () => ({
  app: {},
}));

vi.mock("@/store/rootStore", () => ({
  useRootStore: {
    getState: vi.fn(() => ({
      auth: {
        setAuthState: vi.fn(),
      },
    })),
  },
}));

describe("authInitializer", () => {
  let mockUnsubscribe: ReturnType<typeof vi.fn>;
  
  beforeEach(() => {
    vi.clearAllMocks();
    mockUnsubscribe = vi.fn();
  });

  afterEach(() => {
    cleanupAuthListener();
  });

  it("Firebase Authの状態監視を開始できる", async () => {
    const { onAuthStateChanged } = await import("firebase/auth");
    vi.mocked(onAuthStateChanged).mockReturnValue(mockUnsubscribe);

    const unsubscribe = initializeAuthListener();

    expect(onAuthStateChanged).toHaveBeenCalledTimes(1);
    expect(unsubscribe).toBe(mockUnsubscribe);
  });

  it("ユーザーログイン時にsetAuthStateが呼ばれる", async () => {
    const { onAuthStateChanged } = await import("firebase/auth");
    const { useRootStore } = await import("@/store/rootStore");
    
    const mockUser = { uid: "123", email: "test@example.com" } as User;
    const setAuthStateMock = vi.fn();
    
    vi.mocked(useRootStore.getState).mockReturnValue({
      auth: {
        status: "loading",
        user: null,
        setAuthState: setAuthStateMock,
      },
    });

    vi.mocked(onAuthStateChanged).mockImplementation((auth, callback) => {
      callback(mockUser);
      return mockUnsubscribe;
    });

    initializeAuthListener();

    expect(setAuthStateMock).toHaveBeenCalledWith("login", mockUser);
  });

  it("ユーザーログアウト時にsetAuthStateが呼ばれる", async () => {
    const { onAuthStateChanged } = await import("firebase/auth");
    const { useRootStore } = await import("@/store/rootStore");
    
    const setAuthStateMock = vi.fn();
    
    vi.mocked(useRootStore.getState).mockReturnValue({
      auth: {
        status: "login",
        user: {} as User,
        setAuthState: setAuthStateMock,
      },
    });

    vi.mocked(onAuthStateChanged).mockImplementation((auth, callback) => {
      callback(null);
      return mockUnsubscribe;
    });

    initializeAuthListener();

    expect(setAuthStateMock).toHaveBeenCalledWith("logout", null);
  });

  it("複数回初期化しても前のリスナーは解除される", async () => {
    const { onAuthStateChanged } = await import("firebase/auth");
    const firstUnsubscribe = vi.fn();
    const secondUnsubscribe = vi.fn();

    vi.mocked(onAuthStateChanged)
      .mockReturnValueOnce(firstUnsubscribe)
      .mockReturnValueOnce(secondUnsubscribe);

    initializeAuthListener();
    expect(firstUnsubscribe).not.toHaveBeenCalled();

    initializeAuthListener();
    expect(firstUnsubscribe).toHaveBeenCalledTimes(1);
  });

  it("cleanupAuthListenerでリスナーを解除できる", async () => {
    const { onAuthStateChanged } = await import("firebase/auth");
    vi.mocked(onAuthStateChanged).mockReturnValue(mockUnsubscribe);

    initializeAuthListener();
    expect(mockUnsubscribe).not.toHaveBeenCalled();

    cleanupAuthListener();
    expect(mockUnsubscribe).toHaveBeenCalledTimes(1);
  });
});