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
            transition={{duration:5, ease:"easeInOut", repeat:3, repeatDelay:1}}
            ></motion.div>     

        </motion.div>

        {/*Third Square*/}
        <motion.div 
        variants={gridSquareVariants}
        className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'>

            <motion.button 
            whileTap={{scale:0.9}}
            whileHover={{scale:1.1, backgroundColor:'whitesmoke', color:'black'}}
            transition={{bounceDamping:10, bounceStiffness:600}}
            className='bg-emerald-600 w-1/2 py-4 rounded-lg text-2xl text-gray-100 font-light tracking-wide'>
            subscribe</motion.button>

        </motion.div>
        
        {/*Fourth Square*/}
        <motion.div 
        variants={gridSquareVariants}
        className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'>

            <motion.div className='w-1/3 h-1/3 bg-orange-500 rounded-3xl cursor-grab' 
            drag
            dragConstraints={{
                top: -125, 
                right: 125, 
                left: 125,
                bottom: -125
            }}
            dragTransition={{
                bounceStiffness: 600, bounceDamping:10
            }}>
            </motion.div>

        </motion.div>

        {/*Fifth Square*/}
        <motion.div 
        variants={gridSquareVariants}
        className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'>

            <motion.div className='w-40 aspect-square bg-gray-50/20 rounded-xl'>

            </motion.div>

        </motion.div>

        {/*Sixth Square*/}
        <motion.div 
        variants={gridSquareVariants}
        className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></motion.div>

      </motion.section>
    </div>
  );
}

export default Home;
