import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { PiTrashSimpleLight } from 'react-icons/pi'
import { Button } from './button'


interface DeleteButtonProps {
    handleOnClick : ()=> void
}

export default function DeleteButton(props: Readonly<DeleteButtonProps>) {
  const { handleOnClick } = props;
  return (
    <AlertDialog>
        <AlertDialogTrigger asChild><Button variant="ghost" size="icon"><PiTrashSimpleLight /></Button></AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
                This action cannot be undone. This will permanently delete
                and remove data from our servers.
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel>No, Keep It.</AlertDialogCancel>
            <AlertDialogAction onClick={handleOnClick} className='bg-destructive text-accent-foreground hover:bg-destructive/70'>Yes, Delete blog!</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}
