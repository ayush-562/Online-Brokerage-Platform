export default function Hero() {
    return (
        <>
            <div className="row p-5 my-5 text-center text-muted border-bottom">
                <h1 style={{fontSize:"2.75rem", fontWeight:"500"}}>Zerodha Products</h1>
                <p className="mt-3">
                    Sleek, modern, and intuitive trading platforms
                </p>
                <p>
                    Check out our <a href="/investments" style={{textDecoration:"none"}}>investment offerings <span>→</span></a>
                </p>
            </div>
        </>
    );
}