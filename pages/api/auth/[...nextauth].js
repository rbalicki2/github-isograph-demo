// // pages/api/auth/[...nextauth].js
// import NextAuth from "next-auth";
// import Providers from "next-auth/providers";

// export default (req, res) =>
//   NextAuth(req, res, {
//     providers: [
//       Providers.GitHub({
//         clientId: process.env.GITHUB_CLIENT_ID,
//         clientSecret: process.env.GITHUB_CLIENT_SECRET,
//       }),
//     ],
//     debug: process.env.NODE_ENV === "development",
//     secret: process.env.AUTH_SECRET ?? "thiscanbegibberish",
//     jwt: {
//       secret: process.env.JWT_SECRET ?? "socanthis",
//     },
//     callbacks: {
//       async redirect(url, baseUrl) {
//         return "/";
//       },
//     },
//   });

import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  // callbacks: {
  //   async redirect(url, baseUrl) {
  //     return "/";
  //   },
  // },
  // ...add more providers here
};
export default NextAuth(authOptions);
