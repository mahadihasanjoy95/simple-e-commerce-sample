import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
function ToastComponent(props) {

    return (
        <ToastContainer
            position="bottom-left"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    );
}

export default ToastComponent;