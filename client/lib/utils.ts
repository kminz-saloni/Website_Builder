export function statusTone(status: string): string {
  if (status === "Completed" || status === "Live" || status === "Stable") {
    return "text-accent border-accent/40 bg-accent/10";
  }

  if (status === "In Progress" || status === "Active") {
    return "text-primary border-primary/40 bg-primary/10";
  }

  return "text-secondary border-secondary/40 bg-secondary/10";
}
