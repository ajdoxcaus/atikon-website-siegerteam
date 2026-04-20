import { useSearchParams } from "react-router-dom";

export type Intent = "default" | "newsletter" | "website" | "ai" | "lead";

const VALID: Intent[] = ["default", "newsletter", "website", "ai", "lead"];

export function useIntent(): Intent {
  const [params] = useSearchParams();
  const raw = params.get("intent");
  if (raw && VALID.includes(raw as Intent)) {
    return raw as Intent;
  }
  return "default";
}
