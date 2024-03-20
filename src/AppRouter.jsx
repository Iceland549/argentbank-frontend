// AppRouter.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';
import Error404 from './pages/Error404';

function AppRouter() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/SignIn" element={<Layout><SignIn/></Layout>} />
            <Route path="/User" element={<Layout><User /></Layout>} />
            <Route path="*" element={<Layout><Error404 /></Layout>} />
        </Routes>
    </Router>
  );
}

export default AppRouter;