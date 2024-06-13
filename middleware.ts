import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const protectedRoutes: Array<string> = [];

export function middleware(request: NextRequest) {
  // get the after "api/" part of the url
  if (request.url.includes("api")) {
    const endpoint = request.url.split("api/")[1];
    if (protectedRoutes.includes(endpoint)) {
      const jwtToken = request.headers.get("Authorization");
      if (!jwtToken) {
        return {
          status: 401,
          message: "Unauthorized",
        };
      }
      jwt.verify(jwtToken, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          return {
            status: 401,
            message: "Unauthorized",
          };
        }
      });
      if (!jwtToken) {
        return {
          status: 401,
          message: "Unauthorized",
        };
      }
      return;
    }
  }
}
