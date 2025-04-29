import Hero from "../about/Hero";

export default function TopBar() {
    return (
        <div className="topbar-container">
            <div className="indices-container">
                <div className="nifty">
                    <p className="index">NIFTY 50</p>
                    <p className="index-points"></p>
                    <p className="percent"></p>
                </div>
                <div className="sensex">
                    <p className="index">SENSEX</p>
                    <p className="index-points"></p>
                    <p className="percent"></p>
                </div>
            </div>
        </div>
    );
}