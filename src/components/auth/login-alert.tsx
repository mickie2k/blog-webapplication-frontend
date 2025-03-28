import React from 'react'
import { Terminal } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
export default function LoginAlert() {
  return (
    <Alert>
    <Terminal className="h-4 w-4" />
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>
        You can add components and dependencies to your app using the cli.
    </AlertDescription>
    </Alert>
  )
}
