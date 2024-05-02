import React, { useEffect, useState } from 'react';
import {motion, useAnimationControls} from 'framer-motion'
import NavigationLink from './NavigationLink';

const containerVariants = {
    close: {
        width: "3rem",
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

const arrowVariants = {
    close: {
        rotate: 360,
    },
    open: {
        rotate: 180,
    }
}

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    const containerControls = useAnimationControls();
    const arrowControls = useAnimationControls();

    useEffect(()=>{
        if(isOpen){
            containerControls.start("open");
            arrowControls.start("open");
        }
        else{
            containerControls.start("close");
            arrowControls.start("close");
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
            <div className='w-6 h-6 mr-5 bg-gradient-to-br from-orange-400 to-amber-700 rounded-full'>
                
            </div>
            <motion.button 
            className='fa-solid fa-arrow-right side-nav-link mr-2'
            onClick={()=>handleOpenCloseSideNavigation()}
            variants={arrowVariants}
            initial="close"
            animate={arrowVariants}
            transition={{
                duration:0.5, ease: "easeInOut"
            }}
            >
            </motion.button>
        </div>

        <div className='flex gap-3'>
        <i class="fa-solid fa-user-group"></i> {isOpen && <NavigationLink name={"Users"}/>}
        </div>

      </motion.nav>
    </div>
  );
}

export default Navigation;
