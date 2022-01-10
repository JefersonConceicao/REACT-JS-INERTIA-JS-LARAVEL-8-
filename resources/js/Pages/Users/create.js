import React, { useState, useEffect } from 'react';
import Layout from '../../Layout';

import { Link } from '@inertiajs/inertia-react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBRow,
    MDBCol,
    MDBTypography,
    MDBCardHeader,
    MDBIcon,
    MDBInput,
    MDBBtn,
} from 'mdb-react-ui-kit';

const Create = () => {

    return (
        <MDBRow>
            <MDBCol size="12">
                <MDBCard className="bg-default shadow-1-strong">
                    <MDBCardHeader>
                        <MDBCardTitle className="mt-2">
                            <MDBRow>
                                <MDBCol size="1"className="mt-1">
                                    <Link
                                        href="/users/"
                                        method="get"
                                        as="a"
                                    >
                                        <MDBIcon icon="angle-left" color="dark" size='lg'/>
                                    </Link>
                                </MDBCol>
                                <MDBCol size="11">
                                    <MDBTypography variant="h4"> Novo Usuário </MDBTypography>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardTitle>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <form >
                            <MDBRow className="mb-3">
                                <MDBCol md="6">
                                    <MDBInput label="Nome" id="name" type='text'/>
                                </MDBCol>
                                <MDBCol md="6">
                                    <MDBInput label="E-mail" id="email" type='email'/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mb-3">
                                <MDBCol md="6">
                                    <MDBInput label="Senha" id="password" type='password'/>
                                </MDBCol>
                                <MDBCol md="6">
                                    <MDBInput label="Confirmar senha" id="confirm_password" type='password'/>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow className="mb-3">
                                <MDBCol md="12">
                                    <Link href="/users/store" method="post" as="div">
                                        <MDBBtn
                                            color="success"
                                            style={{float:'right'}}
                                        >
                                           <b>Salvar</b>
                                        </MDBBtn>
                                    </Link>
                                </MDBCol>
                            </MDBRow>
                        </form>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    )
}

Create.layout = page => <Layout children={page} />

export default Create
