import React from "react";

export default () => {
    return (
        <section className="py-5" id="ressurser">
            <div className="container">
                <div className="row my-5">
                    <iframe
                        id="kontaktIframe"
                        title="kontaktskjema"
                        src="https://docs.google.com/forms/d/e/1FAIpQLSdSBRexdioc8LaFEfCYg5GQcsejpBPg_LTcgDxlzJTRrp9R1w/viewform?embedded=true"
                        width="100%"
                        height="800"
                        scrolling="yes"
                        frameborder="0"
                        onload="this.height=this.contentWindow.document.body.scrollHeight;"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};
