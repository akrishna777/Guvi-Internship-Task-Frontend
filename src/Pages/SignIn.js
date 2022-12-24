import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import LoadingButton from '@mui/lab/LoadingButton'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import { Link } from 'react-router-dom'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { Formik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { signInRoute } from '../Utils/APIRoutes'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { toastOptions } from '../Utils/toastOptions'
import { useNavigate } from 'react-router-dom'
import Copyright from '../Components/Dashboard/Copyright'

const theme = createTheme()

export default function SignIn() {
  const navigate = useNavigate()
  const [loading, setLoading] = React.useState(false)
  const initialValues = {
    email: '',
    password: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  })

  const handleSubmit = async (values) => {
    setLoading(true)
    try {
      const logindata = await axios.post(signInRoute, values)
      if (logindata) {
        localStorage.setItem('app-user', JSON.stringify(logindata.data))
        navigate('/user')
      }
    } catch (error) {
      toast.error(error.response.data.message, toastOptions)
    }
    setLoading(false)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light'
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
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
                    sx={{ mt: 1 }}
                  >
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
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
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="off"
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
                    <LoadingButton
                      type="submit"
                      loading={loading}
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Sign In
                    </LoadingButton>
                    <Grid
                      container
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Grid item>
                        <Link to="/signup" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                    <Copyright sx={{ mt: 5 }} />
                  </Box>
                )}
              </Formik>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
      <ToastContainer />
    </>
  )
}
