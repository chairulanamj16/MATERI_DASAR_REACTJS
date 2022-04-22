import React from "react";
import { Link } from "react-router-dom";
import { Tapin } from '../../../assets';

const NavbarOrganism = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
            <div className="container">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img src={Tapin} className="img-fluid" style={{width:60}}/>
                    <div className="ms-3">
                        <h4 className="m-0">Desa Percontohan</h4>
                        Kabupaten Tapin
                    </div>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <Link className="nav-link active" to="/">
                        Home
                    </Link>
                    <Link className="nav-link" to="/government">Pemerintah</Link>
                    <Link className="nav-link" to="/infographic">Infograpis</Link>
                    <Link className="nav-link" to="/news">Berita</Link>
                    <Link className="nav-link" to="/letter">Surat</Link>
                </div>
                </div>
            </div>
        </nav>  
    )
}

export default NavbarOrganism;