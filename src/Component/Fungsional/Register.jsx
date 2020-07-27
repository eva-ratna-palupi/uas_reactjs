import React, { Fragment, useContext, useState } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import axios from 'axios'
import { AuthContext } from '../../App';
import {Link} from 'react-router-dom'

const qs = require('querystring')
const api = 'http://localhost:3001'

const Register = () => {
    const { dispatch } = useContext(AuthContext)

    const initialState = {
        nama_user: "",
        email: "",
        password: "",
        level: "",
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
        nama_user: data.nama_user,
        email: data.email,
        password: data.password,
        level: data.level
    }

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }

    axios.post(api + '/auth/api/v1/register', qs.stringify(requestBody), config)
        .then(res => {
            if (res.data.success === true) {
                dispatch({
                    type: "REGISTER",
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
                <Container><br /><br />
                    <Form onSubmit={handleFormSubmit}>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <FormGroup>
                                <Label for="Nama">Nama</Label>
                                <Input type="text" name="nama_user" id="nama" value={data.nama_user} onChange={handleInputChange} placeholder="Masukan Nama" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Email">Email</Label>
                                <Input type="email" name="email" id="eEmail" value={data.email} onChange={handleInputChange} placeholder="Masukan Email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Password">Password</Label>
                                <Input type="password" name="password" id="Password" value={data.password} onChange={handleInputChange} placeholder="Masukan Password" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="Select">Level</Label>
                                <Input type="select" name="select" id="Select" >
                                    <option value={data.level} onChange={handleInputChange}>Member</option>
                                    <option value={data.level} onChange={handleInputChange}>Admin</option>
                                </Input>
                            </FormGroup>
                            {data.errorMessage && (
                                <div className="alert alert-danger" role="alert">
                                    {data.errorMessage}
                                </div>
                            )}
                            <Button color="success" block disabled={data.isSubmitting}><Link to ="/">Submit</Link></Button>
                        </Col>
                    </Form>
                </Container>
            </Fragment>
        </div>
    );
}

export default Register;
