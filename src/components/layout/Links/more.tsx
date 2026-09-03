import { Route } from "next"
import Link from "next/link"

const MoreLink = ({link}: {link:string})=>{
    
    return (<>
    <Link href={link as Route}>
        
    </Link>
    </>)
    }