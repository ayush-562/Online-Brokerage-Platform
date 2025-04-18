export default function Stats() {
    return (
        <>
            <div className="container">
                <div className="row text-center text-muted" style={{ paddingTop: "100px", paddingBottom: "75px" }}>
                    <h1 style={{ fontSize: "3rem", lineHeight: "1.25" }}>Charges</h1>
                    <p style={{fontSize:"1.25rem"}}>List of all charges and taxes</p>
                </div>
                <div className="row p-5">
                    <div className="col-4 text-center">
                        <img src="/media/images/pricingEquity.svg" style={{ marginBottom: "15px", width:"250px"}} />
                        <h2 class="" style={{ fontSize: "2rem", lineHeight: "1.6", fontWeight:"normal" }}>Free equity delivery</h2>
                        <p class="text-muted m-3" style={{ lineHeight: "1.8" }}>
                            All equity delivery investments (NSE, BSE), are absolutely free
                            — ₹ 0 brokerage.
                        </p>
                    </div>
                    <div className="col-4 text-center">
                        <img src="/media/images/pricing20.svg" style={{ marginBottom: "15px", width:"250px"}} />
                        <h2 class="" style={{ fontSize: "2rem", lineHeight: "1.6", fontWeight:"normal" }}>Intraday and F&O trades</h2>
                        <p class="text-muted m-3" style={{ lineHeight: "1.8" }}>
                            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
                        </p>
                    </div>
                    <div className="col-4 text-center">
                        <img src="/media/images/pricing0.svg" style={{ marginBottom: "15px", width:"250px"}} />
                        <h2 class="" style={{ fontSize: "2rem", lineHeight: "1.6", fontWeight:"normal" }}>Free direct MF</h2>
                        <p class="text-muted m-3" style={{ lineHeight: "1.8" }}>
                            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}