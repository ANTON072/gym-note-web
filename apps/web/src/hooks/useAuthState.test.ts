import * as authModule from "@/lib/firebase/auth";
import { act, renderHook, waitFor } from "@testing-library/react";
import type { User } from "firebase/auth";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useAuthState } from "./useAuthState";

vi.mock("@/lib/firebase/auth", () => ({
  subscribeToAuth: vi.fn(),
  getAuthSnapshot: vi.fn(),
}));

describe("useAuthState", () => {
  const mockedAuth = authModule as {
    subscribeToAuth: ReturnType<typeof vi.fn>;
    getAuthSnapshot: ReturnType<typeof vi.fn>;
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("初期状態はloadingステータスである", () => {
    mockedAuth.getAuthSnapshot.mockReturnValue({
      status: "loading" as const,
      user: null,
    });

    mockedAuth.subscribeToAuth.mockReturnValue(() => {});

    const { result } = renderHook(() => useAuthState());

    expect(result.current.status).toBe("loading");
    expect(result.current.user).toBeNull();
  });

  it("ログイン時にはloginステータスとユーザー情報を返す", () => {
    const mockUser = { uid: "123", email: "test@example.com" } as User;

    mockedAuth.getAuthSnapshot.mockReturnValue({
      status: "login" as const,
      user: mockUser,
    });

    mockedAuth.subscribeToAuth.mockReturnValue(() => {});

    const { result } = renderHook(() => useAuthState());

    expect(result.current.status).toBe("login");
    expect(result.current.user).toEqual(mockUser);
  });

  it("ログアウト時にはlogoutステータスを返す", () => {
    mockedAuth.getAuthSnapshot.mockReturnValue({
      status: "logout" as const,
      user: null,
    });

    mockedAuth.subscribeToAuth.mockReturnValue(() => {});

    const { result } = renderHook(() => useAuthState());

    expect(result.current.status).toBe("logout");
    expect(result.current.user).toBeNull();
  });

  it("認証状態の変更を購読し、再レンダリングする", async () => {
    let callback: () => void = () => {};

    mockedAuth.subscribeToAuth.mockImplementation((cb) => {
      callback = cb;
      return () => {};
    });

    mockedAuth.getAuthSnapshot.mockReturnValue({
      status: "loading" as const,
      user: undefined,
    });

    const { result } = renderHook(() => useAuthState());

    expect(result.current.status).toBe("loading");

    const mockUser = { uid: "123", email: "test@example.com" } as User;
    mockedAuth.getAuthSnapshot.mockReturnValue({
      status: "login" as const,
      user: mockUser,
    });

    act(() => {
      callback();
    });

    await waitFor(() => {
      expect(result.current.status).toBe("login");
      expect(result.current.user).toEqual(mockUser);
    });
  });

  it("アンマウント時に購読を解除する", () => {
    const unsubscribe = vi.fn();
    mockedAuth.subscribeToAuth.mockReturnValue(unsubscribe);

    mockedAuth.getAuthSnapshot.mockReturnValue({
      status: "loading" as const,
      user: undefined,
    });

    const { unmount } = renderHook(() => useAuthState());

    expect(mockedAuth.subscribeToAuth).toHaveBeenCalledTimes(1);
    expect(unsubscribe).not.toHaveBeenCalled();

    unmount();

    expect(unsubscribe).toHaveBeenCalledTimes(1);
  });
});
