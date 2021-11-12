import React from 'react'

export default function Banner() {
    return (
        <div className="banner-section">
            <div id="carouselExampleIndicators" className="carousel-container carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators ">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active carousel-item-1">
                        <img src="images/cloths images 2.jfif" className="carousel-imagesd-block w-100 " alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="images/cloths images 2.jfif" className="carousel-imagesd-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="images/cloths images 2.jfif" className="carousel-imagesd-block w-100" alt="..." />
                    </div>
                </div>
                <div>

                </div>
                <button className="carousel-navigation-button carousel-control-prev " style={{ marginRight: "100%" }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-navigation-button carousel-control-next" style={{ marginLeft: "100%" }} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="categorie-items">
                <ul >
                    <li><a href="/">T.shirt</a></li>
                    <li><a href="/">Shirt</a></li>
                    <li><a href="/">Trousers</a></li>
                    <li><a href="/">Watch</a></li>
                    <li><a href="/">Shoes</a></li>
                    <li><a href="/">Accessories</a></li>
                </ul>
            </div>
        </div>
    )
}
