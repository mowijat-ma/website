import { cn } from "@/lib/utils";
import { FontComponentProps } from "@/types";


export default function Caption ({value}:  {value?:string}){
    return (
        <>
        <div className="lg:text-base text-sm">
            {value}
        </div>
        </>
    )
}
export function PostMeta({className, ...props }: FontComponentProps) {
  return (
    <p 
      className={
        cn("lg:text-base text-sm", className)
      } 
      {...props}
    >
      {props.children}
    </p>
  );
}