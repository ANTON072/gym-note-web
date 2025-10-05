import type { ZodError } from "zod";

export function formatZodErrors(error: ZodError): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const issue of error.issues) {
    if (issue.path[0]) {
      errors[issue.path[0] as string] = issue.message;
    }
  }
  return errors;
}
