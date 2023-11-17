import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNavicon, faUser } from '@fortawesome/free-solid-svg-icons';



const Header = () => {

    return (
        <div className="header">
            
            <div className="head">

                <div className="headerIcon">

                    <FontAwesomeIcon
                        icon={faUser}
                        size=''
                    />

                </div>

                <nav className='navigation'>

                    <FontAwesomeIcon
                        icon={faNavicon}
                        size=''
                    />

                </nav>

            </div>

        </div>
    );
}
 
export default Header;