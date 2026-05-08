import { cn } from "@/lib/utils";

export default function Heading3 ({className, ...props}: {className?: string} & React.HTMLAttributes<HTMLDivElement>){
    return (
        <>
        <div className={cn("lg:text-2xl text-lg leading-normal font-semibold", className)} {...props}>
             {props.children}
        </div>
        </>
    )
}