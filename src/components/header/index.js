import React from "react";


function Header(props) {
  const { categories = [], currentCat, changeCat } = props;
  console.log(categories);
  

  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="/">
            Blerand Ismaili
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <ul className="navbar-nav fw-bold">
              {categories.map((cat, i) => (
                <li
                  onClick={() => changeCat(cat.name)}
                  className={`nav-item text-end mx-2 my-2 point ${
                    currentCat !== cat.name && "text-muted"
                  }`}
                  key={cat.name}
                >
                  {cat.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

