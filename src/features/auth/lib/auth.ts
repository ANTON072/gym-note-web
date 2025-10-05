import { auth, googleProvider } from "@/configs/firebase";
import { signInWithPopup, signOut } from "firebase/auth";

export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
};

export const logout = async () => {
  await signOut(auth);
};
