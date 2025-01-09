import React from 'react'
import SuccessPopUp from '../components/successPopUp/successPopUp'

const isSuccessPage = () => {
  return (
    <section className="isSuccess">
        <SuccessPopUp />   
    </section>
  )
}

export default isSuccessPage