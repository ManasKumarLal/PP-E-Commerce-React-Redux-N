import './App.css';
import Header from './Container/Header';
import ProductListing from './Container/ProductListing';
import ProductDetails from './Container/ProductDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<ProductListing />} />
                    <Route path='/product/:productId' element={<ProductDetails />} />
                    <Route>404 not found</Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
