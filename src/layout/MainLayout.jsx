import { Outlet } from 'react-router-dom';
import Header from '../compment/header/Header';

const MainLayout = () => {
  return (
    <div className="">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
