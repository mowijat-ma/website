export default function Heading1 ({value}:  {value?:string}){
    return (
        <>
        <div className="lg:text-5xl text-3xl">
            {value}
        </div>
        </>
    )
}