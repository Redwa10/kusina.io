

function Error({children}) {

    return (
        <>
        {<div className="relative z-1000 text-[#ffffff]  bg-[#ff2a2a] rounded-md p-5 m-3">
           {children} 
        </div>}
        </>
        
    )
}

export default Error
