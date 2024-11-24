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




    const [visibleRows, setVisibleRows] = useState(0); // Tracks how many rows are visible
    const rowDisplayDelay = 90; // Delay (in milliseconds) between displaying rows. You can change this value.

    useEffect(() => {
        // Incrementally display rows with a delay
        if (visibleRows < posts.length) {
            const timer = setTimeout(() => {
                setVisibleRows((prev) => prev + 1);
            }, rowDisplayDelay);

            // Clear the timer when the component unmounts or updates
            return () => clearTimeout(timer);
        }
    }, [visibleRows, posts.length]); // Dependency ensures effect runs when visibleRows changes


    return (
        <div className="home">

            <Template />

            <h3>Top Users</h3>


            { posts.slice(0, visibleRows).map((post, index) => (

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