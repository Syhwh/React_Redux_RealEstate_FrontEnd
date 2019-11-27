import React from 'react';
import CreatePropertyForm from './CreatePropertyF'
import { Container, Row, Breadcrumb } from 'react-bootstrap';

export function CreatePropertyPage() {
  return (
    <Container>
      <Row className='mt-2 offset-3'>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item >Property </Breadcrumb.Item>
          <Breadcrumb.Item active>Create Property</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Row>
        <CreatePropertyForm />
      </Row>
    </Container>
  )
}
