import React from 'react'

interface BlogFormProps {
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function BlogForm(prop : BlogFormProps) {
    const { handleSubmit } = prop;
  return (
    <form onSubmit={handleSubmit}>
    <div className='max-w-5xl m-auto gap-6 flex-col flex'>

        <section>
            <textarea name="title" className='text-6xl leading-tight font-bold resize-none bg-transparent border-none field-sizing-content focus:ring-0 w-full outline-none overflow-clip' placeholder='Title' />
        </section>
        <section className=''>
            <div>
                <textarea name="content" className='resize-none bg-transparent border-none text-base md:text-base focus:ring-0 w-full field-sizing-content min-h-16 py-2 outline-none' placeholder='Tell your story...' />

            </div>
        </section>

        </div>
    </form>
  )
}
