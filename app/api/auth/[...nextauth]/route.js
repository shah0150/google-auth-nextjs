import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/signin',  // Redirect here if not authenticated
    signOut: '/',       // Redirect here after sign out
    error: '/error',    // Redirect here on error (optional)
    verifyRequest: '/', // Redirect here to verify email (optional)
    newUser: '/dashboard', // Redirect new users to the dashboard after sign-up
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };