import logo from '../assets/logo_for_app.png';




function Header({user}){
    return(
        <header className="text-gray-600 body-font flex justify-center align-center">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
   <img src={logo} alt="Flyn Logo" className="w-20 h-auto" />
      <span className="ml-3 text-xl">Flyn Finance Web App</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900"></a>
      <a className="mr-5 hover:text-gray-900"></a>
      <a className="mr-5 hover:text-gray-900"></a>
      <a className="mr-5 hover:text-gray-900"></a>
    </nav>
    <button className="inline-flex items-center bg-blue-600 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-white font-bold mt-4 md:mt-0">
     {user? "Login" : "Sign Up"}
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</header>

    )
}

export default Header