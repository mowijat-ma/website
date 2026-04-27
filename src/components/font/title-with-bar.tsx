export default function TitleWithBar ({value}:  {value?:string}){
    return (
        <>
        <h2 className="lg:text-3xl text-2xl font-bold text-primary border-r-4 border-primary pr-3">{value}</h2>
        </>
    )
}