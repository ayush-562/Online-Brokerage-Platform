import { positions } from "../data/data.js";

export default function Positions() {
    return (
        <>
            <h3 className="title">Positions ({positions.length})</h3>
            <div className="order-table">
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Instrument</th>
                        <th>Oty.</th>
                        <th>Avg.</th>
                        <th>LTP</th>
                        {/* <th>Cur. val</th> */}
                        <th>P&L</th>
                        {/* <th>Net chg.</th> */}
                        <th>Day chg.</th>
                    </tr>
                    {/* DATA FROM  */}
                    {positions.map((stock, index) => {
                        const currValue = stock.price * stock.qty;
                        const pnl = currValue - (stock.avg * stock.qty);  // profit or loss
                        const isProfit = pnl >= 0.0;  // true or false
                        const profitClass = isProfit ? "profit" : "loss";  // colour of text
                        const dayClass = stock.isLoss ? "loss" : "profit";

                        return (
                            <tr key={index} className="item">
                                <td>{stock.product}</td>
                                <td>{stock.name}</td>
                                <td>{stock.qty}</td>
                                <td>{stock.avg.toFixed(2)}</td>
                                <td>{stock.price.toFixed(2)}</td>
                                {/* <td>{currValue.toFixed(2)}</td> */}
                                <td className={profitClass}>{pnl.toFixed(2)}</td>
                                {/* <td className={profitClass}>{stock.net}</td> */}
                                <td className={dayClass}>{stock.day}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </>
    );
}