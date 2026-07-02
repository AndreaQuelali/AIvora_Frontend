import { z } from 'zod';

// ---------------------------------------------------------------------------
// Schema — validates all required env vars at startup, fails fast on errors
// ---------------------------------------------------------------------------
const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url().min(1),
  NEXT_PUBLIC_APP_URL: z.string().url().min(1),
  NEXT_PUBLIC_APP_NAME: z.string().min(1).default('AIvora'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

// ---------------------------------------------------------------------------
// Parse and export — import from this file instead of process.env directly
// ---------------------------------------------------------------------------
export const env = envSchema.parse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  NODE_ENV: process.env.NODE_ENV,
});

export type Env = z.infer<typeof envSchema>;
