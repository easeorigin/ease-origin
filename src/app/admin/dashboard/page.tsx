import { adminAuth } from "@/middleware/adminAuth";
import { redirect } from "next/navigation";
import Dashboard from "./Dashboard";

const Page = async () => {
  const session = await adminAuth();

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <Dashboard />
    </>
  );
};

export default Page;
