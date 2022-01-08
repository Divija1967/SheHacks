import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

export default function Header() {
    return (
        <div className="header">

            <div className="header__left">
                <img src="https://media.istockphoto.com/vectors/letter-logo-formed-by-two-parallel-lines-with-noise-texture-vector-id1201523312?k=20&m=1201523312&s=612x612&w=0&h=muC5BerISf25lI9aWRDTUpWABqOADIO_OPfEX2ZkMU0=" alt=""/>

                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>
            </div>

            <div className="header__right">
            <HeaderOption Icon={HomeIcon} title='Home' />
            <HeaderOption Icon={AssignmentIcon} title='Applications' />
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
            <HeaderOption Icon={EventAvailableIcon} title='Schedule' />
            <HeaderOption avatar="https://solpt.com/wp-content/uploads/2020/09/headshot-anonymous.jpg" title='me' />
            </div>
        </div>
    )
}

//export default Header