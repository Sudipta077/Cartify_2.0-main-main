import React from "react";
import error from '../images/error.gif';

const Error = () => {
    return (
        <>
           <div className="d-flex justify-content-center ">
           <img src={error}  />
            </div>
            <h1 className="text-center">Error 404 !</h1>
        </>
    );
}

export default Error;
