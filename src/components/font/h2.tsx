export default function Heading2 ({value}:  {value?:string}){
    return (
        <>
        <div className="lg:text-3xl text-2xl">
            {value}
        </div>
        </>
    )
}