'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className="flex justify-center items-center text-8xl font-bold bg-lime-400 mt-0 h-screen w-full">
      <h2>Something went wrong!</h2>
     
    </div>
  )
}