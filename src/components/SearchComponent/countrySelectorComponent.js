
import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

export class CountrySelectorComponent extends Component {

  render() {

    return (
      <>
        <div className='col-xl-2 col-lg-6 col-sm-12 pl-0'>
          <CountryDropdown
            name='country'
            className=' nice-select hero__form-input custom-select'
            tabIndex="0"
            defaultOptionLabel="Select a Country"
            value={this.props.country}
            onChange={(val) => this.props.setFieldValue('country', val)}
          />
        </div>
        <div className='col-xl-2 col-lg-6 col-sm-12 pl-0'>
          <RegionDropdown
            name='state'
            className="nice-select hero__form-input custom-select "
            blankOptionLabel="No country selected"
            defaultOptionLabel="Select a region"
            country={this.props.country}
            value={this.props.state}
            onChange={(val) => this.props.setFieldValue('state', val)}
          />
        </div>

      </>
    );
  }
}