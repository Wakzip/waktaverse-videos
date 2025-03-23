import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Discord from "next-auth/providers/discord"
import Naver from "next-auth/providers/naver"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, Discord, Naver],
})