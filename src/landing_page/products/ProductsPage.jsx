import Hero from "./Hero.jsx";
import LeftSection from "./LeftSection.jsx";
import RightSection from "./RightSection.jsx";
import Universe from "./Universe.jsx";

export default function Products() {
    return (
        <>
            <div className="container">
                <Hero />
                <LeftSection
                    imageUrl="/media/images/kite.png"
                    productName="Kite"
                    productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                    tryDemo="https://kite-demo.zerodha.com/"
                    learnMore="https://zerodha.com/products/kite"
                    googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
                    appStore="https://apps.apple.com/in/app/kite-zerodha/id1449453802"
                />
                <RightSection
                    imageUrl="/media/images/console.png"
                    productName="Console"
                    productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                    learnMore="https://zerodha.com/products/console"
                />
                <LeftSection
                    imageUrl="/media/images/coin.png"
                    productName="Coin"
                    productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                    tryDemo=""
                    learnMore="https://coin.zerodha.com/"
                    googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.coin"
                    appStore="https://apps.apple.com/in/app/coin-by-zerodha/id1392892554"
                />
                <RightSection
                    imageUrl="/media/images/kiteconnect.png"
                    productName="Kite Connect API"
                    productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                    learnMore="https://zerodha.com/products/api/"
                />
                <LeftSection
                    imageUrl="/media/images/varsity.png"
                    productName="Varsity mobile"
                    productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                    tryDemo=""
                    learnMore=""
                    googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
                    appStore="https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753"
                />
                <div className="row mt-5">
                    <p class="landing-subheading text-center text-muted" style={{fontSize:"1.5rem"}}>
                        Want to know more about our technology stack? Check out the
                        <a href="https://zerodha.tech/" style={{textDecoration:"none"}}> Zerodha.tech</a> blog.
                    </p>
                </div>
                <Universe />
            </div>
        </>
    );
}