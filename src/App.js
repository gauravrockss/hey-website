import CssBaseline from '@mui/material/CssBaseline';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';

function App() {
    return (
        <div className='App'>
            <CssBaseline />
            <Header>
                <Routes>
                    <Route path='/' element={<Main />} />
                </Routes>
            </Header>
        </div>
    );
}

export default App;
