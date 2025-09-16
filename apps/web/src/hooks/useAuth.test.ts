import { renderHook } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import type { User } from "firebase/auth";
import { useAuth } from "./useAuth";
import * as rootStoreModule from "@/store/rootStore";

// rootStoreをモック
vi.mock("@/store/rootStore", () => ({
  useRootStore: vi.fn(),
}));

describe("useAuth", () => {
  const mockUseRootStore = vi.mocked(rootStoreModule.useRootStore);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("loading状態を正しく返す", () => {
    mockUseRootStore.mockReturnValue({
      status: "loading" as const,
      user: null,
      setAuthState: vi.fn(),
    });

    const { result } = renderHook(() => useAuth());

    expect(result.current.status).toBe("loading");
    expect(result.current.user).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
  });

  it("ログイン状態を正しく返す", () => {
    const mockUser = { uid: "123", email: "test@example.com" } as User;
    
    mockUseRootStore.mockReturnValue({
      status: "login" as const,
      user: mockUser,
      setAuthState: vi.fn(),
    });

    const { result } = renderHook(() => useAuth());

    expect(result.current.status).toBe("login");
    expect(result.current.user).toEqual(mockUser);
    expect(result.current.isAuthenticated).toBe(true);
  });

  it("ログアウト状態を正しく返す", () => {
    mockUseRootStore.mockReturnValue({
      status: "logout" as const,
      user: null,
      setAuthState: vi.fn(),
    });

    const { result } = renderHook(() => useAuth());

    expect(result.current.status).toBe("logout");
    expect(result.current.user).toBeNull();
    expect(result.current.isAuthenticated).toBe(false);
  });

  it("setAuthStateアクションも含まれている", () => {
    const mockSetAuthState = vi.fn();
    
    mockUseRootStore.mockReturnValue({
      status: "logout" as const,
      user: null,
      setAuthState: mockSetAuthState,
    });

    const { result } = renderHook(() => useAuth());

    expect(result.current.setAuthState).toBe(mockSetAuthState);
  });
});