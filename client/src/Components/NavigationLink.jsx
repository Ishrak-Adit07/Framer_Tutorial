import React from 'react';

const NavigationLink = ({name}) => {
  return (
    <div>
      <a href="#" className='flex p-1 rounded cursor-pointer stroke-[0.75] hover:stroke-neutral-100 stroke-neutral-400 text-neutral-400 hover:text-neutral-100 place-items-center gap-3 hover:bg-neutral-700/30 transition-colors duration-100 z-20'>
        <p className='text-inherit overflow-clip whitespace-nowrap tracking-wide'>
            {name}
        </p>
      </a>
    </div>
  );
}

export default NavigationLink;
