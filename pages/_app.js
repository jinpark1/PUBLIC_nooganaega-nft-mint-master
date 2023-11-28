import '../styles/globals.css'
import { Footer } from '../components/Footer'
import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
				<Footer />
			</QueryClientProvider>
		</>
	)
}

export default MyApp
