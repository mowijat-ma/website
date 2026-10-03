// app/[locale]/@modal/(..)articles/page.tsx
// import ModalWrapper from "@/components/ModalWrapper";
import ModalWrapper from "@/components/wrappers/ModalWrapper";
import ArticlesPage from "../../(navigation)/articles/page"; // استيراد الصفحة الأصلية إذا أردت عرض نفس المحتوى

export default function ArticlesModal(props: Record<string, unknown>) {
  return (
    <ModalWrapper>
      <div className="">
        <ArticlesPage {...props} />
      </div>
    </ModalWrapper>
  );
}