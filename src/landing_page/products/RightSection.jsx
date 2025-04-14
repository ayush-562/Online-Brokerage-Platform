export default function RightSection({ imageUrl, productName, productDescription, learnMore, }) {
    return (
        <>
            <div className="container">
                <div className="row p-5">
                    {/* left side content */}
                    <div className="col-4 p-4" style={{marginTop: "4rem" }}>
                        <h1>{productName}</h1>
                        <p className="text-muted mt-3 lh-lg">{productDescription}</p>
                        <div className="my-4">
                            <a href={learnMore} style={{ marginRight: "60px" }}>Learn more <i class="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                    </div>
                    <div className="col-1"></div>
                    {/* right side image */}
                    <div className="col-7">
                        <img src={imageUrl} style={{objectFit:"contain"}}/>
                    </div>
                </div>
            </div>
        </>
    );
}