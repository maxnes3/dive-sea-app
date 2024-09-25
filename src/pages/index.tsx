import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../app/layout/layout';
import HomePage from './home/home.page';

const Index = () => {
  const routes = [{ path: '/', element: <HomePage /> }];

  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<Layout children={route.element} />}
          ></Route>
        ))}
      </Routes>
    </Router>
  );
};

export default Index;
