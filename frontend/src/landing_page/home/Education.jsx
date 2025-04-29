export default function Education() {
    return (
        <div className="container p-5">
            <div className="row p-5">
                <div className="col-6">
                    <img src="/media/images/education.svg" alt="varsity" style={{width:"80%"}}/>
                </div>
                <div className="col-6">
                    <h1 className="mb-4 fs-2 fw-normal">Free and open market education</h1>
                    <p className="text-muted lh-lg">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="" aria-hidden="true" style={{textDecoration:"none"}}>Varsity &nbsp;&nbsp;<i class="fa-solid fa-arrow-right-long"></i></a>
                    <p className="text-muted lh-lg mt-5">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" aria-hidden="true" style={{textDecoration:"none"}}>TradingQ&A &nbsp;&nbsp;<i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </div>
    );
}