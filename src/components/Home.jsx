import React, { useEffect, useState } from "react";
import TopUsers from "./HomeComp/TopUsers";
import Template from "./HomeComp/Template";


const Home = () => {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        await fetch("https://65539c205449cfda0f2ef498.mockapi.io/Users")
        .then((res) => res.json())
        .then((data) => setPosts(data))
        .catch((err) => {
            console.log(err);
        });
    };


    const onDelete = async (id) => {

        await fetch(`https://65539c205449cfda0f2ef498.mockapi.io/Users/${id}`, {
            method: "DELETE",
        })
        .then((res) => {
            if (res.status !== 200) {
                return;
            }   else {
                setPosts(
                    posts.filter((post) => {
                        return post.id !== id;
                    })
                );
            }
        })
        .catch((err) => {
            console.log(err);
        });
    };


    console.log(posts);

    return (
        <div className="home">

            <Template />


            { posts.map((post) => (

                <TopUsers
                    key={post.id}
                    post={post} 
                    onDelete={onDelete}
                />

            ))}
            
        </div>
    );
};
 
export default Home;