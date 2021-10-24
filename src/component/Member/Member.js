import React from 'react';
import './Member.css'

const Member = (props) => {
    const { title, id, completed } = props.todo
    return (
        <div className="member__container">
            <h4>{id}</h4>
            <h2>{title}</h2>

            <h6>{completed ? <span className="member__verify">Varified</span> : <span className="member__NOTverify">Not Varified</span>}</h6>
        </div>
    );
};

export default Member;