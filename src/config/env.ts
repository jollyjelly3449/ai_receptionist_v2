export const env = {
  VAPI_API_KEY: process.env.NEXT_PUBLIC_VAPI_API_KEY,
  VAPI_ASSISTANT_ID: process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID,
} as const;

const requiredEnvVars = ['VAPI_API_KEY', 'VAPI_ASSISTANT_ID'] as const;

for (const envVar of requiredEnvVars) {
  if (!env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}
