import React from 'react';

function SpeakerUi({img, details,name,user,home,twit}) {
  return (
      <div className='ui card'>
      <div className='image'>
              <img alt='' src={img} />
      </div>
      <div className='content'>
        <span className='header'>
          {name}
        </span>

        <div className='description'>{details}</div>
        <div className='ui divider'></div>
        <div className='meta'>
          <span>
            <i className='user icon'>{user}</i>
          </span>
        </div>

        <div className='ui divider'></div>
        <span>
          <i className='home icon'>{home}</i>
          
        </span>
      </div>
      <div className='extra content'>
        <span>
          <i className='bullhorn icon'>{twit}</i>
         
        </span>
      </div>
      </div>
  )
}

export default SpeakerUi