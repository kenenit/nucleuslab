import { NextResponse } from "next/server";
import { auth } from "@/auth";

// Next.js 16 renamed `middleware.ts` to `proxy.ts` (and the exported function
// to `proxy`) — same request-interception behavior, clearer naming, and it
// now runs on the Node.js runtime by default instead of the limited Edge
// runtime. See: https://nextjs.org/docs/app/getting-started/proxy
export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { pathname } = req.nextUrl;

  if (!isLoggedIn && pathname !== "/admin/login") {
    return NextResponse.redirect(new URL("/admin/login", req.nextUrl.origin));
  }
});

export const config = {
  matcher: ["/admin/:path*"],
};
