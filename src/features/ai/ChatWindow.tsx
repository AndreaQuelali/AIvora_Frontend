/**
 * ChatWindow — AI Chat container shell.
 * This is a Client Component since it will manage local message state.
 * TODO: Implement with ChatMessage, ChatInput, and Citation components.
 */
export function ChatWindow() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface">
      {/* Message list */}
      <div className="flex-1 overflow-y-auto p-4" id="chat-messages">
        {/* TODO: <ChatMessage /> components mapped from query results */}
        <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
          Start a conversation to get insights from your documents.
        </div>
      </div>
      {/* Input */}
      <div className="border-t border-border p-4">
        {/* TODO: <ChatInput /> */}
        <div className="h-12 rounded-lg bg-surface-2" />
      </div>
    </div>
  );
}
