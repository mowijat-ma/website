// app/[locale]/@modal/(..)articles/page.tsx
// import ModalWrapper from "@/components/ModalWrapper";
import ModalWrapper from "@/components/wrappers/ModalWrapper";
import ArticlesPage from "../../(navigation)/articles/page"; // استيراد الصفحة الأصلية إذا أردت عرض نفس المحتوى

export default function ArticlesModal(props: any) {
  return (
    <ModalWrapper>
      <div className="max-h-[90vh] overflow-y-auto custom-h-scroll p-4">
        {/* يمكنك عرض مكونات صفحة المقالات هنا مباشرة */}
        <ArticlesPage {...props} />
      </div>
    </ModalWrapper>
  );
}