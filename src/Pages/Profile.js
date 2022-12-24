import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileForm from '../Components/Profile/ProfileForm'

const Profile = () => {
  const navigate = useNavigate()

  const userToken = JSON.parse(localStorage.getItem('app-user'))

  useEffect(() => {
    if (!userToken) {
      navigate('/')
    }
  })

  const [formData, setFormData] = React.useState({
    userId: userToken ? userToken.result._id : '',
    firstname: userToken ? userToken.result.firstname : '',
    lastname: userToken ? userToken.result.lastname : '',
    email: userToken ? userToken.result.email : '',
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
  return (
    <Container>
      <ProfileForm
        formData={formData}
        setFormData={setFormData}
        user={userToken}
      />
    </Container>
  )
}

export default Profile
