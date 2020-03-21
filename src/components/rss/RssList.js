import React from "react";
import "./rss.scss";

class Rss extends React.Component {
    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://widget.rss.app/v1/list.js";
        script.async = true;

        document.body.appendChild(script);
    }
    render() {
        return <rssapp-list id={this.props.src}></rssapp-list>;
    }
}

export default Rss;
