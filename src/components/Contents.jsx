import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faDeleteLeft, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';


const Contents = ({ posts, onDelete}) => {


    
    return (
        <div>

            { posts.map((post) => (

                <div className="contents" key={post.id}>
                                
                    <div className="main-content">

                        <img 
                            src={post.url}
                            alt={post.name}
                        />

                        <div>
                            <div className="title">Name : {post.name}</div>
                            <div className="title">Location : {post.address}</div>
                        </div>

                    </div>

                    <button onClick={onDelete}>

                        <FontAwesomeIcon
                            icon={faXmark}
                            size='1x'
                        />

                    </button>

                </div>
                
            ))}

        </div>
    );
}
 
export default Contents;