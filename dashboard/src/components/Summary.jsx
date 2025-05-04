import "./Summary.css";

export default function Summary() {
    return (
        <>
            <div className="username">
                <h6>Hi, User!</h6>
                <hr className="summary-divider" />
            </div>

            <div className="summary-section">
                <span><p>Equity</p></span>

                <div className="summary-data">
                    <div className="first-summary-data">
                        <h3>3.74k</h3>
                        <p>Margin available</p>
                    </div>
                    <hr />

                    <div className="second-summary-data">
                        <p>Margins used <span>0</span>{" "}</p>
                        <p>Opening balance <span>3.74k</span>{" "}</p>
                    </div>
                </div>
                <hr className="summary-divider" />
            </div>

            <div className="summary-section">
                <span><p>Holdings (13)</p></span>

                <div className="summary-data">
                    <div className="first-summary-data">
                        <h3 className="profit">
                            1.55k <small>+5.20%</small>{" "}
                        </h3>
                        <p>P&L</p>
                    </div>
                    <hr />

                    <div className="second-summary-data">
                        <p>Current Value <span>31.43k</span>{" "}</p>
                        <p>Investment <span>29.88k</span>{" "}</p>
                    </div>
                </div>
                {/* <hr className="summary-divider" /> */}
            </div>
        </>
    );
}