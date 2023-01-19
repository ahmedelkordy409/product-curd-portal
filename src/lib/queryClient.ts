import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();



// Path: src/lib/ReactQueryDevtools.tsx
// Compare this snippet from src/components/ReactQueryDevtools.tsx:
// import { QueryClient, QueryClientProvider } from 'react-query';

// const queryClient = new QueryClient();

// export const ReactQueryDevtools = () => {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <ReactQueryDevtools />
//     </QueryClientProvider>
//   );
// };

export default queryClient;


