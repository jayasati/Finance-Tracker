import { SignIn } from '@clerk/nextjs'
import { de } from 'date-fns/locale'
import React from 'react'

export  const page = () => {
  return (
    <SignIn/>
  )
}

export default page
