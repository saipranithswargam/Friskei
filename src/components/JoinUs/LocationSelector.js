import React, { useState, useEffect } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Country, State, City } from 'country-state-city';

const LocationSelector = () => {
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState({});
    const [selectedState, setSelectedState] = useState({ label: '', value: '' });
    const [selectedCity, setselectedCity] = useState({ label: '', value: '' });

    useEffect(() => {
        // Fetch countries data
        const allCountries = Country.getAllCountries().map(country => ({
            label: country.name,
            value: country.isoCode,
        }));
        setCountries(allCountries);
    }, []);

    const handleCountryChange = (selectedCountry) => {
        setSelectedCountry(selectedCountry);
        console.log(selectedCountry);
        setSelectedState(''); // Reset state when country changes

        const countryStates = State.getStatesOfCountry(selectedCountry.value).map(state => ({
            label: state.name,
            value: state.isoCode,
        }));

        setStates(countryStates);

        setCities([]);
    };
    const handleStateChange = (selectedState) => {
        setSelectedState(selectedState);
        const stateCities = City.getCitiesOfState(selectedCountry.value, selectedState.value).map(city => ({
            label: city.name,
            value: city.name,
        }));
        setCities(stateCities);
    };

    return (
        <form>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="country-dropdown">
                    {selectedCountry.label || 'Select Country'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {countries.map(country => (
                        <Dropdown.Item key={country.value} onClick={() => handleCountryChange(country)}>
                            {country.label}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
                <Dropdown.Toggle variant="success" id="state-dropdown">
                    {selectedState.label || 'Select State'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {states.map(state => (
                        <Dropdown.Item key={state.value} onClick={() => handleStateChange(state)}>
                            {state.label}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
                <Dropdown.Toggle variant="success" id="city-dropdown">
                    {selectedCity.label || 'Select State'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {cities.map(city => (
                        <Dropdown.Item key={city.value} onClick={() => { setselectedCity(city) }}>
                            {city.label}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </form>
    );
};

export default LocationSelector;
