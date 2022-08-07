import React from 'react';
import {ToastContainer} from "react-toastify";

function CustomToastContainer(props) {
    return (
        <ToastContainer
            position="bottom-left"
            autoClose={2000}
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

export default CustomToastContainer;