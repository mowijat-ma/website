import { cn } from "@/lib/utils";

export default function Heading1({ className, ...props }: { className?: string } & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <>
            <div className={cn("lg:text-4xl text-3xl font-bold", className)}   {...props}>
                {props.children}
            </div>
        </>
    )
}