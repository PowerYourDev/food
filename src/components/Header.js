import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Title = () => (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
      />
    </a>
  );

  const Header = () => {

    const items=useSelector((store)=>(store.cart.items))
  
    return (
      <div className="header">
        <Title />
  
        <div className="nav-items">
          <ul>
          <Link to="/home">   <li>Home</li></Link>
            <Link to="/about">    <li>About</li></Link>
           
            <li>Contact</li>
            <Link to="/cart"><li>Cart {items.length}</li></Link>
            {console.log(items)}
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;
  