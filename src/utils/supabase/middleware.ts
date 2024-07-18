import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  // Fetch the current user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Define paths that require authentication
  const protectedPaths = ['/account', '/profile', '/settings',];
  const excludedPaths = ['/error','/notification','/api/auth/google-login','/auth/callback'];

  // If no user is authenticated and the request is not for login or auth pages,
  // redirect to the home page ('/') only if it's not the home page itself.
  if (
    !user &&
    !request.nextUrl.pathname.startsWith('/login') &&
    !request.nextUrl.pathname.startsWith('/register') &&
    !protectedPaths.includes(request.nextUrl.pathname) &&
    !excludedPaths.includes(request.nextUrl.pathname) &&
    request.nextUrl.pathname !== '/'

  ) {
    // Redirect to the home page if user is not authenticated
    const url = request.nextUrl.clone();
    url.pathname = '/';
    return NextResponse.redirect(url);
  }

  // Return the response object with cookies
  return supabaseResponse;
}
