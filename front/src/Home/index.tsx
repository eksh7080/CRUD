import Header from 'components/Header';
import Todo from 'Todo';
import { useToken } from 'hooks/useToken';

const Home = () => {
    const token = useToken();
    console.log(token, 'token');

    return (
        <>
            <Header />
            <Todo />
        </>
    );
};

export default Home;
