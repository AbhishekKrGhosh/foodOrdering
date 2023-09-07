import React, { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className='flight button-59' onClick={() => setIsOpen(!isOpen)}>{`Amritsar -> Bangalore`}</button>
      {isOpen && (
        <div className='selectPassenger'>
            <div className='passenger'><p>Adult passenger 1</p>
            <button className='button-6'>select meal</button>
            </div>
            <div className='passenger'><p>Adult passenger 2</p>
            <button className='button-6'>select meal</button>
            </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;