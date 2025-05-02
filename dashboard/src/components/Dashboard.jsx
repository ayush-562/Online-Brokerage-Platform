import OtherApps from "./OtherApps";
import Funds from "./Funds";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import WatchList from "./WatchList";
import Summary from "./Summary";
import { Routes, Route } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <WatchList />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Summary />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/holdings" element={<Holdings />} />
                    <Route path="/positions" element={<Positions />} />
                    <Route path="/funds" element={<Funds />} />
                    <Route path="/otherApps" element={<OtherApps />} />
                </Routes>
            </div>
        </div>
    );
}