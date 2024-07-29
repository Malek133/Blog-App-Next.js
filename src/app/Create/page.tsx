'use client'
import FormPost from "@/components/FormPost"
import { FormInputPost } from "@/types"
import { SubmitHandler } from "react-hook-form"


const page = () => {

  const HandlerCreate:SubmitHandler<FormInputPost> = (data) =>{
      console.log(data)
  }
  return (
    <>
    
    <FormPost submit={HandlerCreate} />
    </>
    
  )
}

export default page
