import React from "react";
import "./rss.scss";

class Rss extends React.Component {
    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://widget.rss.app/v1/wall.js";
        script.async = true;

        document.body.appendChild(script);
    }
    render() {
        return <rssapp-wall id={this.props.src}></rssapp-wall>;
    }
}

export default Rss;
