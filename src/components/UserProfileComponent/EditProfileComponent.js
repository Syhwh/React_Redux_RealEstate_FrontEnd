import React, { useContext, useState } from 'react';
import { connect } from 'react-redux';
import { editUser } from '../../redux/actions/userActions';
import { Form, Field, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from '../../utils/AuthContext';
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'
import ApiRE from '../../utils/ApiConfiguration';

const profileSchema = Yup.object().shape({
  userEmail: Yup.string()
    .email('Invalid email'),
  // .required('Required'),
  // userPassword:
  //   Yup.string().required('Password is required'),
  // userPasswordConfirm:
  //   Yup.string()
  //     .oneOf([Yup.ref('userPassword'), null], "Passwords must match")
  //     .required('Password confirm is required'),
  userGivenName: Yup.string().required('You must write your given name'),
  userFamilyName: Yup.string().required('You must write your  family name'),
  userDescription: Yup.string().required('You must write a  description'),
  officePhone: Yup.number('Phone must be a number')
    .min(7)
    .required('You must provide a valid phone number'),
  mobilePhone:
    Yup.number('Phone must be a number')
      .min(7)
      .required('You must provide a valid phone number'),
  skypeId:
    Yup.string().required('You must write your  SkypeID'),
  facebookURL:
    Yup.string().url('You must provide a valid url'),
  twitterUrl:
    Yup.string().url('You must provide a valid url'),
  instagramURL:
    Yup.string().url('You must provide a valid url'),
});

function EditProfile({ editUser, userInfo }) {
  console.log('userInfo in edit profile')
  console.log(userInfo)
  const { user } = useContext(AuthContext);
  const [images, setImages] = useState('');

  const handleChangeStatus = ({ meta, file }, status) => {
    setImages(file)
  }

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    const avatar = new FormData()
    avatar.append('image', images, images.name);
    const token = localStorage.getItem('token')
    ApiRE.post(`/gallery`, avatar, {
      headers: {
        authorization: token,
        'Content-Type': 'multipart/form-data'
      }
    }).then(({ data }) => {
      values.image = data.data;
      editUser(user, values);
      resetForm();
      setSubmitting(false);
    })
      .catch((error) => {
        console.log('error')
      })
  }

  return (<>
    <Formik
      initialValues={{
        userEmail: userInfo.userEmail || '',
        userPassword: '',
        userPasswordConfirm: '',
        userGivenName: userInfo.userGivenName || '',
        userFamilyName: userInfo.userFamilyName || '',
        userDescription: userInfo.userDescription || '',
        officePhone: userInfo.officePhone || '',
        mobilePhone: userInfo.mobilePhone || '',
        skypeId: userInfo.skypeId || '',
        facebookURL: userInfo.facebookURL || '',
        twitterUrl: userInfo.twitterUrl || '',
        instagramURL: userInfo.instagramURL || '',
      }}
      validationSchema={profileSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => {
        return (
          <div className='container'>
            <div className='row'>
              <div className='offset-3 col-md-6'>
                <h1>Edit your profile</h1>
                <Form >
                  <div className='form-group'>
                    <label htmlFor='userEmail' >Email</label>
                    <Field
                      type="email"
                      name='userEmail'
                      placeholder='Email'
                      className='form-control' />
                    <ErrorMessage name='userEmail' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor="password">Password</label>
                    <Field
                      type="password"
                      name="userPassword"
                      placeholder='Write your password'
                      className='form-control'
                    />
                    <ErrorMessage name='userPassword' />
                  </div>
                  <div>
                    <label htmlFor="userPasswordConfirm">Confirm Password</label>
                    <Field
                      type='password'
                      name='userPasswordConfirm'
                      placeholder='Repeat your password'
                      className='form-control' />
                    <ErrorMessage name='userPasswordConfirm' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='userGivenName' >Given Name</label>
                    <Field
                      name='userGivenName'
                      placeholder='Given Name'
                      className='form-control' />
                    <ErrorMessage name='userGivenName' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='userFamilyName' >Family Name</label>
                    <Field
                      name='userFamilyName'
                      placeholder='Family Name'
                      className='form-control' />
                    <ErrorMessage name='userFamilyName' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='userDescription' >About Me</label>
                    <Field
                      component='textarea'
                      rows='3'
                      name='userDescription'
                      placeholder='Write something about yourself'
                      className='form-control' />
                    <ErrorMessage name='userDescription' />
                  </div>
                  <div className='ContactInfo'>
                    <div className='form-group'>
                      <label htmlFor='officePhone' > Office Phone</label>
                      <Field
                        name='officePhone'
                        placeholder='xxx-xxxxx-xxx'
                        className='form-control' />
                      <ErrorMessage name='officePhone' />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='mobilePhone' >Mobile  Phone </label>
                      <Field
                        name='mobilePhone'
                        placeholder='xxx-xxxxx-xxx'
                        className='form-control' />
                      <ErrorMessage name='mobilePhone' />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='skypeId' >Skype Id </label>
                      <Field
                        name='skypeId'
                        placeholder='Skype Id'
                        className='form-control' />
                      <ErrorMessage name='skypeId' />
                    </div>
                  </div>
                  <div className='socialMedia' >
                    <div className='form-group'>
                      <label htmlFor='facebookURL'>Facebook </label>
                      <Field
                        name='facebookURL'
                        placeholder='Facebook URL'
                        className='form-control' />
                      <ErrorMessage name='facebookURL' />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='twitterUrl'>Twitter </label>
                      <Field
                        name='twitterUrl'
                        placeholder='Twitter URL'
                        className='form-control' />
                      <ErrorMessage name='twitterUrl' />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='instagramURL'>Instagram </label>
                      <Field
                        type='text'
                        name='instagramURL'
                        placeholder='Instagram URL'
                        className='form-control' />
                      <ErrorMessage name='instagramURL' />
                    </div>
                  </div>
                  <div>
                    <h3>  user picture  </h3>
                    <Dropzone
                      onChangeStatus={handleChangeStatus}
                      accept="image/*" />
                  </div>
                  <div className='mt-4 offset-5'>

                    <button className='btn btn-primary'
                      type='submit'
                      disabled={isSubmitting}> Save
                       </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        );
      }}
    </Formik >
  </>
  );
}
const mapStateToProps = (store) => {
  return {
    userInfo: store.user.user,
    error: store.user.error
  }
}
const mapDispatchToProps = { editUser }

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)