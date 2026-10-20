export const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const asset = (file: string) => `${BASE}/assets/${file}`;
