import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import LoadingButton from '@mui/lab/LoadingButton'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { signUpRoute } from '../Utils/APIRoutes'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { toastOptions } from '../Utils/toastOptions'
import { useNavigate } from 'react-router-dom'
import Copyright from '../Components/Dashboard/Copyright'

const theme = createTheme()

export default function SignUp() {
  const [loading, setLoading] = React.useState(false)
  const navigate = useNavigate()
  const initialValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const validationSchema = Yup.object({
    firstname: Yup.string().required('Required'),
    lastname: Yup.string().required('Required'),
    email: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.number().required('Required'),
  })

  const handleSubmit = async (values) => {
    await setLoading(true)
    try {
      const result = await axios.post(signUpRoute, values)
      if (result) {
        toast.success(
          <>
            <div
              sx={{
                margin: 0,
                padding: 0,
              }}
            >
              User Created Successfully.
              <br /> Wait till we redirect
              <br />
              you to login page.
            </div>
          </>,
          toastOptions,
        )
        setTimeout(() => navigate('/'), 3000)
      }
    } catch (error) {
      toast.error(error.response.data.message, toastOptions)
    }
    await setLoading(false)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Box
                  component="form"
                  noValidate
                  onSubmit={formik.handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        name="firstname"
                        label="First Name"
                        type="text"
                        id="firstName"
                        autoComplete="firstname"
                        helperText={
                          formik.touched.firstname && formik.errors.firstname
                            ? 'Required'
                            : ''
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        error={
                          formik.touched.firstname && formik.errors.firstname
                            ? true
                            : false
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        name="lastname"
                        label="Last Name"
                        type="text"
                        id="lastName"
                        autoComplete="lastname"
                        helperText={
                          formik.touched.lastname && formik.errors.lastname
                            ? 'Required'
                            : ''
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        error={
                          formik.touched.lastname && formik.errors.lastname
                            ? true
                            : false
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="email"
                        label="Email Address"
                        type="email"
                        id="email"
                        autoComplete="email"
                        helperText={
                          formik.touched.email && formik.errors.email
                            ? 'Required'
                            : ''
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        error={
                          formik.touched.email && formik.errors.email
                            ? true
                            : false
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        helperText={
                          formik.touched.password && formik.errors.password
                            ? 'Required'
                            : ''
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        error={
                          formik.touched.password && formik.errors.password
                            ? true
                            : false
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        id="confirmPassword"
                        autoComplete="new-password"
                        helperText={
                          formik.touched.confirmPassword &&
                          formik.errors.confirmPassword
                            ? 'Required'
                            : ''
                        }
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        error={
                          formik.touched.confirmPassword &&
                          formik.errors.confirmPassword
                            ? true
                            : false
                        }
                      />
                    </Grid>
                  </Grid>
                  <LoadingButton
                    type="submit"
                    loading={loading}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign Up
                  </LoadingButton>
                  <Grid container justifyContent="flex-end">
                    <Grid item>
                      <Link to="/" variant="body2">
                        Already have an account? Sign in
                      </Link>
                    </Grid>
                  </Grid>
                </Box>
              )}
            </Formik>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
      <ToastContainer />
    </>
  )
}
