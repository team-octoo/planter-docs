import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Outlet />
      <ToastContainer
        position="bottom-right"
        hideProgressBar
      />
    </>
  );
}

export default App;
