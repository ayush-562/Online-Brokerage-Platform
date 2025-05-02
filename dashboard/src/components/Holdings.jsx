import { holdings } from "../data/data.js";
import "./Holdings.css";

export default function Holdings() {
    return (
        <>
            <h3 className="title">Holdings ({holdings.length})</h3>
            <div className="order-table">
                <table>
                    <tr>
                        <th>Instrument</th>
                        <th>Oty.</th>
                        <th>Avg.</th>
                        <th>LTP</th>
                        <th>Cur. val</th>
                        <th>P&L</th>
                        <th>Net chg.</th>
                        <th>Day chg.</th>
                    </tr>
                    {/* DATA FROM  */}
                    {holdings.map((stock, index) => {
                        const currValue = stock.price * stock.qty;
                        const pnl = currValue - (stock.avg * stock.qty);  // profit or loss
                        const isProfit = pnl >= 0.0;  // true or false
                        const profitClass = isProfit ? "profit" : "loss";  // colour of text
                        const dayClass = stock.isLoss ? "loss" : "profit";

                        return (
                            <tr key={index} className="item">
                                <td>{stock.name}</td>
                                <td>{stock.qty}</td>
                                <td>{stock.avg.toFixed(2)}</td>
                                <td>{stock.price.toFixed(2)}</td>
                                <td>{currValue.toFixed(2)}</td>
                                <td className={profitClass}>{pnl.toFixed(2)}</td>
                                <td className={profitClass}>{stock.net}</td>
                                <td className={dayClass}>{stock.day}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>
            <div className="row">
                <div className="col">
                    <h5>
                        29,875.<span>55</span>{" "}
                    </h5>
                    <p>Total investment</p>
                </div>
                <div className="col">
                    <h5>
                        31,428.<span>95</span>{" "}
                    </h5>
                    <p>Current value</p>
                </div>
                <div className="col">
                    <h5>1553.40 (+5.20%)</h5>
                    <p>P&L</p>
                </div>
            </div>
        </>
    );
}