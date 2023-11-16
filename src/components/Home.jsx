import React from 'react';
import useFetch from "./useFetch";
import Contents from './Contents';
import { useParams } from 'react-router-dom';

const Home = () => {

    const { id } = useParams()
    const { data:posts, isPending, error } = useFetch("https://65539c205449cfda0f2ef498.mockapi.io/products?_limit=10");

    const onDelete = () => {
        fetch("https://65539c205449cfda0f2ef498.mockapi.io/products/" + posts.id, {
            method: 'DELETE',
        });
    }

    return (
        <div className="home">

            <div className="post">

                { error && <div>{ error }</div> }
                { isPending && <div>Loading....</div> }
                { posts && <Contents  posts={posts} onDelete={onDelete} /> }
                
            </div>

        </div>
    );
};
 
export default Home;