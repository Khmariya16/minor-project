import React from 'react'
import { motion , AnimatePresence} from 'framer-motion';


const Home = () => {
  return (
    <div>
       <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="home-container">
      <h1>Welcome to Vector Verse</h1>
      <p>Create Stunning SVG Designs with Ease.<p>Want to make quick changes to an SVG file? <br />Use Vector Verse's online SVG editor tool to seamlessly edit their size, color, opacity,<br /> rotation, and much more within a matter of minutes!</p></p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
  
</motion.div>


  


    </motion.div>

    
    </div>
    
  )
}

export default Home