import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Account',
};

export default function SignUpPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Create your account</h1>
        <p className="text-sm text-muted-foreground">Start your AI document journey today</p>
      </div>
      {/* TODO: <SignUpForm /> */}
      <div className="rounded-lg border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
        Sign Up Form — coming soon
      </div>
    </div>
  );
}
