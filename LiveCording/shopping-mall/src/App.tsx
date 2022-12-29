import { QueryClientProvider } from 'react-query'
import { getClient } from './queryClient'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes';
import { ReactQueryDevtools } from 'react-query/devtools'
import Gnb from './components/products/gnb';
import { RecoilRoot } from 'recoil';

const App = () => {
  const elem = useRoutes(routes)
  const queryClient = getClient()

  return (
    <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <Gnb />
      {elem}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </RecoilRoot>
  )
}
export default App;