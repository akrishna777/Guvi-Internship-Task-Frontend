import * as React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

import { Country, State, City } from 'country-state-city'

export default function AddressForm({ formData, setFormData }) {
  const [countriesList, setCountriesList] = React.useState('')
  const [stateList, setStateList] = React.useState('')
  const [cityList, setCityList] = React.useState('')

  React.useEffect(() => {
    const countries = Country.getAllCountries()
    setCountriesList(countries)
  }, [])

  React.useEffect(() => {
    const states = State.getStatesOfCountry(formData.country)
    setStateList(states)
  }, [formData])

  React.useEffect(() => {
    const cities = City.getCitiesOfState(formData.country, formData.state)
    setCityList(cities)
  }, [formData])

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={formData ? formData.addressLine1 : ''}
            onChange={(e) =>
              setFormData({ ...formData, addressLine1: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            value={formData ? formData.addressLine2 : ''}
            onChange={(e) =>
              setFormData({ ...formData, addressLine2: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Country</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              defaultValue={formData ? formData.country : ''}
              value={formData ? formData.country : ''}
              label="Country"
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
              variant="standard"
            >
              {countriesList
                ? countriesList.map((item, index) => (
                    <MenuItem key={index} value={item.isoCode}>
                      {item.name}
                    </MenuItem>
                  ))
                : ''}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              State/Province/Region
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData ? formData.state : ''}
              label="State/Province/Region"
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
              variant="standard"
            >
              {stateList
                ? stateList.map((item, index) => (
                    <MenuItem key={index} value={item.isoCode}>
                      {item.name}
                    </MenuItem>
                  ))
                : ''}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData ? formData.city : ''}
              label="City"
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
              variant="standard"
            >
              {cityList
                ? cityList.map((item, index) => (
                    <MenuItem key={index} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))
                : ''}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            value={formData ? formData.pincode : ''}
            onChange={(e) =>
              setFormData({ ...formData, pincode: e.target.value })
            }
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
