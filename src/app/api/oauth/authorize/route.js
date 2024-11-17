import { NextResponse } from 'next/server';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const clientId = searchParams.get('client_id');
  const redirectUri = searchParams.get('redirect_uri');
  const state = searchParams.get('state');

  const isValidClient = validateClientId(clientId);
  if (!isValidClient) {
    return NextResponse.json({ error: 'invalid_client' }, { status: 400 });
  }

  const session = await getSession(req);
  if (!session) {
    return NextResponse.redirect(`/auth/login?redirect_uri=${redirectUri}&state=${state}`);
  }

  const code = generateAuthorizationCode(session.user.id, clientId);
  const redirectWithCode = `${redirectUri}?code=${code}&state=${state}`;

  return NextResponse.redirect(redirectWithCode);
}
