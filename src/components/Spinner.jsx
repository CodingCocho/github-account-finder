export const Spinner = () =>
{
    return(
        <>
            <div 
            className="w-100 mt-20"
            >
                <div className="flex justify-center items-center">
                    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    </div>
            </div>
        </>
    )
}