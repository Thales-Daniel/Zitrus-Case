import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './style.css';

function Register() {
  return (
    <Form className="form-register">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Digite seu email" />
        <Form.Text className="text-muted" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Digite Sua senha" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPostalCode">
        <Form.Label>Cep</Form.Label>
        <Form.Control type="Cep" placeholder="Digite seu Cep" />
        <Button type="button">Verificar</Button>
      </Form.Group>
      <Button variant="primary" type="submit">
        Registrar
      </Button>
    </Form>
  );
}

export default Register;
