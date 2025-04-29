export default function ChargesTables() {

    const freeTagStyle = () => ({
        textTransform: "uppercase",
        fontSize: "11px",
        fontWeight: "500",
        color: "#fff",
        background: "#4caf50",
        padding: "4px 10px",
        borderRadius: "2px",
    });

    return (
        <>
            <div class="container p-5">
                <h2 class="text-muted fw-normal fs-3 mt-5 mb-3">Charges for account opening</h2>
                <div class="table-responsive">
                    <table className="table table-borderless text-start">
                        <thead className="border">
                            <tr>
                                <th>Type of account</th>
                                <th>Charges</th>
                            </tr>
                        </thead>
                        <tbody className="border">
                            <tr>
                                <td>Online account</td>
                                <td><span style={freeTagStyle()}>free</span></td>
                            </tr>
                            <tr>
                                <td>Offline account</td>
                                <td><span style={freeTagStyle()}>free</span></td>
                            </tr>
                            <tr>
                                <td>NRI account (offline only)</td>
                                <td>₹ 500</td>
                            </tr>
                            <tr>
                                <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                                <td>₹ 500</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};