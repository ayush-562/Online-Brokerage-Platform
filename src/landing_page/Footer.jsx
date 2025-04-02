import './Footer.css';
export default function Footer() {
    return (
        <footer className="border-top mt-5" style={{ backgroundColor: "rgb(250, 250, 250" }}>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <img src="media/images/logo.svg" alt="zerodhaLogo" style={{ width: "50%" }} />
                        <p className="mt-3 mb-0 fw-light text-muted">&copy; 2010 - 2025, Zerodha Broking Ltd.</p>
                        <p className="m-0 fw-light text-muted">All rights reserved.</p>
                        <ul class="social">
                            <li>
                                <a href="https://twitter.com/zerodhaonline"><i class="fa-brands fa-x-twitter"></i></a>
                            </li>
                            <li>
                                <a href="https://facebook.com/zerodha.social"><i class="fa-brands fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="https://instagram.com/zerodhaonline/"><i class="fa-brands fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/company/zerodha"><i class="fa-brands fa-linkedin"></i></a>
                            </li>
                        </ul>
                        <hr />
                        <ul class="social">
                            <li>
                                <a href="https://www.youtube.com/@zerodhaonline"><i class="fa-brands fa-youtube"></i></a>
                            </li>
                            <li>
                                <a href="https://whatsapp.com/channel/0029Va8tzF0EquiIIb9j791g"><i class="fa-brands fa-whatsapp"></i></a>
                            </li>
                            <li>
                                <a href="https://t.me/zerodhain"><i class="fa-brands fa-telegram"></i></a>
                            </li>
                            <li>
                                <a href="https://instagram.com/zerodhaonline/"><i class="fa-brands fa-threads"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul class="footer-list">
                            <li class="nav-head">Company</li>
                            <li><a href="https://zerodha.com/about/">About</a></li>
                            <li><a href="https://zerodha.com/products/">Products</a></li>
                            <li><a href="https://zerodha.com/pricing/">Pricing</a></li>
                            <li>
                                <a href="https://zerodha.com/refer/">Referral programme</a>
                            </li>
                            <li><a href="https://careers.zerodha.com">Careers</a></li>
                            <li><a href="https://zerodha.tech">Zerodha.tech</a></li>
                            <li><a href="https://zerodha.com/open-source/">Open source</a></li>
                            <li><a href="https://zerodha.com/media/">Press &amp; media</a></li>
                            <li><a href="https://zerodha.com/cares/">Zerodha Cares (CSR)</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul class="footer-list">
                            <li class="nav-head">Support</li>
                            <li><a href="https://zerodha.com/contact/">Contact us</a></li>
                            <li>
                                <a href="https://support.zerodha.com">Support portal</a>
                            </li>
                            <li><a href="https://zerodha.com/z-connect/">Z-Connect blog</a></li>
                            <li><a href="https://zerodha.com/charges/">List of charges</a></li>
                            <li>
                                <a href="https://zerodha.com/resources/">Downloads &amp; resources</a>
                            </li>
                            <li>
                                <a href="https://zerodha.com/videos">Videos</a>
                            </li>
                            <li>
                                <a href="https://stocks.zerodha.com">Market overview</a>
                            </li>
                            <li>
                                <a href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/how-do-i-create-a-ticket-at-zerodha">How to file a complaint?</a>
                            </li>
                            <li>
                                <a href="https://support.zerodha.com/category/your-zerodha-account/your-profile/ticket-creation/articles/track-complaints-or-tickets">Status of your complaints</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul class="footer-list">
                            <li class="nav-head">Account</li>
                            <li>
                                <a href="https://zerodha.com/open-account/">Open an account</a>
                            </li>
                            <li>
                                <a href="https://zerodha.com/fund-transfer/">Fund transfer</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-5 text-small text-muted" style={{ fontSize: "14px" }}>
                    <p>Zerodha Broking Ltd.: Member of NSE, BSE & MCX - SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 - SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                    <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                    <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>
                    <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                    <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                    <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
                </div>
            </div>
        </footer>
    );
}