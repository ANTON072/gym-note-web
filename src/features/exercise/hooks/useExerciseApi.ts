import { httpAuth } from "@/lib/httpAuth";
import { useMutation, useQuery } from "@tanstack/react-query";

import { QUERY_KEY_CREATE_EXERCISE, QUERY_KEY_EXERCISES } from "../constants/queryKeys";
import type { Exercise, ExerciseFormData } from "../schema";

export const useGetExercises = () => {
  return useQuery({
    queryKey: [QUERY_KEY_EXERCISES],
    queryFn: async () => {
      return await httpAuth.get<Exercise[]>("/exercises");
    },
  });
};

export const useCreateExercise = (options?: Parameters<typeof useMutation>[0]) => {
  return useMutation({
    mutationKey: [QUERY_KEY_CREATE_EXERCISE],
    mutationFn: async (data: ExerciseFormData) => {
      return await httpAuth.post<{ exercise: Exercise }>("/exercises", data);
    },
    ...options,
  });
};
