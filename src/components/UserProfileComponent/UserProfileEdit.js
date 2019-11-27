import React from 'react';
import EditProfileForm from './EditProfileForm';
import { Container, Row, Breadcrumb } from 'react-bootstrap';
export function UserProfileEdit() {
  return (
    <Container>
      <Row className='mt-2 offset-3'>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item >Profile </Breadcrumb.Item>
          <Breadcrumb.Item active>Edit</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Row>
        <EditProfileForm />
      </Row>
    </Container>
  )
}