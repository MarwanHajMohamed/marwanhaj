import React from "react";

const Mailto = ({ email, subject, body }) => {
    return (
        <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
            <i className="fa-regular fa-envelope"></i>
        </a>
    );
};

export default Mailto;