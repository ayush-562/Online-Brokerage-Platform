export default function Awards() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col p-5">
                    <img src="/media/images/largestBroker.svg" alt="Awards" />
                </div>
                <div className="col p-5 mt-3">
                    <h1>Largest stock broker in India</h1>
                    <p className="mb-5">2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className="row">
                        <div className="col">
                            <ul className="investment-options">
                                <li> Future and Options </li>
                                <br />
                                <li> Commodity derivatives </li>
                                <br />
                                <li> Currency derivatives </li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="investment-options">
                                <li> stocks & IPOs </li>
                                <br />
                                <li> Direct mutual funds </li>
                                <br />
                                <li> Bond and Government securities </li>
                            </ul>
                        </div>
                    </div>
                    <img style={{width:"90%"}}src="/media/images/pressLogos.png" alt="press logos" />
                </div>
            </div>
        </div>
    );
}