import React from 'react';

import ScrollToTop  from 'react-scroll-up';

const ScrollUpButton = () => {
  return(
      <ScrollToTop showUnder={140}>
       <span className='scroll-up'></span>
      </ScrollToTop>
  )
}
export default ScrollUpButton;
