import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import FacebookProvider from "next-auth/providers/facebook";
import InstagramProvider from "next-auth/providers/instagram";
import LinkedInProvider from "next-auth/providers/linkedin";


export default NextAuth({
    providers: [
        GithubProvider(
            {
                clientId: "Iv1.93ca5170f2fe45c5",
                clientSecret: "63ad06a6a364fb91a85c6524190a88d32a702ad2"
            }
        ),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET
        // }),
        // FacebookProvider({
        //     clientId: process.env.FACEBOOK_CLIENT_ID,
        //     clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        // }),
        // TwitterProvider({
        //     clientId: process.env.TWITTER_CLIENT_ID,
        //     clientSecret: process.env.TWITTER_CLIENT_SECRET
        // }),
        // LinkedInProvider({
        //     clientId: process.env.LINKEDIN_CLIENT_ID,
        //     clientSecret: process.env.LINKEDIN_CLIENT_SECRET
        // }),
        // InstagramProvider({
        //     clientId: process.env.INSTAGRAM_CLIENT_ID,
        //     clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
        // })
    ]
})