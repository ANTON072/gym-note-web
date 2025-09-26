export interface Exercise {
  id: number;
  name: string;
  bodyPart: string;
  laterality: "bilateral" | "unilateral";
  memo?: string;
}
