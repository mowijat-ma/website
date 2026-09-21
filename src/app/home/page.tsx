const socialLinks = [
  { label: 'واتساب', short: 'wa', href: 'https://wa.me/' },
  { label: 'إنستغرام', short: 'ig', href: 'https://instagram.com/' },
  { label: 'فيسبوك', short: 'f', href: 'https://facebook.com/' },
]

export default function Page() {
  return (
    <main dir="rtl" className="coming-soon-page">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="موفيجات، الصفحة الرئيسية">
          <span className="brand-mark">موفيجات</span>
          <span className="brand-subtitle">سينما وثقافة</span>
        </a>

        <nav className="social-nav" aria-label="تابعنا على منصات التواصل">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
              <span aria-hidden="true">{link.short}</span>
              <span className="sr-only">{link.label}</span>
            </a>
          ))}
        </nav>
      </header>

      <section id="top" className="hero-shell" aria-labelledby="coming-soon-title">
        <div className="hero-copy">
          <p className="eyebrow">سينما • ثقافة • حكايات</p>
          <h1 id="coming-soon-title">
            نكتب الآن
            <br />
            <span>الفصل القادم</span>
          </h1>
          <p className="intro">
            موقع موفيجات الجديد قادم قريباً. مساحة عربية جديدة لعشاق السينما،
            نشارك فيها القصص التي تبقى معنا بعد انتهاء الفيلم.
          </p>
          <div className="rule" aria-hidden="true" />
          <p className="follow-copy">تابعونا ليصلكم خبر الافتتاح أولاً</p>
          <div className="social-pills">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>

        <div className="hero-image-wrap">
          <div className="image-label">قريباً على الشاشة</div>
          <div className="hero-image-frame">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-0fQYkQsyvWz1rMReUIdQMWwGQ1Qjrk.png"
              alt="لقطة سينمائية بالأبيض والأسود لمخرج خلف كاميرا"
            />
            <div className="image-overlay" aria-hidden="true" />
          </div>
          <div className="image-caption">
            <span>موفيجات</span>
            <span>٢٠٢٦</span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <span>نلتقي قريباً</span>
        <span className="footer-dot" aria-hidden="true" />
        <span>من الشاشة إلى الحكاية</span>
      </footer>
    </main>
  )
}
