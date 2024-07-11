import NavBar from '../components/NavBar';

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="p-4">
                <h1 className="text-2xl font-bold">Home</h1>
                <p>Welcome to our conglomerate's web application.</p>
            </div>
        </div>
    );
};

export default Home;
