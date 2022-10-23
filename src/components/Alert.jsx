import {useContext} from 'react';
import AlertContext from '../context/AlertContext';

export const Alert = () =>
{

    // Deconstruct the AlertProvider using the React Context API
    const {alert} = useContext(AlertContext);

    return (
        <>

            {/* Hold the container for the Alert component */}
            <div
            className={`grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8 mb-4`}
            style={{ visibility: alert ? 'visible' : 'hidden' }}
            >

                {/* Hold the Daisy UI alert component */}
                <div className='alert alert-error'>
                   
                   {/* Hold the container for the SVG used for the Alert component */}
                    <div>

                        {/* Hold the SVG */}
                        <svg
                            fill='none'
                            viewBox='0 0 24 24'
                            className='w-6 h-6 stroke-current mr-3'
                        >
                            <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
                            ></path>
                        </svg>
                    
                    {/* Hold the alert message  */}
                    <strong>
                        {alert?.msg}
                    </strong>
                    </div>
                </div>
            </div>
        </>
    )
}