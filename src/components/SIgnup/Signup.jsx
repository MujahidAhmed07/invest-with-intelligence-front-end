import React from 'react';
import Form from 'react-bootstrap/Form';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBInput, MDBIcon } from 'mdb-react-ui-kit';

function SignUp() {
    return (
        <MDBContainer fluid>
            <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                <MDBCardBody>
                    <MDBRow>
                        {/* Form Section */}
                        <MDBCol md='12' lg='6' className='d-flex flex-column align-items-center'>
                            <h3 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</h3>

                            <div className="d-flex flex-row align-items-center mb-4 ">
                                <MDBIcon fas icon="user me-3" size='lg' />
                                <MDBInput label='Your Username' id='form1' type='text' />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="envelope me-3" size='lg' />
                                <MDBInput label='Your Email' id='form2' type='email' />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="user-circle me-3" size='lg' />
                                <Form.Select style={{ height: '36px' }}>
                                    <option value={""}>Choose Your Role</option>
                                    <option value={"entreprenuer"}>Entrepreneur</option>
                                    <option value={"investor"}>Investor</option>
                                </Form.Select>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="lock me-3" size='lg' />
                                <MDBInput label='Password' id='form3' type='password' />
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <MDBIcon fas icon="key me-3" size='lg' />
                                <MDBInput label='Repeat your password' id='form4' type='password' />
                            </div>

                            <MDBBtn className='mb-4' size='lg'>Sign Up</MDBBtn>
                        </MDBCol>

                        {/* Image Section */}
                        <MDBCol md='12' lg='6' className='d-flex align-items-center justify-content-center'>
                            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}

export default SignUp;
