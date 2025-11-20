export function cn(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

export function isJson(json: string | unknown) {
  try {
    if (typeof json !== "string") {
      return false;
    }
    JSON.parse(json);
    return true;
  } catch {
    return false;
  }
}
