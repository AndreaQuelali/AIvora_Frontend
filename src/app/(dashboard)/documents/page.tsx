import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Documents' };

export default function DocumentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Documents</h1>
          <p className="text-sm text-muted-foreground">
            Manage and index your documents for AI search.
          </p>
        </div>
        {/* TODO: <UploadButton /> */}
      </div>
      {/* TODO: <DocumentList /> */}
      <div className="rounded-xl border border-dashed border-border p-16 text-center text-sm text-muted-foreground">
        No documents yet — upload your first document to get started.
      </div>
    </div>
  );
}
