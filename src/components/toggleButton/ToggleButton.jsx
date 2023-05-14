import './ToggleButton.scss';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';

const ToggleButton = () => {
  return (
    <div className='toggle-btn'>
      <WbSunnyIcon className='toggle-sunny-icon' />
      <input type='checkbox' />
      <span />
      <NightlightRoundIcon className='toggle-moon-icon' />
    </div>
  )
};

export default ToggleButton;