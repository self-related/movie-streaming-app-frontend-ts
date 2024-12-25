import { Outlet } from 'react-router-dom';
import './App.css'
import NavBarLeft from './components/NavBarLeft';
import NavBarTop from './components/NavBarTop';

function App() {

  return (
    <>
        <main className="main--split">
            <NavBarLeft />
            <div className="page_content">
                <NavBarTop />
                <Outlet />
            </div>
        </main>
    </>
  );
}

export default App
