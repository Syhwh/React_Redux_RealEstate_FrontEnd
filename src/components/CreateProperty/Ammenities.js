import React from 'react';

import { Field, FieldArray } from 'formik';

export function Ammenities(props) {
  return (
    <FieldArray      
      name="ammenities"
      render={() => (
        <ul className='submit-features'>
          {props.ammenities.map((data, index) => (
            <li key={index}>
              <Field
                name={`ammenities[${index}]`}
                type='checkbox'
                checked={data.value}
                onChange={(e) => {
                  const cheked = e.target.checked
                  props.setFieldValue(`ammenities[${index}]`, { label: data.label, value: cheked })
                }}
              />
              <label htmlFor={`ammenities[${index}]`}> {data.label} </label>
            </li>
          ))}
        </ul>
      )}
    />
  )
}


