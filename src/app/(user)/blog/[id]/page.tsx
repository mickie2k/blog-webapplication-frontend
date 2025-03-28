import React from 'react'
import { Separator } from "@/components/ui/separator"
import CommentForm from '@/components/blog/comment/comment-form'
import CommentCard from '@/components/blog/comment/comment-card'
export default function BlogPage() {
  return (
    <div className='mt-12'>
        <div className='max-w-5xl m-auto gap-6 flex-col flex'>
            <section>
                <h1 className='text-6xl font-bold leading-tight'>Hello This Blog <br />
                    กั้
                </h1>
            </section>
            <section>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, earum, magnam architecto quia reiciendis officia molestiae numquam, adipisci nam dolorum eaque a pariatur sunt. Cupiditate libero praesentium voluptates ea minima, quia id! Fugit ea sit nulla alias provident, iste quos modi aspernatur est fugiat enim reprehenderit animi quae vitae expedita veniam excepturi, saepe, laborum repellendus et. Unde explicabo, maiores dolorem a saepe qui, officiis in quo consequatur, quae inventore porro at error sapiente harum perferendis vitae provident? Deleniti maxime odio illo id ullam qui exercitationem magni ipsam maiores dolore minus dignissimos officia molestias optio aliquam, numquam mollitia placeat. Possimus, ullam.
                    </p>
                </div>
            </section>
            <Separator />
            <section className='flex flex-col gap-4'>
                <CommentForm/>
            
                <span className='text-sm font-semibold '>6 comments</span>
                <div className='flex flex-col gap-6'>
                   <CommentCard/>
                   
                </div>
            </section>
        </div>
    </div>
  )
}
