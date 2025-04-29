export default function Hero() {
    return (
        <div className="container p-5 mb-5 text-center">
            <div className="row">
                <img src="/media/images/homeHero.png" alt="Hero Image" className="mb-5" />
                <h1 className="mt-5 ">Invest in everything</h1>
                <p className="mt-2">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button type="button" class="mt-4 btn btn-primary btn-lg" style={{width:"18%",margin:"auto"}}>Sign up for free</button>
            </div>
        </div>
    );
}