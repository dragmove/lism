// TODO: Add comments to make api documents
export function isDefined(val: unknown): boolean {
  if (val === null || typeof val === "undefined") return false;
  return true;
}
