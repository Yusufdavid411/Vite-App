import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';


const Template = () => {
    return (
        <div>
            <div className="Temp">

                <div></div>

                <div className="cont-icon">

                    <div className="Icons">

                        <div className="icon">

                            <FontAwesomeIcon
                                icon={faUser}
                            />

                        </div>

                        <div className="icon">

                            <FontAwesomeIcon
                                icon={faUser}
                            />

                        </div>

                        <div className="icon">

                            <FontAwesomeIcon
                                icon={faTrash}
                            />

                        </div>

                        <div className="icon">

                            <FontAwesomeIcon
                                icon={faGear}
                            />

                        </div>

                    </div>

                </div>
            
            </div>
        </div>
    );
}
 
export default Template;