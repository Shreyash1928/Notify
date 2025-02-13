import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ButtonStyles.css';

function Showname() {

  const notifyWarning = () => toast.warning('Something is incorrect');
  const notifySuccess = () => toast.success('Successful registeration');
  const notifyInfo = () => toast.info('this toast shows additional info if any');
  const notifyError = () => toast.error('Some error accured');
  const notifyCustom = () => toast('Hello its custom notify');

  return (
    <div className="app-container">
      <div className="button-container">
        <button className="toast-button warning" onClick={notifyWarning}>Warning</button>
        <button className="toast-button success" onClick={notifySuccess}>Success</button>
        <button className="toast-button info" onClick={notifyInfo}>Info</button>
        <button className="toast-button error" onClick={notifyError}>Error</button>
        <button className="toast-button custom" onClick={notifyCustom}>Custom</button>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
}

export default Showname;
