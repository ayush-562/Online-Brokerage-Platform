import { useState } from "react";
import EquityPricing from "./EquityCharges";
import CurrencyCharges from "./CurrencyCharges";
import CommodityCharges from "./CommodityCharges";

export default function PricingTab() {
    const [activeTab, setActiveTab] = useState("Equity");

    const changeTab = (tab) => {
        setActiveTab(tab);
    };

    const tabStyle = (tab) => ({
        color: activeTab === tab ? "#666666" : "#387ed1",
        borderBottom: activeTab === tab ? "2px solid #387ed1" : "none",
        cursor: "pointer",
        padding: "6px 20px",
        fontWeight: activeTab === tab ? "500" : "normal",
        backgroundColor: "transparent",
        display: "inline",
        fontSize: "1.75rem",
      });

    return (
        <>
            <div className="container mt-4 p-5">
                {/* Tab Buttons */}
                <div className="d-flex mb-4 border-bottom">
                    <div onClick={() => setActiveTab("Equity")} style={tabStyle("Equity")}>
                        Equity
                    </div>
                    <div onClick={() => setActiveTab("Currency")} style={tabStyle("Currency")}>
                        Currency
                    </div>
                    <div onClick={() => setActiveTab("Commodity")} style={tabStyle("Commodity")}>
                        Commodity
                    </div>
                </div>

                {/* Tab Content */}
                <div className="mt-6">
                    {activeTab === "Equity" && <EquityPricing />}
                    {activeTab === "Currency" && <CurrencyCharges />}
                    {activeTab === "Commodity" && <CommodityCharges />}
                </div>
            </div>
        </>
    );
};