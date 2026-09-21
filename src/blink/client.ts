import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'lanchonete-online-site-5pfev5dv',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_Cbrh6cHTnNZkoWgs53FhqL3xMVp2eBcZ',
  authRequired: false,
  auth: { mode: 'managed' },
})
