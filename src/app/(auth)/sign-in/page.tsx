import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Sign in to your AIvora account.',
};

/**
 * Sign-in page — shell only. Form will live in features/auth/SignInForm.
 */
export default function SignInPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-1 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
        <p className="text-sm text-muted-foreground">Sign in to your AIvora account</p>
      </div>
      {/* TODO: <SignInForm /> */}
      <div className="rounded-lg border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
        Sign In Form — coming soon
      </div>
    </div>
  );
}
