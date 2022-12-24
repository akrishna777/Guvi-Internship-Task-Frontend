import * as React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import MuiPhoneNumber from 'material-ui-phone-number'

export default function PersonalDetails({ formData, setFormData }) {
  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <MobileDatePicker
              label="DOB"
              inputFormat="DD/MM/YYYY"
              value={formData.dob}
              onChange={(e) => setFormData({ ...formData, dob: e })}
              renderInput={(params) => (
                <TextField {...params} fullWidth variant="standard" />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData.gender}
                label="Gender"
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
                variant="standard"
              >
                <MenuItem value={'Male'}>Male</MenuItem>
                <MenuItem value={'Female'}>Female</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <MuiPhoneNumber
              defaultCountry={'in'}
              value={formData ? formData.mobile : ''}
              onChange={(e) => setFormData({ ...formData, mobile: e })}
              fullWidth
              label="Mobile"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Occupation</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={formData ? formData.occupation : ''}
                label="Occupation"
                onChange={(e) =>
                  setFormData({ ...formData, occupation: e.target.value })
                }
                variant="standard"
              >
                <MenuItem value={'Student'}>Student</MenuItem>
                <MenuItem value={'Employee'}>Employee</MenuItem>
                <MenuItem value={'Business Owner'}>Business Owner</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </LocalizationProvider>
    </React.Fragment>
  )
}
