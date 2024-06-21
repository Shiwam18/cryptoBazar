import Image from "next/image";
import logo from "../../../../public/Background.png";
import bookmark from "../../../../public/wishlist.png"
import styles from "./NavBar.module.css"

export default function NavBar () {
    return (
        <div className={`w-100 d-flex ${styles.bg} justify-content-between align-items-center`}>
            <div className="ps-3 py-3"><Image src={logo} height={70} alt="logo" /></div>

            <div className="d-flex gap-4">

                <div>Home</div>
                <div>Cryptocurrencies +</div>
                <div>Exchanges +</div>
                <div>NFT +</div>
                <div>Products +</div>
                <div>API</div>
                <div>PortFolio</div>
                <div>Learn +</div>
            </div>

            <div className="d-flex gap-3 align-items-center me-4">
                <div className="d-flex gap-2"><span><Image src={bookmark} alt="bookmark" /></span><span>Watchlist</span></div>
                <div className={styles.searchbox}><input type="text" width={250} placeholder="Search" className="border-0" /> <button className={`${styles.srearchbtn} me-1`}>/</button></div>
            </div>
        </div>
    )
}