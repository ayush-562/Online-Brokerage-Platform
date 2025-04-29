import "./SupportHero.css";

export default function supportHero() {
    return (
        <>
            <section className="container-fluid support-hero">
                <div className="p-5 mt-5 hero-header">
                    <h3><a href="/" className="">Support Portal</a></h3>
                    <a class="border-bottom" href="/">Track tickets</a>
                </div>
                <div className="row p-5 pt-0">
                    <div className="col-7 support-search">
                        <h1>Search for an answer or browse help topics to create a ticket</h1>
                        <div className="search-input-div">
                            <input type="text" placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." id="search-input" />
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div class="support-links-div">
                            <p class="support-links">
                                <a href="https://zrd.sh/signup">Track account opening</a>
                            </p>
                            <p class="support-links">
                                <a href="https://zrd.sh/segment-activation">Track segment activation</a>
                            </p>
                            <p class="support-links">
                                <a href="https://zrd.sh/latest-leverage">Intraday margins</a>
                            </p>
                            <p class="support-links">
                                <a class="kite-manual-link" href="https://zrd.sh/kite-manual">Kite user manual</a>
                            </p>
                        </div>
                    </div>
                    <div className="col-5 featured-support">
                        <h1>Featured</h1>
                        <li><a href="">MCX Option contracts expiry - April 2025</a></li>
                        <li><a href="">MCX Base metals contract expiry - April 2025</a></li>
                    </div>
                </div>
            </section>
        </>
    );
}