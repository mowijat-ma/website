export default function Body ({...props}){
    return (
        <>
        <div className="lg:text-lg text-md">
             {props.children}
        </div>
        </>
    )
}