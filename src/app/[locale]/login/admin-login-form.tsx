"use client";

import { useState, type FormEvent } from "react";
import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { ArrowLeft, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { hasEnvVars } from "@/lib/utils";
import { createClient } from "@/lib/supabase/client";

const copy = {
  ar: {
    eyebrow: "مساحة الإدارة",
    title: "مرحباً بعودتك",
    description: "سجّل الدخول للمتابعة إلى لوحة إدارة مويجات.",
    email: "البريد الإلكتروني",
    password: "كلمة المرور",
    submit: "تسجيل الدخول",
    submitting: "جارٍ تسجيل الدخول...",
    invalid: "تعذّر تسجيل الدخول. تحقق من البريد الإلكتروني وكلمة المرور.",
    setup: "إعدادات المصادقة غير مكتملة. يرجى التواصل مع مسؤول الموقع.",
    unexpected: "حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.",
    showPassword: "إظهار كلمة المرور",
    hidePassword: "إخفاء كلمة المرور",
    back: "العودة إلى الموقع",
    secure: "دخول آمن للمسؤولين",
  },
  fr: {
    eyebrow: "Espace administration",
    title: "Heureux de vous revoir",
    description: "Connectez-vous pour accéder à l’administration de Mowijat.",
    email: "Adresse e-mail",
    password: "Mot de passe",
    submit: "Se connecter",
    submitting: "Connexion...",
    invalid: "Connexion impossible. Vérifiez votre adresse e-mail et votre mot de passe.",
    setup: "La configuration de l’authentification est incomplète. Contactez l’administrateur du site.",
    unexpected: "Une erreur inattendue s’est produite. Veuillez réessayer.",
    showPassword: "Afficher le mot de passe",
    hidePassword: "Masquer le mot de passe",
    back: "Retour au site",
    secure: "Accès sécurisé réservé aux administrateurs",
  },
  en: {
    eyebrow: "Administration",
    title: "Welcome back",
    description: "Sign in to continue to the Mowijat administration area.",
    email: "Email address",
    password: "Password",
    submit: "Sign in",
    submitting: "Signing in...",
    invalid: "Unable to sign in. Check your email address and password.",
    setup: "Authentication is not configured. Please contact the site administrator.",
    unexpected: "Something went wrong. Please try again.",
    showPassword: "Show password",
    hidePassword: "Hide password",
    back: "Back to website",
    secure: "Secure administrator access",
  },
} as const;

export default function AdminLoginForm() {
  const locale = useLocale();
  const text = copy[locale as keyof typeof copy] ?? copy.ar;
  const isArabic = locale === "ar";
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!hasEnvVars) {
      setError(text.setup);
      return;
    }

    setIsSubmitting(true);
    try {
      const supabase = createClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });
      if (signInError) {
        console.log("signInError:", signInError);
        setError(text.invalid);
        return;
      }

      router.replace("/");
      router.refresh();
    } catch {
      console.error("Unexpected error during sign-in");
      setError(text.unexpected);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main
      dir={isArabic ? "rtl" : "ltr"}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f5f7fa] px-4 py-12 text-slate-900"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 size-[34rem] -translate-x-1/2 rounded-full bg-sky-100/70 blur-3xl"
      />

      <section className="relative grid w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_28px_90px_-38px_rgba(15,23,42,0.28)] md:min-h-[590px] md:grid-cols-[1fr_0.9fr]">
        <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-14">
          <Link
            href="/"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
          >
            <ArrowLeft aria-hidden="true" className="size-4 rtl:rotate-180" />
            {text.back}
          </Link>

          <div className="mx-auto w-full max-w-sm py-12 md:py-0">
            <div className="mb-8 inline-flex size-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
              <LockKeyhole aria-hidden="true" className="size-5" />
            </div>
            <p className="mb-3 text-sm font-semibold tracking-wide text-sky-700">
              {text.eyebrow}
            </p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {text.title}
            </h1>
            <p className="mt-3 text-sm leading-7 text-slate-500">
              {text.description}
            </p>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label
                  htmlFor="admin-email"
                  className="block text-sm font-medium text-slate-700"
                >
                  {text.email}
                </label>
                <div className="relative">
                  <Mail
                    aria-hidden="true"
                    className="pointer-events-none absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400"
                  />
                  <Input
                    autoComplete="username"
                    className="h-12 rounded-xl border-slate-200 ps-10 text-start"
                    dir="ltr"
                    id="admin-email"
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="name@example.com"
                    required
                    type="email"
                    value={email}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="admin-password"
                  className="block text-sm font-medium text-slate-700"
                >
                  {text.password}
                </label>
                <div className="relative">
                  <LockKeyhole
                    aria-hidden="true"
                    className="pointer-events-none absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-400"
                  />
                  <Input
                    autoComplete="current-password"
                    className="h-12 rounded-xl border-slate-200 ps-10 pe-12 text-start"
                    dir="ltr"
                    id="admin-password"
                    name="password"
                    onChange={(event) => setPassword(event.target.value)}
                    required
                    type={showPassword ? "text" : "password"}
                    value={password}
                  />
                  <button
                    aria-label={showPassword ? text.hidePassword : text.showPassword}
                    className="absolute end-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-400 transition-colors hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-600"
                    onClick={() => setShowPassword((visible) => !visible)}
                    type="button"
                  >
                    {showPassword ? (
                      <EyeOff aria-hidden="true" className="size-4" />
                    ) : (
                      <Eye aria-hidden="true" className="size-4" />
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <p
                  aria-live="polite"
                  className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
                  role="alert"
                >
                  {error}
                </p>
              )}

              <Button
                className="h-12 w-full rounded-xl bg-sky-700 text-sm font-semibold text-white shadow-sm hover:bg-sky-800"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? text.submitting : text.submit}
              </Button>
            </form>
          </div>

          <p className="text-center text-xs text-slate-400">{text.secure}</p>
        </div>

        <aside className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950 p-10 text-white md:flex lg:p-14">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 size-80 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="absolute -right-8 -top-8 size-48 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-24 size-80 rounded-full bg-sky-500/10 blur-2xl"
          />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-300">
              MOWIJAT
            </p>
            <div className="mt-16 h-px w-12 bg-sky-400" />
            <p className="mt-6 text-3xl font-semibold leading-snug tracking-tight">
              {isArabic
                ? "نبضُ السينما.. وإكسيرُ الثقافة."
                : locale === "fr"
                  ? "Le cinéma en mouvement, la culture en profondeur."
                  : "The pulse of cinema. The essence of culture."}
            </p>
          </div>
          <p className="relative text-sm text-slate-400">Mowijat.ma</p>
        </aside>
      </section>
    </main>
  );
}
