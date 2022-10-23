import {useContext} from 'react';
import {Spinner} from '../components/Spinner';
import {UserItem} from '../components/UserItem';
import GithubContext from '../context/GithubContext';

export const UserResults = () =>
{

    // Deconstruct the GithubProvider using the React Context API
    const {users, loading} = useContext(GithubContext);

    // Render the UserItem components after the UserResults component has unmounted and fetched the users
    if(!loading)
    {
        return (
            <>

                {/* Hold the grid container for the UserItem components */}
                <div 
                className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2"
                >
                    
                    {/* Map the users data and render a UserItem component */}
                    {users.map((user) =>
                    (
                        
                        // Render the UserItem component
                        <UserItem 
                        key={user.id}
                        user={user}
                        />
                    ))}
                </div>
            </>
        )
    }

    // Render the Spinner Component when the UseResults component mounts and has no users 
    else
    {
        return <Spinner />
    }

}