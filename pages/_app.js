// import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Header from '../components/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="container mx-auto px-4">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
