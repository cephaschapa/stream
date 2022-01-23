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
                clientId: process.env.GITHUB_ID,
                clientSecret: process.env.GITHUB_SECRET
            }
        ),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            scope:
            'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/youtube.readonly',
            authorization: {
                params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code"
                }
            }
            
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET
        }),
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
    ],
    secret: process.env.SECRET_KEY,

    jwt: {
        encryption: true
      },
    
    callbacks: {
        async jwt(token, account) {
            if (account ?.accessToken) {
                token.accessToken = account.accessToken
            }
            return token;
            },
            redirect: async (url, _baseUrl)=>{
            if (url === '/user') {
                return Promise.resolve('/')
            }
            return  Promise.resolve('/')
            }
        }
})