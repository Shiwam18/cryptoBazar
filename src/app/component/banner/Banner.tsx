import Image from 'next/image'
import styles from './Banner.module.css'
import bg from "../../../../public/1.png";
import loss from "../../../../public/play.png"
import trending from "../../../../public/trending.png"
import Card1 from './components/Card1';
import Card2 from './components/Card2';
import Card3 from './components/Card3';
export default function Banner () {
    return (
        <div style={{position:"relative"}}>
            <Image src={bg} alt='background' className={styles.bgImg}/>

            <div className={``}>
                <div className={`${styles.head}`}>Stay Updated with Live Crypto Prices</div>
                <span className={`${styles.subhead}`}>The global cryptocurrency market cap today is $2.57 Trillion, a <span className='text-danger'> <Image src={loss} alt='down' /> 3.59 </span> change in the last 24 hours.   <a href="#">Read More</a></span>
                <div className={`${styles.cards} container`}>
                    <div className={`${styles.card1} row align-self-center`}>
                        <div className='col-md-4'> <Card1 /> </div>
                        <div className='col-md-4'> <Card1 /> </div>
                        <div className='col-md-4'> <Card1 /> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}