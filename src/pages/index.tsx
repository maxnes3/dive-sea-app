import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@app/layout/layout';
import HomePage from '@pages/home/home.page';

const Index = () => {
  const routes = [{ path: '/', element: <HomePage /> }];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<Layout children={route.element} />}
          ></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
