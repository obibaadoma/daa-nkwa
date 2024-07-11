
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pharmacy from './pages/Pharmacy';
import Farm from './pages/Farm';
import RealEstate from './pages/RealEstate';

const App = () => {
    return (
        <Router>
            <div style={{ padding: '1rem' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pharmacy" element={<Pharmacy />} />
                    <Route path="/farm" element={<Farm />} />
                    <Route path="/real-estate" element={<RealEstate />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
