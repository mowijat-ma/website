import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { BreadCrumbLinksType } from "@/types";

export default async function BreadcrumbGenerator({currentPage, links}:{
    currentPage?: string;
    links: BreadCrumbLinksType[]
}){
     
    return (<>
    <Breadcrumb dir="rtl" className="my-4 sm:mb-8 sm:mt-0 px-8 sm:px-4">
            <BreadcrumbList className="flex-nowrap max-w-[90vw] overflow-hidden">
                {links && links.map((item, i)=>(
                    
                        <BreadcrumbItem key={i} >
                                <BreadcrumbLink href={item.href} >{item.title}</BreadcrumbLink>
                            <BreadcrumbSeparator />
                        </BreadcrumbItem>
                   
                   
                ))}
                {/* <Breadcr umbSeparator /> */}
                <BreadcrumbItem>
                    <BreadcrumbPage className="line-clamp-1 text-nowrap text-ellipsis">{currentPage}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    </>)
}