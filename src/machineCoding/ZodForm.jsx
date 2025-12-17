import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const ZodForm = () => {

  const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm()
  return (
    <div>
      <h2>Zod Form</h2>
      <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
        <input type="text" {...register("example")} />
        <input type="text" {...register("password")} />
        <button type="submit" disabled={isSubmitting}>Submit</button>
      </form>
    </div>
  )
}

export default ZodForm
