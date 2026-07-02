import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'AI Chat' };

export default function ChatPage() {
  return (
    <div className="flex h-full flex-col space-y-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">AI Chat</h1>
        <p className="text-sm text-muted-foreground">
          Ask questions about your documents using retrieval-augmented generation.
        </p>
      </div>
      {/* TODO: <ChatWindow /> */}
      <div className="flex flex-1 items-center justify-center rounded-xl border border-dashed border-border text-sm text-muted-foreground">
        AI Chat coming soon
      </div>
    </div>
  );
}
