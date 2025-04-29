const CurrencyPricing = () => {
    return (
        <div className="table-responsive">
            <table className="table table-borderless text-start">
                <thead className="border">
                    <tr>
                        <th>&nbsp;</th>
                        <th className="fw-normal">Currency futures</th>
                        <th className="fw-normal">Currency options</th>
                    </tr>
                </thead>
                <tbody className="border">
                    <tr>
                        <td class="">Brokerage</td>
                        <td>0.03% or ₹ 20/executed order whichever is lower</td>
                        <td>₹ 20/executed order</td>
                    </tr>
                    <tr>
                        <td class="">STT/CTT</td>
                        <td>No STT</td>
                        <td>No STT</td>
                    </tr>
                    <tr>
                        <td class="">Transaction charges</td>
                        <td>NSE: 0.00035%<br />BSE: 0.00045%</td>
                        <td>NSE: 0.0311%<br />BSE: 0.001%</td>
                    </tr>
                    <tr>
                        <td class="">GST</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                    </tr>
                    <tr>
                        <td class="">SEBI charges</td>
                        <td>₹10 / crore</td>
                        <td>₹10 / crore</td>
                    </tr>
                    <tr>
                        <td class="">Stamp charges</td>
                        <td>0.0001% or ₹10 / crore on buy side</td>
                        <td>0.0001% or ₹10 / crore on buy side</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CurrencyPricing;  