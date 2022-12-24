import * as React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import moment from 'moment'

export default function Review({ formData, setFormData }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom sx={{ mb: 4 }}>
        Profile Summary
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" textAlign={'left'}>
            First Name
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" textAlign={'left'}>
            {formData ? formData.firstname : ''}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" textAlign={'left'}>
            Last Name
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" textAlign={'left'}>
            {formData ? formData.lastname : ''}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" textAlign={'left'}>
            E-Mail
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" textAlign={'left'}>
            {formData ? formData.email : ''}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" textAlign={'left'}>
            Date of Birth
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" textAlign={'left'}>
            {formData ? moment(formData.dob._d).format('MMMM Do YYYY') : ''}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" textAlign={'left'}>
            Gender
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" textAlign={'left'}>
            {formData ? formData.gender : ''}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" textAlign={'left'}>
            Mobile
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" textAlign={'left'}>
            {formData ? formData.mobile : ''}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" textAlign={'left'}>
            Address Line 1
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" textAlign={'left'}>
            {formData ? formData.addressLine1 : ''}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" textAlign={'left'}>
            Address Line 2
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" textAlign={'left'}>
            {formData ? formData.addressLine2 : ''}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" textAlign={'left'}>
            City
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" textAlign={'left'}>
            {formData ? formData.city : ''}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" textAlign={'left'}>
            State/Province/Region
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" textAlign={'left'}>
            {formData ? formData.state : ''}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" textAlign={'left'}>
            Zip/Postal Code
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" textAlign={'left'}>
            {formData ? formData.pincode : ''}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" textAlign={'left'}>
            Country
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1" textAlign={'left'}>
            {formData ? formData.country : ''}
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
