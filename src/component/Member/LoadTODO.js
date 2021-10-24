import React, { useEffect, useState } from 'react';
import Member from './Member';
import './Member.css'

const LoadTODO = () => {
    const [todo, setTodo] = useState([])
   
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(data => {
                setTodo(data)
            })

    }, [])
    return (
        <div className="member">
            {todo.map(todo => <Member todo={todo}></Member>)}

        </div>
    );
};

export default LoadTODO;