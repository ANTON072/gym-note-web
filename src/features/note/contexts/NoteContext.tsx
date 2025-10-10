import { createContext, useContext, useState } from "react";
import type { NoteComponentId } from "../types";

interface NoteContextType {
  // 表示するコンポーネントID。nullの場合はデフォルト表示。
  displayComponentId: NoteComponentId;
  setDisplayComponentId: (id: NoteComponentId) => void;
}

export const NoteContext = createContext<NoteContextType | null>(null);

interface NoteProviderProps {
  children: React.ReactNode;
}

export const NoteProvider = ({ children }: NoteProviderProps) => {
  const [displayComponentId, setDisplayComponentId] = useState<NoteComponentId>(null);

  return (
    <NoteContext.Provider value={{ displayComponentId, setDisplayComponentId }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNoteContext = () => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error("useNoteContext must be used within a NoteProvider");
  }
  return context;
};
