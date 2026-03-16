/**
 * Server-safe blog utilities (no "use client" directive).
 * Can be imported from both server and client components.
 */

export interface TocHeading {
  id: string;
  text: string;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Extract all H2 headings from markdown content for table of contents. */
export function extractHeadings(content: string): TocHeading[] {
  const headings: TocHeading[] = [];
  const regex = /^## (.+)$/gm;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(content)) !== null) {
    const text = match[1].replace(/\*\*([^*]+)\*\*/g, "$1").trim();
    const id = slugify(text);
    headings.push({ id, text });
  }
  return headings;
}
