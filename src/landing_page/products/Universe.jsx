import './Universe.css';
export default function Universe() {
    return (
        <>
            <div className="universe container text-center p-5">
                <h2 class="text-center">The Zerodha Universe</h2>
                <p class="text-center text-muted">
                    Extend your trading and investment experience even further with our
                    partner platforms
                </p>

                <div className="row">
                    {/* 1st Row */}
                    <div className="col-4 p-3">
                        <a href="https://www.zerodhafundhouse.com/">
                            <img src="/media/images/zerodhaFundhouse.png" />
                            <br />
                            <span>
                                Our asset management venture
                                <br />
                                that is creating simple and transparent index
                                <br />
                                funds to help you save for your goals.
                            </span>
                        </a>
                        <br />
                        <br class="hide-on-mobile" />
                        <a href="https://streak.tech">
                            <img src="/media/images/streakLogo.png" />
                            <br />
                            <span>
                                Systematic trading platform
                                <br />
                                that allows you to create and backtest
                                <br />
                                strategies without coding.
                            </span>
                        </a>
                    </div>
                    {/* 2nd Row */}
                    <div className="col-4 p-3">
                        <a href="https://sensibull.com/">
                            <img src="/media/images/sensibullLogo.svg" />
                            <br />
                            <span class="">
                                Our asset management venture
                                <br />
                                that is creating simple and transparent index
                                <br />
                                funds to help you save for your goals.
                            </span>
                        </a>
                        <br />
                        <br class="hide-on-mobile" />
                        <a href="https://smallcase.zerodha.com/">
                            <img src="/media/images/smallcaseLogo.png" />
                            <br />
                            <span>
                                Systematic trading platform
                                <br />
                                that allows you to create and backtest
                                <br />
                                strategies without coding.
                            </span>
                        </a>
                    </div>
                    {/* 3rd Row */}
                    <div className="col-4 p-3">
                        <a href="https://www.tijorifinance.com/">
                            <img src="/media/images/tijori.svg" />
                            <br />
                            <span class="">
                                Our asset management venture
                                <br />
                                that is creating simple and transparent index
                                <br />
                                funds to help you save for your goals.
                            </span>
                        </a>
                        <br />
                        <br class="hide-on-mobile" />
                        <a href="https://joinditto.in/">
                            <img src="/media/images/dittoLogo.png" />
                            <br />
                            <span>
                                Systematic trading platform
                                <br />
                                that allows you to create and backtest
                                <br />
                                strategies without coding.
                            </span>
                        </a>
                    </div>
                </div>
                <div>
                    
                    <a href="https://zerodha.com/open-account/" className="button"><button type="button" class="mt-4 btn btn-primary btn-lg" style={{ width: "18%", margin: "auto" }}>Sign up for free</button></a>
                </div>
            </div>
        </>
    );
}