import NextAuth from 'next-auth'
import Provider from 'next-auth/providers'

export default NextAuth({
    // configure one or more authentication providers
    providers: [
        Provider.Facebook({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        }),

        //add more providers for other authentication options
    ]
});