import './SideList.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FactoryIcon from '@mui/icons-material/Factory';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SettingsIcon from '@mui/icons-material/Settings';
import Person2Icon from '@mui/icons-material/Person2';
import logo from '../../../src/assets/logo4.png'
import DropDownList from '../dropDownList/DropDownList';


const SideList = () => {
  return (
    <div className='sidebar'>
        <div className='logo'>
            <span><img id='logo' alt='logo' src={logo} /></span>
        </div>
        <hr/>
        <div className='menu'>
            <ul className='list'>
                <li className='item'>
                    <DashboardIcon id='dashboard' />
                    <span className='text'>Dashboard</span>
                </li>
                <li className='item'>
                    <TrendingUpIcon id='inflation' />
                    <span className='text'>Inflation</span>
                </li>
                <li className='item'>
                    <AccountBalanceIcon id='rate' />
                    <span className='text'>Federal Rate</span>
                </li>
                <li className='item'>
                    <FactoryIcon id='gdp' />
                    <span className='text'>GDP</span>
                </li>
                <li className='item'>
                    <SettingsIcon id='settings' />
                    <span className='text'>Settings</span>
                </li>
                <li className='item'>
                    <Person2Icon id='profile' />
                    <span className='text'>Profile</span>
                </li>
            </ul>
            <DropDownList />
        </div>        
    </div>
  )
};



export default SideList;