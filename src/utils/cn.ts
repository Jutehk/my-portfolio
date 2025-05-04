export function cn(...inputs: any[]): string {
    return inputs
      .flat()
      .filter(Boolean)
      .map((input) =>
        typeof input === "string"
          ? input
          : typeof input === "object"
          ? Object.entries(input)
              .filter(([_, value]) => value)
              .map(([key]) => key)
              .join(" ")
          : ""
      )
      .join(" ");
  }
  