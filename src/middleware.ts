import { withAuth } from "next-auth/middleware"
// import { getToken } from 'next-auth/jwt'

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    // console.log(req.nextauth.token)
  },
  {
    callbacks: {
      authorized: async ({ token }) => {
        return !!token
      }
    },
  }
)

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/:function*',
}