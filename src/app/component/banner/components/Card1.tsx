import Image from "next/image";
import loss from "../../../../../public/play.png";
import trending from "../../../../../public/trending.png";
import AIAT from "../../../../../public/2.png";
import STRUMP from "../../../../../public/3.png";
import MANTRA from "../../../../../public/4.png"
import styles from "./card.module.css"
import arrow from "../../../../../public/arrow.png"
import { FaArrowRight } from "react-icons/fa6";
import ioNet from "../../../../../public/IO.Net.png"
import { IoMdArrowDropdown } from "react-icons/io";
export default function Card1 () {
    return (
        <div className={`rounded-5 ${styles.Bg}`}>
            <div className="d-flex justify-content-between pt-3">
                <div className="d-flex gap-2"> <span><Image src={trending} alt="trending" width={20} height={20}/></span> <span>Trending</span></div>
                <div style={{color:"#284fff", fontWeight:"500"}}>View More <FaArrowRight style={{color:"#284fff"}} /> </div>
            </div>
            <div className="d-flex justify-content-between pt-2">
                <div className="d-flex gap-2">
                    <div>
                        <Image src={ioNet} alt="trending" width={50} height={50}/>
                    </div> 
                    <div className="align-self-center">
                        io.net IO
                    </div>
                </div>

                <div className="text-danger align-self-center"><IoMdArrowDropdown style={{color:"#FF0000"}} /> 9.73% </div>
            </div>
            <div className="d-flex justify-content-between">
                <div className="d-flex gap-2">
                    <div>
                        <Image src={AIAT} alt="trending" width={50} height={50}/>
                    </div> 
                    <div className="align-self-center">
                        AI Analysis Token   AIAT
                    </div>
                </div>

                <div className="text-danger align-self-center"><IoMdArrowDropdown style={{color:"#FF0000"}} /> 13.93% </div>
            </div>
            <div className="d-flex justify-content-between">
                <div className="d-flex gap-2">
                    <div>
                        <Image src={STRUMP} alt="trending" width={50} height={50}/>
                    </div> 
                    <div className="align-self-center">
                        Super Trump   STRUMP
                    </div>
                </div>

                <div className="text-danger align-self-center"><IoMdArrowDropdown style={{color:"#FF0000"}} /> 8.02% </div>
            </div>
            <div className="d-flex justify-content-between">
                <div className="d-flex gap-2">
                    <div>
                        <Image src={MANTRA} alt="trending" width={50} height={50}/>
                    </div> 
                    <div className="align-self-center">
                        MANTRA
                    </div>
                </div>

                <div className="text-danger align-self-center"><IoMdArrowDropdown style={{color:"#FF0000"}} /> 9.73% </div>
            </div>

        </div>
    ) 
}