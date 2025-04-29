const CurrencyPricing = () => {
    return (
        <div className="table-responsive">
            <table className="table table-borderless text-start">
                <thead className="border">
                    <tr>
                        <th>&nbsp;</th>
                        <th className="fw-normal">Commodity futures</th>
                        <th className="fw-normal">Commodity options</th>
                    </tr>
                </thead>
                <tbody className="border">
                    <tr>
                        <td class="">Brokerage</td>
                        <td>0.03% or Rs. 20/executed order whichever is lower</td>
                        <td>₹ 20/executed order</td>
                    </tr>
                    <tr class="">
                        <td class="">STT/CTT</td>
                        <td>0.01% on sell side (Non-Agri)</td>
                        <td>0.05% on sell side</td>
                    </tr>
                    <tr>
                        <td class="">Transaction charges</td>
                        <td>MCX: 0.0021%<br />NSE: 0.0001%</td>
                        <td>MCX: 0.0418%<br />NSE: 0.001%</td>
                    </tr>
                    <tr class="">
                        <td class="">GST</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                        <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                    </tr>
                    <tr>
                        <td class="">SEBI charges</td>
                        <td><strong>Agri:</strong><br />₹1 /
                            crore<br /><strong>Non-agri:</strong><br />₹10 / crore</td>
                        <td>₹10 / crore</td>
                    </tr>
                    <tr class="" colspan="2">
                        <td class="">Stamp charges</td>
                        <td>0.002% or ₹200 / crore on buy side</td>
                        <td>0.003% or ₹300 / crore on buy side</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CurrencyPricing;  