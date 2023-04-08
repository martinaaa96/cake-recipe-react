
import '../../styles/app.css';

import { Link } from 'react-router-dom'

export default function Home() {

    return (
        <section>
            <div className="welcome-message">
                <img src="images/banner1.jpg" />

                <div className="text-content col-md-8">
                    <span>See the best cake recipes.</span>
                    <h2 className="text-uppercase colored padding-xsmall">DELICIOUS CUPCAKES FOR YOU</h2>
                    <p>Trusted recipes for chocolate cake, white cake, banana cakes,carrot cakes and more with photos and tips from home cooks.</p>
                    <div className="pix_btn">
                        <Link to="/catalog" className="btn-hvr-effects mt-3">Products</Link>
                    </div>

                </div>
            </div>
        </section>
    )
}