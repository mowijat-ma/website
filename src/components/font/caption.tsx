export default function Heading1 ({value}:  {value?:string}){
    return (
        <>
        <div className="lg:text-base text-sm">
            {value}
        </div>
        </>
    )
}