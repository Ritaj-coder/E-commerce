
import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle, CardContent
} from "@/components/ui/card"

export default function Loading() {

  return (
    
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {Array.from({ length: 10 }).map((_, index) => (
        <Card key={index} className="w-full">
          <CardHeader className="space-y-2">
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
          </CardHeader>

          <CardContent>
            <Skeleton className="aspect-video w-full rounded-md" />
          </CardContent>
        </Card>
      ))}
    </div>
  

  )
}
