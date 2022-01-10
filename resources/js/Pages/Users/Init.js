import React, { useState, useEffect } from "react";
import Layout from "../../Layout";

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBRow,
    MDBCol,
    MDBCardHeader,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBBtn,
    MDBIcon,
    MDBTypography,
} from "mdb-react-ui-kit";

const Init = ({ data }) => {
    return (
        <>
            <MDBRow>
                <MDBCol size="12">
                    <MDBCard className="bg-default shadow-1-strong">
                        <MDBCardHeader>
                            <MDBCardTitle className="mt-2">
                                <MDBRow>
                                    <MDBCol size="6">
                                        <MDBTypography variant="h4">
                                            Usuários
                                        </MDBTypography>
                                    </MDBCol>
                                    <MDBCol size="6">
                                        <MDBBtn
                                            rounded
                                            color="success"
                                            style={{ float: "right" }}
                                        >
                                            <MDBIcon icon="plus" size="lg" />
                                        </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardTitle>
                        </MDBCardHeader>
                        <MDBCardBody>
                            <MDBTable hover bordered responsive>
                                <MDBTableHead dark>
                                    <tr>
                                        <th scope="col"> Nome </th>
                                        <th scope="col"> E-mail </th>
                                        <th scope="col"> Ultimo Login </th>
                                        <th scope="col" style={{ width: "4%" }}>
                                            {" "}
                                            Ações{" "}
                                        </th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    {data.map((user, index) => (
                                        <tr key={index}>
                                            <td> {user.name} </td>
                                            <td> {user.email} </td>
                                            <td>
                                                {" "}
                                                {!!user.last_login
                                                    ? user.last_login
                                                    : "Não informado"}
                                            </td>
                                            <td className="d-flex justify-content-between">
                                                <MDBBtn color="primary">
                                                    <MDBIcon
                                                        icon="edit"
                                                        size="md"
                                                    />
                                                </MDBBtn>

                                                <MDBBtn color="danger">
                                                    <MDBIcon
                                                        icon="trash-alt"
                                                        size="md"
                                                    />
                                                </MDBBtn>
                                            </td>
                                        </tr>
                                    ))}
                                </MDBTableBody>
                            </MDBTable>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </>
    );
};

Init.layout = (page) => <Layout children={page} />;
export default Init;
