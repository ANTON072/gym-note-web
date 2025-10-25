import { httpAuth } from "@/lib/httpAuth";
import {
  type UseMutationOptions,
  type UseQueryOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import { QUERY_KEY_NOTES } from "../constants/queryKeys";
import type { NoteResponse } from "../types";

export const useGetNote = (
  noteId: number | null | undefined,
  options?: Omit<UseQueryOptions<NoteResponse, Error>, "queryKey" | "queryFn">,
) => {
  return useQuery<NoteResponse, Error>({
    queryKey: [QUERY_KEY_NOTES, noteId],
    queryFn: async () => {
      if (!noteId) {
        throw new Error("noteId is required");
      }
      return await httpAuth.get<NoteResponse>(`/v1/notes/${noteId}`);
    },
    ...options,
  });
};
