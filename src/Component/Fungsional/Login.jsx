import React, { Fragment, useContext, useState } from 'react';
import axios from 'axios'
import { Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import logo from '../Gambar/be.png'
import { AuthContext } from '../../App';

const qs = require('querystring')
const api = 'http://localhost:3001'

function Login() {
    const { dispatch } = useContext(AuthContext)

    const initialState = {
        email: "",
        password: "",
        isSubmitting: false,
        errorMessage: null
    }

    const [data, setData] = useState(initialState)

    const handleInputChange = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        setData({
            ...data,
            isSubmitting: true,
            errorMessage: null
        })
    }

    const requestBody = {
        email: data.email,
        password: data.password
    }

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    axios.post(api + '/auth/api/v1/login', qs.stringify(requestBody), config)
        .then(res => {
            if (res.data.success === true) {
                dispatch({
                    type: "LOGIN",
                    payload: res.data
                })
            }
            else {
                setData({
                    ...data,
                    isSubmitting: false,
                    errorMessage: res.data.Message
                })
            }
            throw res
        })


    return (
        <div>
            <Fragment>
                <Container>
                    <br />
                    <Col  sm="12" md={{ size: 6, offset: 3 }}><img src={logo} alt="" className="logo"/></Col>
                            <Form onSubmit={handleFormSubmit}>
                                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                                        <FormGroup>
                                            <Label for="exampleEmail">Email</Label>
                                            <Input type="email" value={data.email} onChange={handleInputChange} name="email" id="exampleEmail" placeholder="Masukan Email" />
                                        </FormGroup>
                                    </Col>
                                    <Col  sm="12" md={{ size: 6, offset: 3 }}>
                                        <FormGroup>
                                            <Label for="examplePassword">Password</Label>
                                            <Input type="password" value={data.password} onChange={handleInputChange} name="password" id="examplePassword" placeholder="Masukan Password" />
                                        </FormGroup>
                                        {data.errorMessage && (
                                            <div className="alert alert-danger" role="alert">
                                                {data.errorMessage}
                                            </div>
                                        )}
                                    </Col><br/>
                                <Col  sm="12" md={{ size: 6, offset: 3 }}>
                                <Button color="success" block disabled={data.isSubmitting}>
                                    {data.isSubmitting ? (
                                        "...Loading"
                                    ) :
                                        (
                                            "Login"
                                        )}</Button></Col>
                            </Form>
                </Container>
            </Fragment>
        </div>
    );
}

export default Login;
