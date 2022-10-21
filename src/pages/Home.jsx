import {UserResults} from '../components/UserResults';
import {UserSearch} from '../components/UserSearch';

export const Home = () =>
{
    return (
        <>
            {/* Search Component will go here */}
            <UserSearch />
            <UserResults />
        </>
    )
}