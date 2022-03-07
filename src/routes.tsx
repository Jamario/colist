import * as React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';

export default function AppRoutes(): JSX.Element {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='' element={<Register />} />
            </Routes>
        </Router>
    );
}
