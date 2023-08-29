import { withAuth } from "next-auth/middleware";

//TODO:Revisit this
export default withAuth({
  pages: {
    signIn: "/",
  },
});

export const config = {
  matcher: ["/users/:path*", "/conversations/:path*"],
};
