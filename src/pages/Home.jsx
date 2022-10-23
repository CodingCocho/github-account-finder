import {UserResults} from '../components/UserResults';
import {UserSearch} from '../components/UserSearch';

export const Home = () =>
{
    return (
        <>
            
            
            {/* Component used to search for users */}
            <UserSearch />

            {/* Component used to display results of the users */}
            <UserResults />
        </>
    )
}