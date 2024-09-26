import { LayoutRouteProps } from 'react-router-dom';

const Layout: React.FC<LayoutRouteProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default Layout;
