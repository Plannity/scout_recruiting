// Pre-launch password gate for the entire site (Cloudflare Pages Function).
//
// This runs on every request before any page or asset is served. It uses HTTP
// Basic Auth: the browser shows a native login dialog and nothing is served
// until the correct password is entered. Any username works; only the password
// is checked.
//
// Password: defaults to the value below, but set SITE_PASSWORD in the Pages
// project (Settings -> Environment variables) to override it without editing code.
//
// TO MAKE THE SITE PUBLIC AT LAUNCH: delete this file (or the whole functions/
// directory) and redeploy.
export const onRequest = async ({ request, env, next }) => {
  const expected = (env && env.SITE_PASSWORD) || "Happy2026Recruiting";

  const header = request.headers.get("Authorization") || "";
  if (header.startsWith("Basic ")) {
    let decoded = "";
    try {
      decoded = atob(header.slice(6));
    } catch (e) {
      decoded = "";
    }
    // Authorization is "username:password"; we check the password only.
    const password = decoded.slice(decoded.indexOf(":") + 1);
    if (password === expected) {
      return next();
    }
  }

  return new Response("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Scout Recruiting (pre-launch)", charset="UTF-8"',
      "Cache-Control": "no-store",
    },
  });
};
