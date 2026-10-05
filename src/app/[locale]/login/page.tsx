import type { Metadata } from "next";
import AdminLoginForm from "./admin-login-form";

export const metadata: Metadata = {
  title: "Admin sign in | Mowijat",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LoginPage() {
  return <AdminLoginForm />;
}
