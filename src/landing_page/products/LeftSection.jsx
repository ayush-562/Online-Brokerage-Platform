export default function LeftSection({ imageUrl, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <>
            <div className="container">
                <div className="row p-5">
                    {/* left side image */}
                    <div className="col-8 p-5">
                        <img src={imageUrl} />
                    </div>
                    {/* right side content */}
                    <div className="col-4 p-4" style={{marginTop: "4rem" }}>
                        <h1>{productName}</h1>
                        <p className="text-muted mt-3 lh-lg">{productDescription}</p>
                        <div className="my-4">
                            {tryDemo && <a href={tryDemo} style={{ marginRight: "60px" }}>Try Demo <i class="fa-solid fa-arrow-right-long"></i></a>}
                            {learnMore && <a href={learnMore}>Learn more <i class="fa-solid fa-arrow-right-long"></i></a>}
                        </div>
                        <div className="mt-4">
                            {googlePlay && <a href={googlePlay}><img src="/media/images/googlePlayBadge.svg" alt="Google Play" /></a>}
                            {appStore && <a href={appStore} style={{ marginLeft: "20px" }}><img src="/media/images/appstoreBadge.svg" alt="App Store" /></a>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}