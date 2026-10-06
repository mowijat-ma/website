import AdminLoginForm from "../../login/admin-login-form";

export default function LoginModal() {
  return (
    <div className="fixed inset-0 z-50">
      <AdminLoginForm />
    </div>
  );
}
