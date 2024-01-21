import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";
import type { NextApiRequest, NextApiResponse } from "next";

export default handleAuth({
  async login(req: NextApiRequest, res: NextApiResponse) {
    await handleLogin(req, res, {
      authorizationParams: {
        prompt: "login",
      },
      returnTo: "/profile",
    });
  },
});
