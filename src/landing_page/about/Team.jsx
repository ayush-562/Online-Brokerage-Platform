export default function Team() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <h2 className="text-center fw-normal">
                        People
                    </h2>
                </div>
                <div className="row p-5 mx-5 text-muted" style={{lineHeight:"1.8"}}>
                    <div className="col-5 p-5 pe-0 text-center">
                        <img src="/media/images/nithinKamath.jpg" alt="Nithin Kamath, CEO" style={{ borderRadius: "100%", width: "70%" }} />
                        <h5 className="mt-3">Nithin Kamath</h5>
                        <p className="mt-4">Founder, CEO</p>
                    </div>
                    <div className="col-7 p-5 ps-0 text-muted lh-lg">
                        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry. </p>
                        <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                        <p>Playing basketball is his zen.</p>
                        <p>Connect on <a href="" style={{textDecoration:"none"}}>Homepage</a> / <a href="" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="" style={{textDecoration:"none"}}>Twitter</a></p>
                    </div>
                </div>
            </div>
        </>
    );
}