/**
 * SemanticSearch — AI-powered search bar shell.
 * TODO: Implement with useDebounce, TanStack Query for suggestions, and
 * Framer Motion for animated suggestion dropdown.
 */
export function SemanticSearch() {
  return (
    <div className="relative w-full">
      <div className="flex items-center rounded-xl border border-border bg-surface px-4 py-3 shadow-sm">
        <span className="mr-3 text-muted-foreground">🔍</span>
        <input
          type="search"
          placeholder="Search across your documents..."
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          aria-label="Semantic search"
        />
      </div>
      {/* TODO: Suggestion dropdown */}
    </div>
  );
}
