import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  // Routes that can be accessed while signed out
  //trying to have test-comments page not publically accessable 
  publicRoutes: ['/src/app/api', '/src/app/collection-filter-test', 
                  '/src/app/CollectionViewSandbox', '/src/app/comments', 
                  '/src/app/item', '/src/app/item-detail-test', '/src/app/itemInputSandbox'
                , '/src/app/preview', '/src/app/resizeableSandbox', '/src/app/tag-dropdown-test', '/src/app/test-grid', '/src/app/user-summary', '/src/app/userSandbox'],
  // Routes that can always be accessed, and have
  // no authentication information
  ignoredRoutes: ['/src/app/api', '/src/app/collection-filter-test', 
  '/src/app/CollectionViewSandbox', '/src/app/comments', 
  '/src/app/item', '/src/app/item-detail-test', '/src/app/itemInputSandbox'
, '/src/app/preview', '/src/app/resizeableSandbox', '/src/app/tag-dropdown-test', '/src/app/test-grid', '/src/app/user-summary', '/src/app/userSandbox'],
});
 
export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};