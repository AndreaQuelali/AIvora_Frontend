/**
 * Citation — document source chip shown in AI responses.
 * Links to the source document/chunk with page number.
 * TODO: Implement with hover popover showing chunk excerpt.
 */
export interface CitationProps {
  documentId: string;
  documentName: string;
  pageNumber?: number;
  score?: number;
}

export function Citation({ documentName, pageNumber }: CitationProps) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-2 py-0.5 text-xs text-muted-foreground">
      <span>📄</span>
      <span>{documentName}</span>
      {pageNumber && <span>· p.{pageNumber}</span>}
    </span>
  );
}
