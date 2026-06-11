import { cn } from "@/lib/utils";

export default function Heading2 ({className, ...props}: {className?: string} & React.HTMLAttributes<HTMLDivElement>){
    return (
        <>
        <div className={cn("lg:text-3xl text-2xl font-semibold", className)} {...props}>
             {props.children}
        </div>
        </>
    )
}