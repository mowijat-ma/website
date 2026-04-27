export default function Heading3 ({value}:  {value?:string}){
    return (
        <>
        <div className="lg:text-2xl text-xl">
            {value}
        </div>
        </>
    )
}