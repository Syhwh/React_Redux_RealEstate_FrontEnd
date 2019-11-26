import React from 'react';

export function SearchFilters() {
  return (
    <>
      <h2>Search Filters</h2>
      <div className="explore__form-checkbox-list full-filter filter-block">
        <div className="row">
          <div className="col-lg-4 col-md-6 py-1 pr-30">
            <select className=" nice-select hero__form-input  custom-select mb-20" >
              <option>Property Status</option>
              <option>Any</option>
              <option>For Rent</option>
              <option>For Sale</option>
            </select></div>
          <div className="col-lg-4 col-md-6 py-1 pr-30 pl-0 ">
            <select className="  nice-select hero__form-input  custom-select  mb-20">
              <option>Property Type</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Land</option>
            </select>
          </div>
          <div className="col-lg-4 col-md-6 py-1 pl-0">
            <select className="hero__form-input  custom-select  mb-20" >
              <option>Max rooms</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
            </select>
          </div>
          <div className="col-lg-4 col-md-6 py-1 pr-30 ">
            <select className="hero__form-input  custom-select  mb-20" >
              <option>Bed</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div className="col-lg-4 col-md-6 py-1 pr-30 pl-0">
            <select className="hero__form-input  custom-select  mb-20" >
              <option>Bath</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
            <div className="nice-select hero__form-input custom-select mb-20" tabindex="0">
              <span className="current">Bath</span>
              <ul className="list">
                <li data-value="Bath" className="option selected">Bath</li>
                <li data-value="1" className="option">1</li>
                <li data-value="2" className="option">2</li>
                <li data-value="3" className="option">3</li>
                <li data-value="4" className="option">4</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 py-1 pl-0">
            <select className="hero__form-input  custom-select  mb-20" >
              <option>Agents</option>
              <option>Bob Haris</option>
              <option>Ross buttler</option>
              <option>Andrew Saimons</option>
              <option>Steve Austin</option>
            </select>
            <div className="nice-select hero__form-input custom-select mb-20" tabindex="0">
              <span className="current">Agents</span>
              <ul className="list">
                <li data-value="Agents" className="option selected">Agents</li>
                <li data-value="Bob Haris" className="option">Bob Haris</li>
                <li data-value="Ross buttler" className="option">Ross buttler</li>
                <li data-value="Andrew Saimons" className="option">Andrew Saimons</li>
                <li data-value="Steve Austin" className="option">Steve Austin</li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 col-sm-6 py-1 pr-30 pl-0">
            <div className="filter-sub-area style1">
              <div className="filter-title mb-10">
                <p>Price : <span><input type="text" id="amount_two" /></span></p>
              </div>
              <div id="slider-range_two" className="price-range mb-30 ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                <div className="ui-slider-range ui-corner-all ui-widget-header" style={{ left: '0%', width: '56%' }}></div>
                <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{ left: '0%' }}></span>
                <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{ left: '56%' }}></span></div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 py-1  pl-0">
            <div className="filter-sub-area style1">
              <div className="filter-title  mb-10">
                <p>Area : <span><input type="text" id="amount_one" /></span></p>
              </div>
              <div id="slider-range_one" className="price-range mb-30 ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                <div className="ui-slider-range ui-corner-all ui-widget-header" style={{ left: '15%', width: ' 35.175%' }}></div>
                <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{ left: '15%' }}></span>
                <span tabindex="0" className="ui-slider-handle ui-corner-all ui-state-default" style={{ left: '50.175%%' }}></span></div>
            </div>
          </div>
          <div className="col-lg-6 col-md-8 col-sm-12 py-1 pr-30">
            <div className="filter-checkbox">
              <p>Sort By Features</p>
              <ul>
                <li>
                  <input id="check-a" type="checkbox" name="check" />
                  <label for="check-a">Air Condition</label>
                </li>
                <li>
                  <input id="check-b" type="checkbox" name="check" />
                  <label for="check-b">Swimming Pool</label>
                </li>
                <li>
                  <input id="check-c" type="checkbox" name="check" />
                  <label for="check-c">Laundry Room</label>
                </li>
                <li>
                  <input id="check-d" type="checkbox" name="check" />
                  <label for="check-d">Free Wifi</label>
                </li>
                <li>
                  <input id="check-e" type="checkbox" name="check" />
                  <label for="check-e">Window Covering</label>
                </li>
                <li>
                  <input id="check-f" type="checkbox" name="check" />
                  <label for="check-f">Central Heating </label>
                </li>
                <li>
                  <input id="check-g" type="checkbox" name="check" />
                  <label for="check-g">24 hour security</label>
                </li>
                <li>
                  <input id="check-h" type="checkbox" name="check" />
                  <label for="check-h">Lawn</label>
                </li>
                <li>
                  <input id="check-i" type="checkbox" name="check" />
                  <label for="check-i">Gym</label>
                </li>
              </ul>
            </div>
          </div>
    
        </div>
      </div>
    </>)
}