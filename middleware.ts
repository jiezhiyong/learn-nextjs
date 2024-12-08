import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  // 设置路由匹配规则，决定哪些路由需要进行授权检查
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'], // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
};
