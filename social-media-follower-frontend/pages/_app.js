import '../styles/index.css'
import NavBar from "./components/navBar.js"
import Footer from "./components/footer.js"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
