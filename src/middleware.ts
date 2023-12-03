export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/about", "/user"], // Match routes starting with '/protected'
};
