import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import AddressForm from './AddressForm'
import PersonalDetails from './PersonalDetails'
import Review from './Review'
import Copyright from '../Dashboard/Copyright'
import { updateUserRoute } from '../../Utils/APIRoutes'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { toastOptions } from '../../Utils/toastOptions'
import { Alert } from '@mui/material'

const steps = ['Personal Details', 'Address', 'Review your Profile']

function getStepContent(step, formData, setFormData) {
  switch (step) {
    case 0:
      return <PersonalDetails formData={formData} setFormData={setFormData} />
    case 1:
      return <AddressForm formData={formData} setFormData={setFormData} />
    case 2:
      return <Review formData={formData} setFormData={setFormData} />
    default:
      throw new Error('Unknown step')
  }
}

const theme = createTheme()

export default function ProfileForm({ formData, setFormData, user }) {
  const [activeStep, setActiveStep] = React.useState(0)

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
    setFormData({
      userId: user.result._id,
      firstname: user.result.firstname,
      lastname: user.result.lastname,
      email: user.result.email,
      dob: new Date(),
      gender: '',
      mobile: '',
      occupation: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      pincode: '',
      country: '',
    })
  }

  const handleSave = async (formData) => {
    try {
      const userData = await axios.post(updateUserRoute, formData)
      toast.success(userData.data.message, toastOptions)
    } catch (error) {
      toast.error(error.response.data.message, toastOptions)
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h1" variant="h4" align="center">
              Profile
            </Typography>
            <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your time.
                </Typography>
                <Typography variant="subtitle1">
                  Your details have been saved.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep, formData, setFormData)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  {activeStep === steps.length - 1 ? (
                    <Button
                      variant="contained"
                      onClick={() => handleSave(formData)}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Save Details
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 3, ml: 1 }}
                    >
                      Next
                    </Button>
                  )}
                </Box>
                <Alert severity="error" sx={{ mt: 1, mb: 0 }}>
                  The filled data will be reset on clicking "BACK" button.
                </Alert>
              </React.Fragment>
            )}
          </Paper>
          <Copyright />
        </Container>
      </ThemeProvider>
      <ToastContainer />
    </>
  )
}
