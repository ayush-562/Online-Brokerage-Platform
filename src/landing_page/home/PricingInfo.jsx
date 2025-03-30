const PricingInfo = () => {
    const data = [
      { img: "/media/images/pricing0.svg", text: "Free account opening" },
      { img: "/media/images/pricing0.svg", text: "Free equity delivery and direct mutual funds" },
      { img: "/media/images/pricing20.svg", text: "Intraday and F&O" },
    ];

    return (
        <div className="row">
            {data.map((item, index) => (
                <div key={index} className="col-md-4 d-flex align-items-center justify-content-center">
                    <img src={item.img} alt="Pricing" className="img-fluid" style={{ height: "80px"}} />
                    <p className="mb-0 fw-lighter" style={{ fontSize: "12px" }}>{item.text}</p>
                </div>
            ))}
        </div>
    );
};
    
export default PricingInfo;
    