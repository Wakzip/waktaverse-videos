import { handlers } from "../auth";
export const { GET, POST } = handlers
import { naverFetchInterceptor } from "../../../interceptor/naver-interceptor"; // 네이버 인터셉터 가져오기
import { NextRequest } from "next/server";

const originalFetch = fetch;

export async function POST(req) {
  return await AuthPOST(req);
}

export async function GET(req) {
  const url = new URL(req.url);

  if (url.pathname === "/api/auth/callback/naver") {
    global.fetch = naverFetchInterceptor(originalFetch);
    const response = await AuthGET(req);
    global.fetch = originalFetch; // 원래 fetch로 복구
    return response;
  }

  return await AuthGET(req);
}