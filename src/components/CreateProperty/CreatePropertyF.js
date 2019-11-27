import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { configInitialValues, propertySchema } from './config';
import { Form, Field, ErrorMessage, Formik } from 'formik';
import { Ammenities } from './Ammenities';
import Dropzone from 'react-dropzone-uploader';
import { createProperty } from '../../redux/actions/propertyActions';
import ApiRE from '../../utils/ApiConfiguration';
import Geocode from 'react-geocode';
Geocode.setApiKey(process.env.REACT_APP_API_MAPS);

function CreatePropertyForm ({ error, createProperty }) {
  const history = useHistory();
  const [images, setImages] = useState([]);
  const handleChangeStatus = ({ meta, file }, status, files) => {
    setImages(files);
  }
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const gallery = new FormData()
      images.forEach(({ file }) => { gallery.append('image', file, file.name); })
      const token = localStorage.getItem('token')
      const { data } = await ApiRE.post(`/gallery`, gallery, {
        headers: {
          authorization: token,
          'Content-Type': 'multipart/form-data'
        }
      })
      const coordenates = await Geocode.fromAddress(values.address)
      const { lat, lng } = coordenates.results[0].geometry.location;
      values.coordenates = { lat, lng }
      values.gallery = data.data;
      createProperty(values)
      resetForm()
      setSubmitting(false)
      history.push('/details')
    } catch (error) {
      console.log(error)
    }
  }
  return (<>
    <Formik
      initialValues={configInitialValues}
      validationSchema={propertySchema}
      onSubmit={handleSubmit}>
      {({ isSubmitting, values, setFieldValue }) => {
        return (<>
          <div className='col-md-12 col-sm-12 offset-3 '>
            <Form >
              <h1>Listing a New Property</h1>
              <section>
                <header><h2>Basic Information</h2></header>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label htmlFor='propertyTitle'>Property Title</label>
                    <Field
                      name='propertyTitle'
                      placeholder='Property Title'
                      className='form-control' />
                    <ErrorMessage name='propertyTitle' />
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='form-group'>
                    <label htmlFor='propertyPrice' >Price $</label>
                    <Field
                      name='propertyPrice'
                      placeholder='Price'
                      className='form-control' />
                    <ErrorMessage name='propertyPrice' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label htmlFor='propertyDescription' >Description</label>
                    <Field
                      className='form-control'
                      component='textarea'
                      rows='4'
                      name='propertyDescription'
                      placeholder='Write a property description' />
                    <ErrorMessage name='propertyDescription' />
                  </div>
                </div>
              </section>
              <section>
                <div className='col-md-6 col-sm-6'>
                  <h3>Location</h3>
                  <div className='form-group'>
                    <label htmlFor='neighborhood' >Neighborhood</label>
                    <Field
                      name='neighborhood'
                      placeholder='Neighborhood'
                      className='form-control' />
                    <ErrorMessage name='neighborhood' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='country' >Country</label>
                    <Field
                      name='country'
                      placeholder='country'
                      className='form-control' />
                    <ErrorMessage name='country' />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='state' >State</label>
                    <Field
                      name='state'
                      placeholder='state Title'
                      className='form-control' />
                    <ErrorMessage name='state' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='city' >City</label>
                    <Field
                      name='city'
                      placeholder='city'
                      className='form-control' />
                    <ErrorMessage name='city' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='zipCode' >Zip Code</label>
                    <Field name='zipCode' placeholder='Zip Code' className='form-control' />
                    <ErrorMessage name='zipCode' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='address' >Address</label>
                    <Field
                      name='address'
                      placeholder='Address'
                      className='form-control' />
                    <ErrorMessage name='address' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='propertyType' >Property type</label>
                    <Field
                      className='form-control'
                      component='select' name='propertyType'>
                      <option value="0" >Select </option>
                      <option value="Apartment">Apartment </option>
                      <option value="flat">Flat </option>
                      <option value="House">House </option>
                    </Field>
                    <ErrorMessage name='propertyType' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='propertyStatus' >Property Status</label>
                    <Field
                      className='form-control'
                      component='select' name='propertyStatus'>
                      <option value="0">Select </option>
                      <option value="rent">For rent </option>
                      <option value="sale">For sale </option>
                    </Field>
                    <ErrorMessage name='propertyStatus' />
                  </div>
                </div>
              </section>
              <section>
                <div className='col-md-6 col-sm-6'>
                  <h1>Property Details</h1>
                  <div className='form-group'>
                    <label htmlFor='area' >Area</label>
                    <Field name='area' placeholder='m2' className='form-control' />
                    <ErrorMessage name='area' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='rooms' >Rooms</label>
                    <Field name='rooms' placeholder='Number of rooms' className='form-control' />
                    <ErrorMessage name='rooms' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='bedrooms' >Bedrooms</label>
                    <Field
                      name='bedrooms'
                      placeholder='Number of bedrooms'
                      className='form-control' />
                    <ErrorMessage name='bedrooms' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='bathrooms' >Bathrooms</label>
                    <Field
                      name='bathrooms'
                      placeholder='Number of bathrooms'
                      className='form-control' />
                    <ErrorMessage name='bathrooms' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='garages' >Garages</label>
                    <Field
                      name='garages'
                      placeholder='Number of garages'
                      className='form-control' />
                    <ErrorMessage name='garages' />
                  </div>
                </div>
              </section>
              <div><h2>Ammenities</h2></div>
              <div className='col-md-6'>
                <Ammenities
                  ammenities={values.ammenities}
                  setFieldValue={setFieldValue} />
              </div>
              <div className='col-md-6'>
                <h1 className="text-center">Drag and Drop Pictures</h1>
                <Dropzone
                  className='form-control'
                  onChangeStatus={handleChangeStatus}
                  accept="image/*" />
              </div>
              <div className='offset-2 mt-3'>
                <button
                  className='btn btn-primary'
                  type='submit' disabled={isSubmitting}>
                  Create Property </button>
              </div>
            </Form>
          </div>
        </>);
      }}
    </Formik>
  </>)
}
const mapStateToProps = (store) => {
  return {
    error: store.user.error
  }
}
const mapDispatchToProps = { createProperty }

export default connect(mapStateToProps, mapDispatchToProps)(CreatePropertyForm)