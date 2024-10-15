/**
 * An array of routes that are accessible to the public
 * these routes do not require authentication
 * @type {string[]}
 */
export const pubicRoutes = [
    "/",
    "/clubs"
    ,"/settings"
]

/**
 * An array of routes that are used for authentication
 * These routes will redirect loggedin user to /settings
 * @type {string[]}
 */
export const authRoutes=[
    "/api/auth/signin",
]

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix will be used for API authentication purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth"

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings"