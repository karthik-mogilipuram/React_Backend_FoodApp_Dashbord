import React, {useState, useEffect, use} from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import AddProduct from '../components/forms/AddProduct'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import Welcome from '../components/Welcome'
import AllProducts from '../components/AllProducts'


const LandingPage = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showFirm, setShowFirm] = useState(false);
    const [showProduct, setShowProduct] = useState(false);
    const [showWelcome, setShowWelcome] = useState(false);
    const [showAllProducts, setShowAllProducts] = useState(false);
    const [showLogOut, setShowLogout] = useState(false);
    const [showFirmTitle, setShowFirmTitle] = useState(true)
     

    useEffect(()=>{
      const loginToken = localStorage.getItem('loginToken');
      if(loginToken){
        setShowLogout(true)
      }
    }, [])

    useEffect(()=>{
      const firmName = localStorage.getItem('firmName');
      if(firmName){
        setShowFirmTitle(false)
      }
    }, [])

    const logOutHandler =() =>{
      confirm("Are you sure to Log-out");
      localStorage.removeItem("loginToken");
      localStorage.removeItem("firmId");
      localStorage.removeItem('firmName');
      setShowLogout(false);
      setShowFirmTitle(true);
    }


    const showLoginHandler = () => {
        setShowLogin(true);
        setShowRegister(false);
        setShowFirm(false);
        setShowProduct(false);
        setShowWelcome(false);
        setShowAllProducts(false)
    }

    const showRegisterHandler = () => {
        setShowRegister(true);
        setShowLogin(false);
        setShowFirm(false);
        setShowProduct(false);
        setShowWelcome(false);
        setShowAllProducts(false)
    }

    const showFirmHandler = () => { 
      if(showLogOut){
        setShowFirm(true);
        setShowLogin(false);
        setShowRegister(false);
        setShowProduct(false);
        setShowWelcome(false);
        setShowAllProducts(false)
    }else{
      alert("Please Login");
      setShowLogin(true);
    }
  }

    const showProductHandler = () => { 
      if(showLogOut){
        setShowProduct(true);
        setShowLogin(false);
        setShowRegister(false);
        setShowFirm(false);
        setShowWelcome(false);
        setShowAllProducts(false)
    }else{
      alert("Please Login");
      setShowLogin(true);
    }
  }
    
    const showWelcomeHandler = () => {
        setShowRegister(false);
        setShowLogin(false);
        setShowFirm(false);
        setShowProduct(false);
        setShowWelcome(true);
        setShowAllProducts(false)
    }

    const showAllProductsHandler = () =>{ 
      if(showLogOut){
      setShowRegister(false);
      setShowLogin(false);
      setShowFirm(false);
      setShowProduct(false);
      setShowWelcome(false);
      setShowAllProducts(true);
    }else{
      alert("Please Login");
      setShowLogin(true);
    }
  }
  return (
    <>
        <section className="landingSection">
            <NavBar showLoginHandler ={showLoginHandler} showRegisterHandler={showRegisterHandler}
            showLogOut = {showLogOut}
            logOutHandler = {logOutHandler}
            />
            <div className="collectionSection">
                <SideBar showFirmHandler = {showFirmHandler} showProductHandler= {showProductHandler} 
                showAllProductsHandler ={showAllProductsHandler} showFirmTitle={showFirmTitle}
                />
                {showFirm && showLogOut && <AddFirm />}
                {showProduct && showLogOut && <AddProduct />}
                {showAllProducts && showLogOut && <AllProducts />}
                {showLogin && <Login showWelcomeHandler ={showWelcomeHandler}/>}
                {showRegister && <Register showLoginHandler = {showLoginHandler} />}
                {showWelcome && <Welcome /> }
            </div>
          
        </section>
    </>
  )
}

export default LandingPage