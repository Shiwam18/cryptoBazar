import styles from "./card.module.css"
import { IoMdArrowDropdown } from "react-icons/io";
export default function Card2 () {
    return (
        <div className="px-3 rounded-5">

            <div> 
                <div>
                    ₹ 2,572,576,604,106
                </div> 
                <div>Market Cap <IoMdArrowDropdown style={{color:"#FF0000"}} /> <span style={{color: "#FF0000"}}> 3.7%</span> </div>
            </div>
        
        </div>
    ) 
}