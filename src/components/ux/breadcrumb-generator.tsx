import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

export default async function BreadcrumbGenerator({currentPage, links}:{
    currentPage?: string;
    links: [{
        title: string,
        href: string
    }]
}){
     
    return (<>
    <Breadcrumb dir="rtl" className="mb-8 px-8 sm:px-4">
            <BreadcrumbList>
                {links && links.map((item, i)=>(
                    <BreadcrumbItem key={i}>
                        <BreadcrumbLink href={item.href}>{item.title}</BreadcrumbLink>
                    </BreadcrumbItem>
                ))}
                <BreadcrumbSeparator />
                {/* <BreadcrumbSeparator /> */}
                <BreadcrumbItem>
                    <BreadcrumbPage>{currentPage}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    </>)
}