import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Semantic Search' };

export default function SearchPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Semantic Search</h1>
        <p className="text-sm text-muted-foreground">
          Search across all indexed documents using AI-powered semantic similarity.
        </p>
      </div>
      {/* TODO: <SemanticSearch /> */}
      <div className="rounded-xl border border-dashed border-border p-16 text-center text-sm text-muted-foreground">
        Search coming soon
      </div>
    </div>
  );
}
