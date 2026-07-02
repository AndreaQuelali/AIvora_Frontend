/**
 * ChatMessage — single message bubble shell.
 * Render styles differ for 'user' and 'assistant' roles.
 * TODO: Implement with role-based styling, timestamp, and citation links.
 */
export interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: Date;
}

export function ChatMessage({ role, content, timestamp }: ChatMessageProps) {
  return (
    <div data-role={role} className="flex flex-col gap-1">
      <div className="max-w-[80%] rounded-lg bg-surface-2 p-3 text-sm">
        {/* TODO: Render markdown content with citation links */}
        <p>{content}</p>
      </div>
      {timestamp && (
        <time className="text-xs text-muted-foreground">{timestamp.toLocaleTimeString()}</time>
      )}
    </div>
  );
}
