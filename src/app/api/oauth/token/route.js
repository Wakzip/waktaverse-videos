import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json();
  const { client_id, client_secret, code, redirect_uri } = body;

  // client_id 및 client_secret 검증
  const isValidClient = validateClient(client_id, client_secret);
  if (!isValidClient) {
    return NextResponse.json({ error: 'invalid_client' }, { status: 400 });
  }

  // Authorization Code 검증
  const userId = validateAuthorizationCode(code, client_id);
  if (!userId) {
    return NextResponse.json({ error: 'invalid_grant' }, { status: 400 });
  }

  const accessToken = generateAccessToken(userId);
  const refreshToken = generateRefreshToken(userId);

  return NextResponse.json({
    access_token: accessToken,
    token_type: 'Bearer',
    expires_in: 3600,
    refresh_token: refreshToken,
  });
}