import { cn } from "@/lib/utils";

export default function Article ({className, ...props}: {className?: string, children: React.ReactNode}){
    return (
        <>
        <div className={cn("text-lg text-muted-foreground- ", className)} {...props}>
             {props.children}
        </div>
        </>
    )
}