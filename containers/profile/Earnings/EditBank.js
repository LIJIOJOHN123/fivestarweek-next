import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editBankAccount } from '../../../store/actions/user/payment'
import FormChannel from './AddBank'

const EditBank = () => {
 const dispatch  = useDispatch()
 const payment = useSelector(state=>state.payment)
  return (
    <Fragment>
      <FormChannel
        open={open}
        buttonName='Edit'
        title='Edit Bank'
        datas={payment.bank}
        ouSubmit={async (formData) => {
          setOpen(false)
         dispatch(editBankAccount(formData))
        }}
      />
    </Fragment>
  )
}

export default EditBank