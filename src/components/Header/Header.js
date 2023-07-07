import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import logo from '../../images/webstix_logo.png'
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { FaBars, FaTimes } from "react-icons/fa"
import "../Header/Navbar.css"

const Header = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const [top, setTop] = useState(true)

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener("scroll", scrollHandler)
    return () => window.removeEventListener("scroll", scrollHandler)
  }, [top])

  const closeMenu = () => setClick(false)
  const { wpMenu } = useMenuQuery()
  const menu = wpMenu.menuItems.nodes
  return (
     <div id="clsheaderborder" className= {`header ${!top && `bg-white shadow-sm scroll-smooth`}`}  >
    <div className="header relative ">
      <nav className="navbar flex items-center align-middle">
        <div className="navlogo">
    <a href="/" className="logo">
          <img src={logo}  height="120px" width="140px"   alt="logo" />
        </a> 
        
        </div>
        <div className="hamburger absolute right-5" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#333" }} />
          ) : (
            <FaBars size={30} style={{ color: "#333" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {menu.map(mainItem =>
            !mainItem.parentId ? (
              <li key={mainItem.id} className="md:ml-8 text-base md:my-5 my-5">
                <Link
                  to={mainItem.url}
                  onClick={closeMenu}
                  activeClassName="nav-active"
                  className="text-gray-800 hover:text-gray-400 duration-50"
                >
                  {mainItem.label}
                  {mainItem.childItems.nodes.length !== 0 && <div>&#8964;</div>}
                </Link>
                {mainItem.childItems.nodes.length !== 0 ? (
                  <ul>
                    {mainItem.childItems.nodes.map(childItem => (
                      <li key={childItem.id}>
                        <Link
                          to={childItem.url}
                          activeClassName="nav-active"
                          onClick={closeMenu}
                        >
                          {childItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ) : null
          )}
        </ul>


   {/*       <div class="xl:mt-7  w-full sm:inline-flex clsherobtn  pb-[30px] pt-[10px]">
                  <Link to="/careers">
                    <button
                      class="inline-flex justify-center items-center  bg-[#a31e22] mt-2 hover:bg-[#000] text-[#fff] font-semibold hover:text-[#fff] py-2 px-6 border hover:border-[#000]"
                      href="#"
                    >
                      Join Us
                    </button>
                  </Link>
                </div>  */}
        <div>
<Link to="/careers"><button class="clsteambtn justify-center items-center  bg-[#a31e22] mt-0 hover:bg-[#333] text-[#fff] font-semibold hover:text-[#fff] py-2 px-6 border hover:border-[#333] rounded-md "href="#">Join Our Team</button></Link>
</div>
      </nav>

    </div>
    </div>
  )
}

export default Header
