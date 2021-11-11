import '../src/style.css';

function App() {
  return (
    <>
      {/* --------------- ❤️   Navbar ❤️  --------------------- */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="navbar-container ">
          <div className="img">
            <img src="images/menu-icon.svg" alt="Menu icon" />
          </div>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <div className="logo">
              <a href="/" target="_blank">
                <img src="images/logo.png" alt="entre logo" />
              </a>
            </div>
            <ul className="navUl navbar-nav mb-2 mb-lg-0">
              <li className="navList nav-item" id="nav-item-1">
                <a className="navLink nav-link text-dark " href="/">Home</a>
              </li>
              <li className="navList nav-item" id="nav-item-2">
                <a className="navLink nav-link text-dark " href="/">English</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="searchBar" type="search" placeholder="Search" aria-label="Search" />
              <div className="searchIcon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  className=" bi bi-search" viewBox="0 0 16 16">
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
            </form>
            <ul className="navUl-1 navbar-nav">
              <li className="navList nav-item" id="nav-item-1">
                <a className="navLink nav-link text-dark " href="/">Wishlist ❤️</a>
              </li>
            </ul>
            <div className="cart-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                className="bi bi-cart3" viewBox="0 0 16 16">
                <path
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </div>
            <div className="login-singup-tab">
              Login & Singup
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
              </svg>
            </div>
          </div>
        </div>
      </nav>


      {/* // <!-- ---------------------- ❤️ carosel/banner section ❤️ ----------------------- --> */}
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



      {/* // <!-- -----------------❤️ 1st container ❤️--------------------- --> */}

      <section className="offer-section">
        <div className="offer-container" >
          <div className="offer-container-heading">
            <h2>70% Offer On Brands</h2>
            <button>
              <a href="/">View More</a>
            </button>
          </div>
          <div className="offer-and-navigation-section">
            <div className="row offer-section-cards">
            <div className="navigation-left-button">
              <img src="images/navigation left button.svg" alt="" />
            </div>
              {/* card 1 */}
              <div className="card col">
                <img src="images/men image 1.png" className="card-img-top" alt="..." />
                <ul>
                  <li><a href="/">U.S Polo T-Shirt White</a></li>
                </ul>
                <h4>₹1099<span>.00</span></h4>
                <h6>M.R.P: ₹ <span>569.00</span> </h6>
                <h5>FREE DELIVERY</h5>
              </div>
              {/* card 2 */}
              <div className="card col">
                <img src="images/men image 2.jpg" className="card-img-top" alt="..." />
                <ul>
                  <li><a href="/">U.S Polo T-Shirt White</a></li>
                </ul>
                <h4>₹1099<span>.00</span></h4>
                <h6>M.R.P: ₹ <span>569.00</span> </h6>
                <h5>FREE DELIVERY</h5>
              </div>
              {/* card 3 */}
              <div className="card col">
                <img src="images/men image 3.jpg" className="card-img-top" alt="..." />
                <ul>
                  <li><a href="/">U.S Polo T-Shirt White</a></li>
                </ul>
                <h4>₹1099<span>.00</span></h4>
                <h6>M.R.P: ₹ <span>569.00</span> </h6>
                <h5>FREE DELIVERY</h5>
              </div>
              {/* card 4 */}
              <div className="card col">
                <img src="images/men image 4.jpg" className="card-img-top" alt="..." />
                <ul>
                  <li><a href="/">U.S Polo T-Shirt White</a></li>
                </ul>
                <h4>₹1099<span>.00</span></h4>
                <h6>M.R.P: ₹ <span>569.00</span> </h6>
                <h5>FREE DELIVERY</h5>
              </div>
              {/* card 5 */}
              <div className="card col">
                <img src="images/men image 5.jpg" className="card-img-top" alt="..." />
                <ul>
                  <li><a href="/">U.S Polo T-Shirt White</a></li>
                </ul>
                <h4>₹1099<span>.00</span></h4>
                <h6>M.R.P: ₹ <span>569.00</span> </h6>
                <h5>FREE DELIVERY</h5>
              </div>
              {/* card 5 */}
              <div className="card col">
                <img src="images/men image 1.png" className="card-img-top" alt="..." />
                <ul>
                  <li><a href="/">U.S Polo T-Shirt White</a></li>
                </ul>
                <h4>₹1099<span>.00</span></h4>
                <h6>M.R.P: ₹ <span>569.00</span> </h6>
                <h5>FREE DELIVERY</h5>
              </div>
              <div className="navigation-left-button">
              <img src="images/nav.svg" alt="" />
            </div>
            </div>
          </div>

        </div>
      </section>
      {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> */}
    </>
  );
}

export default App;
