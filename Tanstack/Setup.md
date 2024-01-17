import {QueryClient,QueryClientProvider} from '@tanstack/react-query'


const queryClient = new QueryClient()
=====
 <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
      </AuthProvider>
</QueryClientProvider>



_____
_____
https://www.npmjs.com/package/react-query (npm i react-query)
https://tanstack.com/query/latest/docs/react/installation



