import React, { useState } from 'react'
import './DropDownList.scss'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CreateIcon from '@mui/icons-material/Create';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';


const DropDownList = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className='drop-down-list'>
      <hr className='drop-down-line'/>
      <span>
        <label>More</label>
        <input type='checkbox' onClick={() => setIsChecked(!isChecked)}/>
        {isChecked? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon /> }
      </span>
      <ul className={`drop-down ${isChecked? 'open': ''}`}>
        <li><CalendarMonthIcon className='drop-down-subicon' />Schedule</li>
        <li><CreateIcon className='drop-down-subicon' />Board</li>
        <li><MailOutlineIcon className='drop-down-subicon' />Message</li>
        <li><QuestionMarkIcon className='drop-down-subicon' />Help</li>
      </ul>
    </div>
  )
}

export default DropDownList;