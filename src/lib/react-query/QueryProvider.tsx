import { QueryClientProvider,QueryClient } from '@tanstack/react-query'
import React from 'react'

const queryClient=new QueryClient();

export const QueryProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </div>
  )
}

