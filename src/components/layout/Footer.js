import React from "react";
import logo from "../../assets/logo.svg";
import "./footer.scss";

const Footer = () => {
    return (
        <div className="container-fluid w-100 text-white" id="footer">
            <div className="container">
                <div className="row d-flex align-items-center p-3">
                    <div className="col-12 col-sm-4 d-flex">
                        <h2>Corona</h2>
                    </div>
                    <div className="col-6 col-sm-5 text-right">
                        <p className="h6 btn btn-outline-light">
                            post@oasen.org
                        </p>
                    </div>
                    <div className="col-6 col-sm-3 text-right">
                        <img
                            src={logo}
                            alt=""
                            className="w-100 p-3 ml-auto"
                            style={{ maxWidth: "5rem" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
