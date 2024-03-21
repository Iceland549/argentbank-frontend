// AppRouter.jsx
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';
import Error404 from './pages/Error';

function AppRouter() {
  return (
      <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/SignIn" element={<Layout><SignIn/></Layout>} />
          <Route path="/User" element={<Layout><User /></Layout>} />
          <Route path="*" element={<Layout><Error404 /></Layout>} />
      </Routes>
  );
}

export default AppRouter;