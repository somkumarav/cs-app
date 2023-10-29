"use client";

import { Button } from "../_components/ui/Button";
import { Input } from "../_components/ui/Input";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  console.log(process.env.NEXTAUTH_URL);
  return (
    <div className="bg-skin-base min-h-screen">
      <div className="container flex h-screen items-center justify-center">
        <div className="text-skin-secondaryColor flex flex-col">
          Login
          <Input name="email" className="mb-2" />
          <Input name="password" className="mb-2" />
          <Button className="mb-2">Sign In</Button>
          <Button onClick={() => signIn("google")}>Sign In with Google</Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
