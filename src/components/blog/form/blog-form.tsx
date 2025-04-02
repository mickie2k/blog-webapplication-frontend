import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useAuth } from '@/context/auth-context';
import { Role } from '@/enum/role.enum';
import { BlogFormValue } from '@/types/blog';
import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
interface BlogFormProps {
    handleSubmit: (value : BlogFormValue) => void;
    value? : BlogFormValue
}

export default function BlogForm(prop :  Readonly<BlogFormProps>) {   
    const { hasRole } = useAuth()
    const { handleSubmit, value } = prop;
    const formik = useFormik({
        initialValues: {
            title: value?.title ?? '',
            content: value?.content ?? '',
            isPremium: value?.isPremium ?? false
        },
        validationSchema: Yup.object({
            title: Yup.string().required('Title is required').max(100, 'Title must be 100 characters or less'),
            content: Yup.string().required('Content is required'),
        }),
        onSubmit: (values : BlogFormValue) => {
            handleSubmit(values)
        },
        enableReinitialize : true
    })

  return (
    <form onSubmit={formik.handleSubmit}>
    <div className='max-w-5xl m-auto gap-6 flex-col flex'>

        <section>
            <textarea maxLength={100} onChange={formik.handleChange} value={formik.values.title} name="title" className='text-6xl leading-tight font-bold resize-none bg-transparent border-none field-sizing-content focus:ring-0 w-full outline-none overflow-clip' placeholder='Title' />
        </section>
        <section className=''>
            <div>
                <textarea onChange={formik.handleChange} value={formik.values.content} name="content" className='text-lg resize-none bg-transparent border-none  focus:ring-0 w-full field-sizing-content min-h-16 py-2 outline-none' placeholder='Tell your story...' />

            </div>
        </section>

        </div>
        <div className='fixed bottom-4 right-4 flex gap-4'>
            {hasRole(Role.PREMIUM) && <div className="flex items-center space-x-2">
                    <Switch name='isPremium' id='isPremium' checked={formik.values.isPremium} onCheckedChange={(checked) => {
                    formik.setFieldValue('isPremium', checked); // This updates Formik value
                  }}/>
                    <span className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70' >Premium-Only</span>
                </div>}
                
               
                <Button type="submit" disabled={!(formik.isValid && formik.dirty)} size="lg">Publish</Button>
            </div>
    </form>
  )
}
