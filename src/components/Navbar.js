import React from 'react';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Reader's Hub</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Books
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">Art</a></li>
                  <li><a className="dropdown-item" href="/">Fiction</a></li>
                  <li><a className="dropdown-item" href="/">Biography</a></li>
                  <li><a className="dropdown-item" href="/">Science</a></li>
                  <li><a className="dropdown-item" href="/">Technology</a></li>
                  <li><a className="dropdown-item" href="/">Business</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">New Arrivals</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Best Sellers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Featured Authors</a>
              </li>
            </ul>
            <div className='container col-4'>
              <form className='d-flex'>
                <input className="form-control me-2" type="search" placeholder="Search by Title, Author, Publisher or ISBN" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
            <div>
              <img style={{ width: "50px", cursor: "pointer" }}
                src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
                alt="user-img"
                className="userimg"
              />
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;



{/* <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Reader's Hub</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Books
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="/">Art</a></li>
              <li><a className="dropdown-item" href="/">Fiction</a></li>
              <li><a className="dropdown-item" href="/">Biography</a></li>
              <li><a className="dropdown-item" href="/">Science</a></li>
              <li><a className="dropdown-item" href="/">Technology</a></li>
              <li><a className="dropdown-item" href="/">Business</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">New Arrivals</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Best Sellers</a>
          </li>
          <li className="nav-item">
            <a className="nav-link">Featured Authors</a>
          </li>
        </ul>
        <div className='container col-4'>
          <form className='d-flex'>
            <input className="form-control me-2" type="search" placeholder="Search by Title, Author, Publisher or ISBN" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
        <div>
          <img style={{ width: "50px", cursor: "pointer" }}
            src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
            alt="user-img"
            className="userimg"
          />
        </div>

      </div>
    </div>
  </nav>
</> */}
