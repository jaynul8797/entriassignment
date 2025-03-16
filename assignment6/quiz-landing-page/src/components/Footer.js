import React from "react";

const Footer = ({ year }) => {
    return <footer>© {year} Quiz App. All Rights Reserved.</footer>;
};

const styles = {
    footer: {
        backgroundColor: "#333",
        color: "white",
        textAlign: "center",
        padding: "10px",
        position: "fixed",
        width: "100%",
        bottom: "0",
    },
};

export default Footer;