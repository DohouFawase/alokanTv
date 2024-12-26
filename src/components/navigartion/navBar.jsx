
import { motion } from 'motion/react'
import { NavLink } from 'react-router'
const Nav = [
  {
      title:'Apropos',
      // link:"",
      delay:0.1
  },
  {
      title:'Stream',
      link:"/stream",
      delay:0.2

  },
  {
      title:'Review',
      link:"/review",
    
      delay:0.3
  },

]
export default function NavBar() {
  function SlideIn(delay) {
      return {
        initial : {
          y:"-100%",
          opacity:0
        },

        animate : {
          y:0,
          opacity:1,
          transition: {
              duration:0.6,
              delay:delay
          }
        }
      }
  }
  return (
    <div className='text-white bg-black p-4 fixed w-full top-0  shadow 2xl'>
      <div className="flex justify-between py-3  px-4 w-full items-center ">
        <motion.div 
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{duration:0.8, delay:0.5}}
        className="">
               <NavLink className={"fonr-bold text-xl"}><h1>ALOKAN TV .</h1></NavLink>
        </motion.div>

    

        <div className="">
          <ul className='flex gap-1.5'>
          {
    Nav.map((nav) => {
        return (
            <motion.li
            variants={SlideIn(nav.delay)}
            initial="initial"
            animate="animate"

             key={nav.title}>
                <NavLink 
                    to={nav.link} 
                    className={({ isActive }) => 
                        ` ${isActive ? 'text-[#fff]' : 'hover:text-[#f8549b]'}`
                    }
                >
                    {nav.title}
                </NavLink>
            </motion.li>
        );
    })
}
          </ul>
           
        </div>
      </div>
    </div>
  )
}
