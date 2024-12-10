import { Outlet } from 'react-router-dom';
import './App.css'
import NavBarLeft from './components/NavBarLeft';

function App() {

  return (
    <>
        <main className="split">
            <NavBarLeft />
            <div className="content">
                <div>Header</div>
                <Outlet />
                <div>footer</div>
            </div>
        </main>
    </>
  );
}

export default App
