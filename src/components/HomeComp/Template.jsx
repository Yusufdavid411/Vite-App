import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBell, faCalendar, faEnvelope, faAngleRight, } from '@fortawesome/free-solid-svg-icons';
import useFetch from '../useFetch';
import { faEyeSlash, faEye, } from '@fortawesome/free-regular-svg-icons';


const Template = () => {

    const { data:money, isPending, error } = useFetch("https://65539c205449cfda0f2ef498.mockapi.io/Money/1");

    return (
        <div>
            <div className="Temp">

                <div className='info'>

                    <div className='bal'>

                        <p>Available Balance</p>  
                        <FontAwesomeIcon
                            icon={faEyeSlash}
                            className='eye'
                        />

                    </div>
                    <div className='bal'>

                        <p>Transaction History</p>  
                        <FontAwesomeIcon
                            icon={faAngleRight}
                            className='eye'
                        />

                    </div>

                </div>

                <div className='money'>

                    { error && <div>{ error }</div> }
                    { isPending && <div >Loading....</div> }
                    { money && <div> $ { money.balance }.54</div> }

                </div>

                <div className="cont-icons">

                    <div className="icons">

                        <div className='icon-Note'>

                            <div className="icon">
                                <FontAwesomeIcon
                                    icon={faCartShopping}
                                />
                            </div>
                            <div className='iconNote'>Cart</div>

                        </div>

                        <div className='icon-Note'>

                            <div className="icon">
                                <FontAwesomeIcon
                                    icon={faCalendar}
                                />
                            </div>
                            <div className='iconNote'>Calender</div>

                        </div>

                        <div className='icon-Note'>

                            <div className="icon">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                />
                            </div>
                            <div className='iconNote'>Notification</div>

                        </div>

                        <div className='icon-Note'>

                            <div className="icon">
                                <FontAwesomeIcon
                                    icon={faBell}
                                />
                            </div>
                            <div className='iconNote'>Alerm</div>

                        </div>

                    </div>

                </div>
            
            </div>
        </div>
    );
}
 
export default Template;