import React from "react";


const Contents = ({ url, title, thumbnail}) => {
    return (
        <div>

            <div className="contents">
                
                <a href={thumbnail} target="_blank">

                    <img 
                        src={url}
                        alt={title}
                    />

                </a>

                <div className="title">{title}</div>


            </div>


        </div>
    );
}
 
export default Contents;