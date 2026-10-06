import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "../../i18n/routing";
import { hasEnvVars } from "../utils";

function isPublicPathname(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const hasLocale = routing.locales.some((locale) => locale === segments[0]);
  const routeSegments = hasLocale ? segments.slice(1) : segments;
  const route = routeSegments[0];

  return route === "coming-soon" || route === "login" || route === "auth";
}

function redirectToComingSoon(request: NextRequest, response: NextResponse) {
  const segments = request.nextUrl.pathname.split("/").filter(Boolean);
  const locale = routing.locales.find((candidate) => candidate === segments[0]);
  const destination =
    locale && locale !== routing.defaultLocale
      ? `/${locale}/coming-soon`
      : "/coming-soon";
  const url = request.nextUrl.clone();
  url.pathname = destination;
  const redirect = NextResponse.redirect(url);

  response.cookies.getAll().forEach((cookie) => redirect.cookies.set(cookie));
  return redirect;
}

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  if (!hasEnvVars) {
    return isPublicPathname(request.nextUrl.pathname)
      ? supabaseResponse
      : redirectToComingSoon(request, supabaseResponse);
  }

  // With Fluid compute, don't put this client in a global environment
  // variable. Always create a new one on each request.
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // Do not run code between createServerClient and
  // supabase.auth.getClaims(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  // IMPORTANT: If you remove getClaims() and you use server-side rendering
  // with the Supabase client, your users may be randomly logged out.
  const { data } = await supabase.auth.getClaims();
  const user = data?.claims;

  if (!user && !isPublicPathname(request.nextUrl.pathname)) {
    return redirectToComingSoon(request, supabaseResponse);
  }

  // IMPORTANT: You *must* return the supabaseResponse object as it is.
  // If you're creating a new response object with NextResponse.next() make sure to:
  // 1. Pass the request in it, like so:
  //    const myNewResponse = NextResponse.next({ request })
  // 2. Copy over the cookies, like so:
  //    myNewResponse.cookies.setAll(supabaseResponse.cookies.getAll())
  // 3. Change the myNewResponse object to fit your needs, but avoid changing
  //    the cookies!
  // 4. Finally:
  //    return myNewResponse
  // If this is not done, you may be causing the browser and server to go out
  // of sync and terminate the user's session prematurely!

  return supabaseResponse;
}
