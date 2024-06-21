"use client"
import { useState, FC } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

interface LoginModalProps {
  show: boolean;
  handleClose: () => void;
}

const LoginModal = ({ show, handleClose }:LoginModalProps) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <Modal show={show} onHide={handleClose} >
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form className="mb-3" >
            <Form>Email address</Form>
            <Form 
              type="email" 
              placeholder="Enter your email address..." 
              value={email} 
              onChange={(e:any) => setEmail(e.target.value)} 
            />
          </Form>
          <Form className="mb-3" >
            <Form>Password</Form>
            <Form 
              type="password" 
              placeholder="Enter your password" 
              value={password} 
              onChange={(e:any) => setPassword(e.target.value)} 
            />
          </Form>
          <Form className="text-muted">
            <a href="#">Forgot your password?</a>
          </Form>
          <Button  type="submit" className="w-100 mt-3">
            Login
          </Button>
          <div className="mt-3 text-center">
            or continue with
          </div>
          <div className="d-flex justify-content-center mt-2">
            <Button  className="me-2">
              <i className="fab fa-google"></i> Continue with Google
            </Button>
            <Button>
              <i className="fab fa-facebook-f"></i> Continue with Facebook
            </Button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Form className="text-muted text-center">
          By continuing, you agree to Cryptocoin Bazar <a href="#">Terms of Service</a> and acknowledge you've read our <a href="#">Privacy Policy</a>.
        </Form>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
