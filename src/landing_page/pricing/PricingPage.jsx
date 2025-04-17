import Hero from "./Hero.jsx";
import PricingTab from "./PricingTab.jsx";
import ChargesTables from "./ChargesTables.jsx";

export default function Stats() {
    return (
        <>
            <Hero />
            <PricingTab />
            <p class="text-center fs-4 text-muted fw-normal"><a style={{textDecoration:"none"}} href="">Calculate
                your costs upfront</a> using our brokerage calculator
            </p>
            <ChargesTables/>
        </>
    );
}