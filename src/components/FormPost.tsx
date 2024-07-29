'use client'

import { FormInputPost } from "@/types";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form"

interface IPostForm {
submit:SubmitHandler<FormInputPost>
}

const FormPost:FC<IPostForm> = ({submit}) => {

    const {register,handleSubmit,} = useForm<FormInputPost>();
   
  return (
   <form onSubmit={handleSubmit(submit)} className="flex flex-col items-center 
   justify-center gap-5 w-full">
    <h1 className="text-4xl font-semibold">Add New Post</h1>
    <input type="text" {...register("title", { required: true })}
    placeholder="Post Title..." 
    className="input input-bordered w-full max-w-lg" />



  <textarea className="textarea textarea-bordered w-full max-w-lg" 
  {...register("content", { required: true })}
    placeholder="Post Content..."></textarea>

<select className="select select-bordered w-full max-w-lg"
{...register("tag", { required: true })}
defaultValue={''}
>
  
  <option>TypeScript</option>
  <option>PHP</option>
  <option>Python</option>
  <option>Java</option>
</select>

<button type='submit' className=" btn btn-primary w-fit" >Create Post</button>

   </form>
  )
}

export default FormPost
