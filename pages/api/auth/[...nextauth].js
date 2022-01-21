import NextAuth from 'next-auth';
import GithubProvidor from 'next-auth/providers/github';

export default NextAuth({
    providers: [
        GithubProvidor(
            {
                clientId: process.env.GITHUB_ID,
                clientSecret: process.env.GITHUB_SECRET
            }
        )

    ]
})