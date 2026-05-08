import { cn } from "@/lib/utils";

export default function Heading4 ({className, ...props}: {className?: string} & React.HTMLAttributes<HTMLDivElement>        ){
    return (
        <>
        <div className={cn("lg:text-lg- text-lg leading-normal font-semibold", className)} {...props}>
             {props.children}
        </div>
        </>
    )
}