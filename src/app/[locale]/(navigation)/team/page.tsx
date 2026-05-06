export default function TeamPage() {
  const team = [
    {
      id: 1,
      name: "محمد علي",
      role: "المؤسس والمحرر الرئيسي",
      bio: "ناقد سينمائي متخصص بخبرة 10 سنوات",
    },
    {
      id: 2,
      name: "فاطمة أحمد",
      role: "محررة المحتوى",
      bio: "متخصصة في النقد الثقافي والدراسات السينمائية",
    },
    {
      id: 3,
      name: "عمر السعدي",
      role: "مراسل سينمائي",
      bio: "متابع للمهرجانات والأحداث السينمائية الدولية",
    },
    {
      id: 4,
      name: "ليلى محمود",
      role: "مصممة الموقع",
      bio: "مصممة تفاعلية متخصصة في تجربة المستخدم",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">فريقنا</h1>
          <p className="text-lg text-muted-foreground">
            نحن مجموعة من المتخصصين والمحترفين المتحمسين للسينما والثقافة
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="border rounded-lg p-6 hover:shadow-lg transition-shadow bg-background"
            >
              <div className="h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary font-semibold text-sm mb-3">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
