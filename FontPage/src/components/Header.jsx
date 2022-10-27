import logoimage from '../../public/logo-page.png';

function Header(props){
    return(
        <div className='header'>
      <div className='logo-content'>
        <h2>{props.title}</h2>
        <img class='logo' src="../../public/logo-page.png" alt="logo" />
      </div>
      <div className='menu-content'>
        <ul>
          <li><a href="#">WHAT WE DO</a></li>
          <li><a href="#">BLOG</a></li>
          <li><a href="#">PODCAST</a></li>
          <li><a href="#">CAREERS</a></li>
          <li>
            <button>WORK WITH US</button>
          </li>
        </ul>
      </div>
    </div>
    );
}

export default Header;