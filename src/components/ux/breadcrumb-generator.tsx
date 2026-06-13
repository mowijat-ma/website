import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { BreadCrumbLinksType } from "@/types";

export default async function BreadcrumbGenerator({currentPage, links}:{
    currentPage?: string;
    links: BreadCrumbLinksType[]
}){
     
    return (<>
    <Breadcrumb dir="rtl" className="mb-8 px-8 sm:px-4">
            <BreadcrumbList>
                {links && links.map((item, i)=>(
                    
                        <BreadcrumbItem key={i} >
                                <BreadcrumbLink href={item.href}>{item.title}</BreadcrumbLink>
                            <BreadcrumbSeparator />
                        </BreadcrumbItem>
                   
                   
                ))}
                {/* <Breadcr umbSeparator /> */}
                <BreadcrumbItem>
                    <BreadcrumbPage>{currentPage}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    </>)
}