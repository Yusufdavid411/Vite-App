import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faNavicon, faUser } from '@fortawesome/free-solid-svg-icons';



const Header = () => {

    return (
        <div className="header">
            
            <div className="head">

                <div className="headerIcon">

                    <FontAwesomeIcon
                        icon={faUser}
                    />

                </div>

                <nav className='navigation'>

                    <FontAwesomeIcon
                        icon={faGear}
                    />

                </nav>

            </div>

        </div>
    );
}
 
export default Header;