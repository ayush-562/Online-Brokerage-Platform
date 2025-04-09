export default function Stats() {
    return (
        <>
            <div className="container">
                <div className="row p-5 m-5 border-top">
                    <h2 className="text-center fw-normal">
                        People
                    </h2>
                </div>
                <div className="row p-5  m-5">
                    <div className="col-5 p-5">
                        <img class="founder-image" src="/static/images/nithin-kamath.jpg" alt="Nithin Kamath, CEO" />
                        <h5>Nithin Kamath</h5>
                        <p className="text-muted">Founder, CEO</p>
                    </div>
                    <div className="col-7 p-5 mt-5 text-muted lh-lg">
                        <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry. </p>
                        <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                        <p>Playing basketball is his zen.</p>
                        <p>Connect on Homepage / TradingQnA / Twitter</p>
                    </div>
                </div>
            </div>
        </>
    );
}