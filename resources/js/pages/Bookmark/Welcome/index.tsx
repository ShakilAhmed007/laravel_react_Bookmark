import React from 'react'

function WelcomePage() {
    return (
      <div>
          <div className="container d-flex align-items-center min-vh-100">
              <div className="header">
                  <div className="display-1">Bookmark.</div>
              </div>
              <div className="card col-6">
                  <div className="card-body">
                      <a className="btn btn-primary d-block my-1" href='/login'>Login</a>
                      <a className="btn btn-dark d-block my-1" href='/register'>Regester</a>
                  </div>
              </div>
          </div>
      </div>
    )
}

export default WelcomePage
