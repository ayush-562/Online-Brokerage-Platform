import "./WatchList.css";
import { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp, BarChartOutlined, MoreHoriz } from "@mui/icons-material";
import { watchlist } from "../data/data.js";

export default function WatchList() {
    return (
        <div className="watchlist-container">
            <div className="search-container">
                <input
                    type="text"
                    name="search"
                    id="watchlist-search"
                    placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
                    className="watchlist-search"
                />
                <span className="counts">{watchlist.length} / 50</span>
            </div>
            {/* List */}
            <ul className="watchlist">
                {watchlist.map((stock, index) => {
                    return (
                        <WatchListItem stock={stock} key={index} />
                    );
                })}
            </ul>
        </div>
    );
}

const WatchListItem = ({ stock }) => {
    const [showWatchListActions, setShowWatchListActions] = useState(false);

    const handleMouseEnter = () => {
        setShowWatchListActions(true);
    };

    const handleMouseExit = () => {
        setShowWatchListActions(false);
    };

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
            <div className="watchlist-item">
                <span className={stock.isDown ? "down" : "up"}>{stock.name}</span>
                <div className="watchlist-item-info">
                    <span className="percent">{stock.percent}</span>
                    {stock.isDown ? (<KeyboardArrowDown className="down" />) : (<KeyboardArrowUp className="up" />)}
                    <span className={stock.isDown ? "down" : "up"}>{stock.price}</span>
                </div>
            </div>
            {showWatchListActions && <WatchlistActions uid={stock.name} />}
        </li>
    );
};

const WatchlistActions = ({ uid }) => {
    return (
        <span className="watchlist-actions">
            <span>
                <Tooltip title="Buy (B)" placement="top" arrow slots={{ transition: Grow }}>
                    <button className="buy">Buy</button>
                </Tooltip>
                <Tooltip title="Sell (S)" placement="top" arrow slots={{ transition: Grow }}>
                    <button className="sell">Sell</button>
                </Tooltip>
                <Tooltip title="Analytics" placement="top" arrow slots={{ transition: Grow }}>
                    <button className="action">
                        <BarChartOutlined className="icon" />
                    </button>
                </Tooltip>
                <Tooltip title="More" placement="top" arrow slots={{ transition: Grow }}>
                    <button className="action">
                        <MoreHoriz className="icon" />
                    </button>
                </Tooltip>
            </span>
        </span>
    );
};