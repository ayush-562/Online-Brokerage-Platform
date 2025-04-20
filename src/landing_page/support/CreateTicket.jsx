import './CreateTicket.css';

export default function Stats() {
    return (
        <>
            <div className="container">
                <h2 className="text-muted fw-normal fs-4">To create a ticket, select a relevant topic</h2>
                <div className="row p-5 mb-3">
                    {/* First column */}
                    <div class="col-4">
                        <h3 class="support-links-header">
                            <a href="/category/account-opening">
                                <i class="fa-solid fa-circle-plus"></i>
                                &nbsp;&nbsp;&nbsp;Account Opening
                            </a>
                        </h3>
                        <span class="link-container"><a className="support-links" href="/category/account-opening/resident-individual">Resident individual</a></span>
                        <span class="link-container"><a className="support-links" href="/category/account-opening/minor">Minor</a></span>
                        <span class="link-container"><a className="support-links" href="/category/account-opening/nri-account-opening">Non Resident Indian (NRI)</a></span>
                        <span class="link-container"><a className="support-links" href="/category/account-opening/company-partnership-and-huf-account-opening">Company, Partnership, HUF and LLP</a></span>
                        <span class="link-container"><a className="support-links" href="/category/account-opening/glossary">Glossary</a></span>
                    </div>
                    {/* Second Column */}
                    <div class="col-4">
                        <h3 class="support-links-header">
                            <a href="/category/your-zerodha-account">
                                <i class="fa-regular fa-user"></i>
                                &nbsp;&nbsp;&nbsp;Your Zerodha Account
                            </a>
                        </h3>
                        <span class="link-container"><a className="support-links" href="/category/your-zerodha-account/your-profile">Your Profile</a></span>
                        <span class="link-container"><a className="support-links" href="/category/your-zerodha-account/account-modification-and-segment-addition">Account modification</a></span>
                        <span class="link-container"><a className="support-links" href="/category/your-zerodha-account/dp-id-and-bank-details">Client Master Report (CMR) and Depository Participant (DP)</a></span>
                        <span class="link-container"><a className="support-links" href="/category/your-zerodha-account/nomination-process">Nomination</a></span>
                        <span class="link-container"><a className="support-links" href="/category/your-zerodha-account/transfer-of-shares-and-conversion-of-shares">Transfer and conversion of securities</a></span>
                    </div>
                    {/* Third Column */}
                    <div class="col-4">
                        <h3 class="support-links-header">
                            <a href="/category/trading-and-markets">
                                <i class="fa-solid fa-chart-simple"></i>
                                &nbsp;&nbsp;&nbsp;Kite
                            </a>
                        </h3>
                        <span className="link-container"><a className="support-links" href="/category/trading-and-markets/ipo">IPO</a></span>
                        <span className="link-container"><a className="support-links" href="/category/trading-and-markets/trading-faqs">Trading FAQs</a></span>
                        <span className="link-container"><a className="support-links" href="/category/trading-and-markets/margins">Margin Trading Facility (MTF) and Margins</a></span>
                        <span className="link-container"><a className="support-links" href="/category/trading-and-markets/charts-and-orders">Charts and orders</a></span>
                        <span className="link-container"><a className="support-links" href="/category/trading-and-markets/alerts-and-nudges">Alerts and Nudges</a></span>
                        <span className="link-container"><a className="support-links" href="/category/trading-and-markets/general-kite">General</a></span>
                    </div>
                </div>
            </div>
        </>
    );
}