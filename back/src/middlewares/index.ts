import compression from "compression";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import { ExtractJwt, Strategy } from "passport-jwt";

const corsMiddleware = cors();
const compressMiddleware = compression({});
const passportMiddleware = passport.use(
  "jwt",
  new Strategy(
    { jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken() },
    (jwtPayload, done) => {

    },
  ),
);
const sessionMiddleware = session({
  secret: process.env.SESSION_SECRET as string,
  resave: false,
  saveUninitialized: false,
});

export {
  corsMiddleware as cors,
  compressMiddleware as compress,
  passportMiddleware as passport,
  sessionMiddleware as session,
}
