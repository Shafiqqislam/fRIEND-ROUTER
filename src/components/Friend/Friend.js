import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css';

const Friend = (props) => {
    const {name,email,id}=props.friend;
    const history =useHistory([]);
    const handleClick=(friendId)=>{
        history.push(`/friend/${friendId}`)
    }
    return (
        <div className="friend-container">
            <h1>Name :{name}</h1>
            <h4>Email :{email}</h4>
            {/* <p>Id : <Link to={`/friend/${id}`}>Show details {id}</Link> </p> */}
            <button onClick={()=>handleClick(id)}>Click Me</button>

        </div>
    );
};

export default Friend;