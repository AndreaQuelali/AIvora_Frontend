/**
 * DocumentUpload — file dropzone shell for RAG document ingestion.
 * TODO: Implement with react-dropzone, upload progress bar,
 * and documentsService.upload() via TanStack Mutation.
 */
export function DocumentUpload() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-xl border-2 border-dashed border-border bg-surface p-12 transition-colors hover:border-primary/50">
      <div className="text-4xl">📤</div>
      <div className="text-center">
        <p className="text-sm font-medium">Drop files here or click to upload</p>
        <p className="mt-1 text-xs text-muted-foreground">PDF, Word, TXT, Markdown — up to 50 MB</p>
      </div>
      {/* TODO: File input + progress indicator */}
    </div>
  );
}
