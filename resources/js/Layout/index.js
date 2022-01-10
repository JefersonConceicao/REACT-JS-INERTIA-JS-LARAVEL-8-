import React, { useState} from "react";
import { Link } from '@inertiajs/inertia-react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBCollapse,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBIcon,
    MDBTypography
} from "mdb-react-ui-kit";

const Layout = ({ children }) => {
    const [showNav, setShowNav] = useState(false);
    const items = [
        {
            id:1,
            name: 'Usuários',
            route: '/'
        },
        {
            id:2,
            name: 'Grupos',
            route: '/roles'
        },
        {
            id:3,
            name: 'Setores',
            route: '/setores'
        }
    ];

    return (
        <>
            <MDBNavbar expand="lg" light bgColor="primary">
                <MDBContainer breakpoint="lg">
                    <MDBNavbarBrand href="#">
                        <img
                            src={"http://www.transalvadorantigo.salvador.ba.gov.br/homologacao/images_noticia/1429887429.jpg"}
                            alt={"Logo Transalvador"}
                            height={60}
                        />
                    </MDBNavbarBrand>
                    <MDBNavbarToggler
                        type="button"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() => setShowNav(!showNav)}
                    >
                        <MDBIcon icon="bars" fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNav}>
                        <MDBNavbarNav>
                            {items.map((option ,index)  => (
                                <MDBNavbarItem key={index}>
                                    <MDBNavbarLink className="text-light" active={option.route === window.location.pathname}
                                    >
                                        <Link
                                            href={option.route}
                                            as="div"
                                            method="GET"
                                            style={{cursor:'pointer'}}
                                        >
                                            <MDBTypography
                                                tag={option.route === window.location.pathname
                                                    ? "h4"
                                                    :  "small"
                                                }>
                                                {option.name}
                                            </MDBTypography>
                                        </Link>
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                            ))}
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>

            <MDBContainer breakpoint="lg" className="mt-3">
                {children}
            </MDBContainer>
        </>
    );
};

export default Layout;
