import React from 'react'
import { useEffect, useState } from "react";
import Contents from './contents';

const Home = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/photos?_limit=5")
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => {
          console.log(err);
        });
    };
  
    console.log(users);
    return (
        <div className="home">

            {users.map((user) => (
                <Contents
                    key={user.id}   
                    id={user.id}
                    url={user.url}
                    title={user.title}
                    thumbnail={user.thumbnailUrl}
                />
            ))}

        </div>
    );
};
 
export default Home;