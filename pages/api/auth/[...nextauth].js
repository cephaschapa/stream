import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export default NextAuth({
    providers: [
        GithubProvider(
            {
                clientId: "Iv1.93ca5170f2fe45c5",
                clientSecret: "63ad06a6a364fb91a85c6524190a88d32a702ad2"
            }
        )

    ]
})