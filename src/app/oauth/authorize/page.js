import { getServerSession } from "next-auth";
import jwt from "jsonwebtoken";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { authentication } from "@/utils/authenticationredirect"

export async function GET(request) {
  const url = new URL(request.url);
  const callbackUrl = url.searchParams.get("callbackUrl");

  if (callbackUrl && !validateRedirectUri(callbackUrl)) {
    return new Response("인증되지 않은 콜백 URL입니다.", { status: 400 });
  }

  const session = await getServerSession(authOptions);
  if (!session) {
    return new Response(
      JSON.stringify({ error: "Unauthorized", message: "로그인이 필요합니다." }),
      { status: 401 }
    );
  }

  const token = jwt.sign(
    {
      id: session.user.id,
      email: session.user.email,
      name: session.user.name,
    },
    process.env.JWT_SECRET,
    { expiresIn: "10m" }
  );

  if (callbackUrl) {
    const redirectUrl = `${callbackUrl}?token=${token}`;
    return Response.redirect(redirectUrl);
  }

  return new Response("연동이 완료되었습니다.", { status: 200 });
}