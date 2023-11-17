import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


const Contents = ({post , onDelete}) => {

    const handleDelete = () => {
        onDelete(post.id);
    }

    return (
        <div>

            <div className="TopUsers">
                                
                <div className="User">

                    <img 
                        src={post.url}
                        alt={post.name}
                    />

                    <div className='NameLocation'>
                        <div className="title">Name : {post.name}</div>
                        <div className="title">Location : {post.address}</div>
                    </div>


                </div>

                <button onClick={handleDelete}>

                    <FontAwesomeIcon
                        icon={faXmark}
                        size='1x'
                    />

                </button>

            </div>

        </div>
    );
}
 
export default Contents;