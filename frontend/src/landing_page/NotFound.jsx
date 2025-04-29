export default function NotFound() {
    return (
        <div className="container p-5 mb-5 text-center">
            <div className="row">
                <h1 className="mt-5 fs-2">404 Not Found</h1>
                <p className="mt-3 text-muted">Sorry, this page doesn't exist.</p>
                <button type="button" class="mt-4 btn btn-primary btn-lg" style={{width:"18%",margin:"auto"}}>Go Home</button>
            </div>
        </div>
    );
}