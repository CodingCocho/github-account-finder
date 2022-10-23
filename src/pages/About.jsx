export const About = () =>
{
    return (
        <> 

            {/* Hold the name of the web app */}
            <h1 
            className='text-6xl mb-4'
            >
                Github Finder
            </h1>
            
            {/* Hold the about text with links to resources used */}
            <p 
            className='mb-4 text-2xl font-light'
            >
                A React app to search GitHub profiles and see profile details. This
                project is part of the
                
                {/* Hold course link */}
                <a 
                href='https://www.udemy.com/course/modern-react-front-to-back/
                '>
                    {' '}
                    React Front To Back
                </a>
                    {' '}
                    Udemy course by
                <strong>
                    
                    {/* Hold course instructor's name and site */}
                    <a 
                    href='https://traversymedia.com'
                    >
                         Brad Traversy
                    </a>
                </strong>
                .
            </p>

            {/*  Hold the version of the application*/}
            <p 
            className='text-lg text-gray-400'
            >
                Version 
                
                {/* Hold version number */}
                <span 
                className='text-white'
                >
                    1.0.0
                </span>
            </p>
            
            {/* Hold the name the UI/UX designer */}
            <p 
            className='text-lg text-gray-400'
            >
                Layout By:
                
                {/* Hold the designers name and Twitter */}
                <a 
                className='text-white ml-2' 
                href='https://twitter.com/hassibmoddasser'
                >
                    Hassib Moddasser
                </a>
            </p>
        </>
    )
}