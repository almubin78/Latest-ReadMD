import {QueryClient,QueryClientProvider} from '@tanstack/react-query'


const queryClient = new QueryClient()
=====
 <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
      </AuthProvider>
</QueryClientProvider>