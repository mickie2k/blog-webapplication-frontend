"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'; 

export default function CommentForm() {
    const formik = useFormik({
        initialValues:{
            comment: ''
        },validationSchema: Yup.object().shape({
            comment: Yup.string().required('Comment is required').min(1)

        })
        ,onSubmit: (value)=>{
            // Handle form submission here
            console.log(value)
        }
    })
    return (
        <div className="grid w-full gap-2">
            <h6 className='text-sm '>Mickie2k</h6>
            <form onSubmit={formik.handleSubmit} className='group'>
                <div className='flex-col border-input border group-focus-visible:border-ring  group-focus-visible:ring-ring/50  aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 
                            flex w-full rounded-md bg-transparent px-3 py-2  shadow-xs transition-[color,box-shadow] outline-none group-focus-within:ring-[1px] disabled:cursor-not-allowed disabled:opacity-50 '>
                    <textarea  onChange={formik.handleChange} name="comment" id="comment" value={formik.values.comment} className='resize-none placeholder:text-muted-foreground  flex field-sizing-content min-h-16 w-full px-2 py-2 text-base transition-[color,box-shadow] outline-none md:text-sm' placeholder="What are your thoughts?" />
                    <div className='flex justify-end mt-1'>
                        <Button className='text-sm px-6' disabled={!formik.dirty && !formik.isValid} size="sm">Post</Button>
                    </div>
                </div>
            </form>

        </div>
    )
}
