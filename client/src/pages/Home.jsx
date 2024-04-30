import React from 'react';
import { easeOut, motion } from "framer-motion"

const gridContainerVariants = {
    hidden: {opacity: 0}, 
    show: {
        opacity: 1, 
        transition: {
            staggerChildren: 0.25,
        },
    }
}

const gridSquareVariants = {
    hidden: {opacity:0},
    show: {opacity: 1}
}

const Home = () => {
  return (
    <div className='flex flex-col gap-10 overflow-x-hidden'>
      <motion.section 
        variants={gridContainerVariants} 
        initial="hidden"
        animate="show"
        className='grid grid-cols-3 p-10 gap-10'>
        
        {/*First Square*/}
        <motion.div 
        variants={gridSquareVariants}
        className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'>

            <motion.div 
            className='w-20 h-20 bg-stone-100 rounded-lg'
            initial={{opacity:0, y:100}}
            animate={{opacity:1, y:0}}
            transition={{duration:1, ease:"easeOut", delay:0.2}}
            ></motion.div>

            <motion.div 
            className='w-20 h-20 bg-stone-100 rounded-full'
            initial={{opacity:0, y:-100}}
            animate={{opacity:1, y:0}}
            transition={{duration:1, ease:"easeOut", delay:0.4}}
            ></motion.div>

        </motion.div>
        
        {/*Second Square*/}
        <motion.div 
        variants={gridSquareVariants}
        className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'>

            <motion.div 
            className='w-1/3 h-1/3 shadow-md bg-rose-400'
            animate={{
                scale: [1, 2, 2, 1],
                rotate: [0, 90, 90, 0],
                borderRadius: ["10%", "10%", "50%", "10%"]
            }}
            transition={{duration:5, ease:"easeInOut", repeat:Infinity, repeatDelay:1}}
            ></motion.div>     

        </motion.div>

        {/*Third Square*/}
        <motion.div 
        variants={gridSquareVariants}
        className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></motion.div>

        <motion.div 
        variants={gridSquareVariants}
        className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></motion.div>

        <motion.div 
        variants={gridSquareVariants}
        className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></motion.div>

        <motion.div 
        variants={gridSquareVariants}
        className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></motion.div>

      </motion.section>
    </div>
  );
}

export default Home;
