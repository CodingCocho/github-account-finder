import {useContext, useState} from 'react'
import AlertContext from '../context/AlertContext';
import GithubContext from '../context/GithubContext';

export const UserSearch = () =>
{

    // Set the useState for the search text
    const [text, setText] = useState('');
    
    // Deconstruct the Github Provider using the React Context API
    const {users, searchUsers, clearUsers} = useContext(GithubContext)

    // 
    const {setAlert} = useContext(AlertContext);

    //  Component functions

    /*
    Update the text useState 
    @param e the event used to call the function
    @return none
    */
    const handleChange = (e) =>
    {
        setText(e.target.value);
    }

    /*
    Use the form's text to use the searchUsers function from our GithubProvider 
    to retrieve user objects
    @ e the vent used to call the function 
    @return none
    */
    const handleSubmit = (e) =>
    {
        
        // Prevent page refresh 
        e.preventDefault()
        
        // Check if text is empty
        if(text === '')
        {
            setAlert('Pleaser enter something', 'error')
        }
        
        // Else call searchUsers and reset the text useState
        else
        {
            searchUsers(text);
            setText('');
        }
    }

    return (
        <>

            {/* Hold a grid container for the UserSearch component */}
            <div 
            className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8"
            >

                {/* Hold a div for the form */}
                <div>

                    {/* Hold the form that will keep track of the searchUsers parameter */}
                    <form 
                    onSubmit={handleSubmit}
                    >
                        {/* Hold Daisy UI form component */}
                        <div className="form-control">
                            
                            {/* Hold the container to be relative */}
                            <div className="relative">
                                
                                {/* Hold the input field that is connected to the text useState and holds
                                the searchUsers parameter */}
                                <input 
                                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                                onChange={handleChange}
                                placeholder="Search" 
                                type="text" 
                                value={text}
                                />

                                {/* Hold the button that will submit the form */}
                                <button 
                                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                                type="submit"
                                >
                                    Go
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                
                {/* Render the button to clear the users only if there is users in the GithubProvider state */}
                {users.length > 0 && 
                    <div>

                        {/* Hold the button that will call the clearUsers function from GithubProvider */}
                        <button 
                        className="btn btn-ghost btn-lg"
                        onClick={clearUsers}
                        >
                            Clear
                        </button>
                    </div>
                }
            </div>
        </>
    )
}