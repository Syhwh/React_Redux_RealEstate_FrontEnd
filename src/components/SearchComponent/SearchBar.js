import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { propertySearch } from '../../redux/actions/propertyActions';
import { CountrySelectorComponent } from './countrySelectorComponent';
import { Form, Field, ErrorMessage, Formik } from 'formik';

import { SearchFilters } from './SearchFilters';
import './style.css';

function SearchBar({ propertySearch }) {
  const history = useHistory();
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    propertySearch(values);
    resetForm();
    setSubmitting(false);
    history.push('/search')
  }

  return (
    <Formik
      initialValues={{
        search: '',
        country: '',
        state: ''
      }}
      onSubmit={handleSubmit}>
      {({ isSubmitting, values, setFieldValue }) => {
        return (<>
          <div className="">
            <Form className="hero__form v2 filter listing-filter bg-cb">
              <div className="row">
                <div className=" col-xl-5 col-lg-6 col-sm-12">
                  <div className="input-search ">
                    <Field
                      type="text"
                      name="search"
                      placeholder="Enter Property, Location, Landmark ..."
                      className="ui-autocomplete-input"
                      autoComplete="off" />
                  </div>
                </div>
                <CountrySelectorComponent
                  setFieldValue={setFieldValue}
                  country={values.country}
                  state={values.state} />
                <div className="col-xl-3 col-lg-6 col-sm-12 pl-0">
                  <div className="submit_btn">
                    <button className="btn v3" type="submit" disabled={isSubmitting} >Search</button>
                  <div className="dropdown-filter"><span>Advanced Search </span>
                  </div>

                  </div>
                </div>
              </div>
              {/* <SearchFilters /> */}
            </Form>
          </div>
        </>)
      }}
    </Formik>
  )
}

const mapDispatchToProps = { propertySearch }

export default connect(null, mapDispatchToProps)(SearchBar)