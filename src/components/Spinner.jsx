export const Spinner = () =>
{
    return(
        <>

            {/* Hold the container for the Spinner component */}
            <div 
            className="w-100 mt-20"
            >

                {/* Hold the Daisy UI Spinner component */}
                <div 
                className="flex justify-center items-center"
                >
                    <div 
                    className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" 
                    role="status"
                    >
                        <span 
                        className="visually-hidden"
                        >
                            Loading...
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}