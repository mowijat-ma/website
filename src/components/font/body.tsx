export default function Heading1 ({value}:  {value?:string}){
    return (
        <>
        <div className="lg:text-xl text-lg">
            {value}
        </div>
        </>
    )
}