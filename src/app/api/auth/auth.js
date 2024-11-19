import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { SupabaseAdapter } from "@auth/supabase-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    secret: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
}),
  session: {
    strategy: "jwt",
  },
  jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
  },
  session: async ({ session, token }) => {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.name = token.name;
      return session;
  },
})