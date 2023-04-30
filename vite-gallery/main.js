import './style.css'
import { printTemplate as Header } from "./components/Header/Header"
import { printTemplate as Footer } from "./components/Footer/Footer"
import { printTemplate as Home } from './pages/Home/Home'
import { printTemplate as Gallery } from './pages/Gallery/Gallery'
import { printTemplate as About } from './pages/About/About'

Header()
Footer()
Home()

document.querySelector("#homelink").addEventListener("click", () => {
  Home()
})

document.querySelector("#gallerylink").addEventListener("click", () =>{
  Gallery()
})

document.querySelector("#aboutlink").addEventListener("click", () => {
  About()
})