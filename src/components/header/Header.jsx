import { useState } from 'react';
import './Header.scss';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import ToggleButton from '../toggleButton/ToggleButton';
import HiddenModal from '../hiddenModal/HiddenModal';


const Header = () => {
  // log in state
  const [icon, setIcon] = useState(false);
  const isLogin = () => {
    if (icon === false) {
        setIcon(!icon);
    } else {
        setIcon(!icon);
    }
  }

  // alarm badges
  const [badgeAlarm, setBadgeAlarm] = useState({alarm : 5});
  const [badgeMessage, setBadgeMessage] = useState({message : 10});

  // modal window states
  const [isModalClicked, setIsModalClicked] = useState(
    {
        account: false,
        alarm: false,
        message: false
    }
  );
        
  return (
    <div>
        <div className="header-background">
            <div className='searchbar'>
                <div id='searchbar-border'>
                    <input placeholder='search...' />
                    <button>
                        <SearchIcon />
                    </button>
                </div>                
            </div>
            <div className='top-menu'>
                <div className='hidden-account'>
                    {isModalClicked.account && <HiddenModal />}
                </div>
                <div className='hidden-alarm'>
                    {isModalClicked.alarm && <HiddenModal />}
                </div>
                <div className='hidden-message'>
                    {isModalClicked.message && <HiddenModal />}
                </div>
                <div className='toggle-btn-component'>
                    <ToggleButton />
                </div>
                <ul>
                    <li>
                        <button onClick={() => setIsModalClicked({
                            account: !isModalClicked.account,
                            alarm: false,
                            message: false
                        })}>
                            <AccountCircleIcon className='header-icon' />
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setIsModalClicked({
                            account: false,
                            alarm: !isModalClicked.alarm,
                            message: false
                        })}>
                            <NotificationsIcon className='header-icon' />
                            {(badgeAlarm.alarm >= 1) ? <div>{badgeAlarm.alarm}</div> : null}
                        </button>
                    </li>
                    <li>
                        <button onClick={() => setIsModalClicked({
                            account: false,
                            alarm: false,
                            message: !isModalClicked.message
                        })}>
                            <ChatIcon className='header-icon' />
                            {(badgeMessage.message >= 1) ? <div>{badgeMessage.message}</div> : null }
                        </button>
                    </li>
                    <li>
                        <button onClick={isLogin}>
                            {icon ? <LoginIcon className='header-icon' /> : <LogoutIcon className='header-icon' />}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
        <hr id='header-hr'/>
    </div>
  )
}

export default Header;