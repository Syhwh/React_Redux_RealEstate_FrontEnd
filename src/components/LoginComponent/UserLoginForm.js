import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AuthContext } from '../../utils/AuthContext';
import { loginUser } from '../../redux/actions/userActions';
import { loginAgency } from '../../redux/actions/agencyActions';
import { Form, Field, ErrorMessage, Formik } from 'formik';
import { Form as FormB, Alert } from 'react-bootstrap';
import * as Yup from 'yup';


const loginSchema = Yup.object().shape({
  typeAccount: Yup.string().required('You must select an Account Type'),
  userEmail: Yup.string()
    .email('Invalid email')
    .required('Required'),
  userPassword: Yup.string().required('Password is required'),
});


function UserLoginForm({ error, loginUser, loginAgency }) {
  const { authLoginUser } = useContext(AuthContext);
  const history = useHistory();

  const redirectToHome = () => {
    authLoginUser();
    history.push('/');
  }
  const redirectToDashboard = () => {
    authLoginUser();
    history.push('/dashboard');
  }
  return (<>
    <Formik
      initialValues={{
        typeAccount: '',
        userEmail: "",
        userPassword: ""
      }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        values.typeAccount === 'angency' ?
          loginAgency(values, redirectToDashboard) :
          loginUser(values, redirectToHome);
      }}
    >
      {({ isSubmitting }) => {
        return (
          <div className='container'>
            <div className='row'>
              <div className='offset-3 col-md-6'>
                <h2>User Login</h2>
                <Form >
                  <div>

                    <div> <ErrorMessage name='typeAccount' /></div>
                    <label className='mr-2' htmlFor='agent' > Invidividual</label>
                    <Field type="radio" name='typeAccount' value='agent' />

                    <label className='mr-2' htmlFor='agency' > Agency</label>
                    <Field type="radio" name='typeAccount' value='angency' />

                  </div>
                  {error && <Alert variant='danger'>{error}</Alert>}
                  <FormB.Group controlId="formBasicEmail">
                    <FormB.Label>Email address</FormB.Label>
                    <Field type="email" name='userEmail' placeholder='Email' className='form-control' />

                    <ErrorMessage name='userEmail' />

                  </FormB.Group>

                  <div className='form-group'>
                    <label htmlFor="passowrd">Confirm Password</label>
                    <Field
                      type="password"
                      name="userPassword"
                      placeholder='Write your password'
                      autoComplete="on"
                      className='form-control'
                    />
                    <ErrorMessage name='userPassword' />
                  </div>
                  <div className='form-group mb-4'>

                    <button className='btn btn-primary' type='submit' disabled={isSubmitting}> Login </button>
                  </div>
                </Form>
                <div className='mt-4'>Doesn't have an account? <Link to='/signUp'>SignUp</Link> </div>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  </>
  );
}
const mapStateToProps = (store) => {
  return {
    error: store.user.error || store.agency.error
  }
}
const mapDispatchToProps = { loginUser, loginAgency }

export default connect(mapStateToProps, mapDispatchToProps)(UserLoginForm)