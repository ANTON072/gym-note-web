import { httpAuth } from "@/lib/httpAuth";
import { useQuery } from "@tanstack/react-query";

import { QUERY_KEY_EXERCISES } from "../constants/queryKeys";
import type { Exercise } from "../schema";

export const useGetExercises = () => {
  return useQuery({
    queryKey: [QUERY_KEY_EXERCISES],
    queryFn: async () => {
      return await httpAuth.get<{ exercises: Exercise[] }>("/exercises");
    },
  });
};
