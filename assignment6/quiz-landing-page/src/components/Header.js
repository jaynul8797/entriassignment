import React from "react";

const Header = ({ title }) => {
    const handleClick = () => {
        console.log("Header clicked!");
    };

    return <header onClick={handleClick}>{title}</header>;
};

export default Header;