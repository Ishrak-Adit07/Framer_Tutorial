import React, { useEffect, useState } from 'react';
import {motion, useAnimationControls} from 'framer-motion'

const containerVariants = {
    close: {
        width: "5rem",
        transition: {
            type: "spring",
            damping: 15,
            duration: 0.5,
        },
    },
    open: {
        width: "16rem",
        transition: {
            type: "spring",
            damping: 15, 
            duration: 0.5
        }
    }
}

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    const containerControls = useAnimationControls();

    useEffect(()=>{
        if(isOpen){
            containerControls.start("open");
        }
        else{
            containerControls.start("close");
        }
    }, [isOpen]);

    const handleOpenCloseSideNavigation = () =>{
        setIsOpen(!isOpen);
    }

  return (
    <div>
      <motion.nav 
      className='bg-slate-400 flex flex-col z-10 gap-10 p-2 absolute top-0 left-0 h-full shadow shadow-neutral-600'
      variants={containerVariants}
      initial="close"
      animate={containerControls}
      >

        <div className='flex flex-row w-full justify-between place-items-center'>
            <div className='w-6 h-6 mr-1 bg-gradient-to-br from-orange-400 to-amber-700 rounded-full'>
                
            </div>
            <button 
            className='fa-solid fa-arrow-right side-nav-link'
            onClick={()=>handleOpenCloseSideNavigation()}></button>
        </div>
      </motion.nav>
    </div>
  );
}

export default Navigation;
