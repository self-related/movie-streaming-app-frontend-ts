import { Outlet } from 'react-router-dom';
import './App.css'
import NavBarLeft from './components/NavBarLeft';

function App() {

  return (
    <>
        <main className="main--split">
            <NavBarLeft />
            <div className="page_content">
                <div>Header</div>
                <Outlet />
                <div>footer</div>
            </div>
        </main>
    </>
  );
}

export default App
