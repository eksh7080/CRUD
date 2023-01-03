import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <>
            <Link to="/login" style={{ fontSize: '3rem' }}>
                로그인
            </Link>
            <Link to="/signup" style={{ display: 'block', fontSize: '3rem' }}>
                회원가입
            </Link>
        </>
    );
};

export default Landing;
