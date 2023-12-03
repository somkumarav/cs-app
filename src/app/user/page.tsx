"use client";

// import { useSession } from "next-auth/react";
import { MainLayout } from "../_components/layout/MainLayout";
// import { redirect } from "next/navigation";

const User = () => {
  // const { data: session } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     redirect("/login");
  //   },
  // });

  return (
    <MainLayout>
      <div>hello from user</div>
    </MainLayout>
  );
};
export default User;
