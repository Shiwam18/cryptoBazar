import Image from "next/image";
import lang from "../../../../public/english.png"
import Btc from "../../../../public/BTC.png"

export default function NavTop () {
    return (
        <div className="w-100 d-flex gap-4">
            <div>Cryptos:<span>2.4M+</span></div>
            <div>Exchanges:<span>782</span></div>
            <div>Market Cap:<span>36.4M BTC</span><span>3.59%</span></div>
            <div>24h Vol:<span>1.23M BTC</span><span>48.93%</span></div>
            <div>Dominance:<span>BTC: 54.0% ETH: 17.4%</span></div>
            <div>ETH Gas: <span>13 Gwei</span></div>
            <div><Image src={lang} alt="change-language"/></div>
            <div><Image src={Btc} alt="Coin-change"/></div>
            <div>Dark Mode</div>
            <div className="d-flex"><button className="btn">Log in</button><button className="btn">Sign up</button></div>

        </div>
    )
}