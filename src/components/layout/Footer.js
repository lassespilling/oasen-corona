import React from "react";
import logo from "../../assets/logo.svg";
import "./footer.scss";

const Footer = () => {
    return (
        <div className="container-fluid text-white" id="footer">
            <div className="row d-flex align-items-center p-3">
                <div className="col-sm-6 d-flex">
                    <h2>Corona</h2>
                </div>
                <div className="col-sm-4 text-right">
                    <p className="h6 btn btn-outline-light">
                        post@oasen.org
                    </p>
                </div>
                <div className="col-sm-2 text-right">
                    <img
                        src={logo}
                        alt=""
                        className="w-100 p-3"
                        style={{ maxWidth: "5rem" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;
