import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
    const {friendId} = useParams();
    const [friend,setFriend]=useState([]);
  useEffect(()=>{
      const url=`https://jsonplaceholder.typicode.com/users/${friendId}`;
     fetch(url)
     .then(res =>res.json())
     .then(data=>setFriend(data))
  },[])
    return (
        <div>
            <h2>This is Friend Detail{friendId}</h2>
            <p>name{friend.name}</p>
            <p>{friend.email}</p>
            <p>{friend.phone}</p>
            <p>{friend.website}</p>
        </div>
    );
};

export default FriendDetails;