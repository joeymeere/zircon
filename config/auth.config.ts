export const AUTH_DOMAIN = process.env.AUTH_DOMAIN || "";

const nonceStr = (nonce: string) => `|| id=${nonce}`;
export const signInMessage = (nonce: string, domain: string) =>
  "Welcome to Zircon💎!\n\nSign the following nonce to verify:" + domain + nonceStr(nonce);