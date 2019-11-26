
import React, { Component } from 'react';

// note that you can also export the source data via CountryRegionData. It's in a deliberately concise format to 
// keep file size down
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


export class CountrySelectorComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <>
        {/* <div className=' d-flex justify-content-between'> */}
        <div className='col-xl-2 col-lg-6 col-sm-12 pl-0'>
          <CountryDropdown
            name='country'
            className=' nice-select hero__form-input custom-select'
            tabIndex="0"
            defaultOptionLabel="Select a Country"
            value={this.props.country}
            onChange={(val) => this.props.setFieldValue('country', val)}
          // onChange={(val) => this.selectCountry(val)} 
          />
        </div>
        <div className='col-xl-2 col-lg-6 col-sm-12 pl-0'>
          <RegionDropdown
            name='state'
            className="nice-select hero__form-input custom-select"
            blankOptionLabel="No country selected"
            defaultOptionLabel="Select a region"
            country={this.props.country}
            value={this.props.state}
            onChange={(val) => this.props.setFieldValue('region', val)}
          // onChange={(val) => this.selectRegion(val)} 
          />
        </div>
        {/* </div> */}
      </>
    );
  }
}