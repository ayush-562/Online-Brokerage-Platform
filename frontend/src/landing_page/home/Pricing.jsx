import PricingInfo from "./PricingInfo";

export default function pricing() {
    return (
        <div className="container p-5">
            <div className="row p-5">
                <div className="col-5">
                    <h1 className="mb-4 fs-2">Unbeatable pricing</h1>
                    <p className="text-muted lh-lg">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="" aria-hidden="true" style={{textDecoration:"none"}}>See pricing &nbsp;&nbsp;<i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="col-7 mt-5">
                    <PricingInfo/>
                </div>
            </div>
        </div>
    );
}