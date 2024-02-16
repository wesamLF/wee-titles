import { useState } from "react"
import { NavLink } from "react-router-dom"




const MainBtn = ({ name , to }: { name: string , to :string}) => {
    const [isHovered, setIsHovered] = useState(false)

    const hoverStyles = {
        boxShadow: isHovered? '-5px 5px 0px #000': "-2px 2px 0px #000",
        // transform: isHovered ? `scale(1.02) `: "",
        transform: isHovered ? `translate(1px ,-1px) `: ""
    }

    return (

        <NavLink id="main-btn" to={`/${to}`} className=" text-lg md:text-2xl py-1 px-8 border-2 border-solid bg-white border-black cursor-pointer font-semibold"
            style={hoverStyles}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            
        >
            {name}
        </NavLink>
    )
}

export default MainBtn