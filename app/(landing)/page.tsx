import React from "react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Landingpage = () => {
  return (
    <div>
        Landing page (unprotected)
      <div>
        <Link href="/sign-in">
          <Button>Login</Button>
        </Link>
        <Link href="/sign-up">
          <Button>Register</Button>
        </Link>
      </div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Landingpage;
