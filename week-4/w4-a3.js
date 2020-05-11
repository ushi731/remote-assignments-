class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Row />
        <Call />
        <Footer />
      </div>
    );
  }
}

{/*<!-- Header -->*/}
class Header extends React.Component {
  state = {
    display:""
  };

  showMobileMenu = () => {
    this.setState({ display:"block" });
  };

  hideMobileMenu = () => {
    this.setState({ display:"none" });
  };

  render() {
    return(
<div>
    <div>
    <a href="w4-a3.html" className="logo">allie wu</a>

     {/*<!-- Nav -->*/}
     <ul className="main-nav" style={{display: this.state.display}}>
                 <li><a href="#">about</a></li>
                 <li><a href="#">work</a></li>
                 <li><a href="#">blog</a></li>
                 <li><a href="#">contact</a></li>
               </ul>
    </div>

    <div className = "menuImg" onClick={this.showMobileMenu}>
                <img src="iconfinder_line-list_1954545-1.png" width="30px" height="30px" />
              </div>

              <button
                className="closemenu"
                onClick={ ()=> props.hideMobileMenu }
                style={{display: this.state.display}}
              >
                x
              </button>
</div>
         );
      }
    }

{/*

     <MainNav
        navlist={this.state.navlist}
        showMobileMenu={this.showMobileMenu}
      />
      <MobileMenu
        navlist={this.state.navlist}
        mobileMenuDisplayed={this.state.mobileMenuDisplayed}
        hideMobileMenu={this.hideMobileMenu}
      />

);
}
};

const MainNav = (props) => (
  <nav className="main-nav">
  <span className="menuImg" onClick={ () =>props.showMobileMenu()}>
<img src="iconfinder_line-list_1954545-1.png" width="30px" height="30px" />
</span>
    <ul className="nav-list">
      {props.navlist.map((navItem) => (
        <li>{navItem}</li>
      ))}
    </ul>
  </nav>
);

const MobileMenu = (props) => (
  <nav
    className={`mobile_menu mobile-menu_${
      props.mobileMenuDisplayed ? "shown" : "hidden"
    }`}
  >
    <button
      className="closemenu"
      onClick={ ()=> props.hideMobileMenu }
    >
      x
    </button>
    <ul className="mobile-menu-list">
      {props.navList.map((navItem) => (
        <li>{navItem}</li>
      ))}
    </ul>
  </nav>
);
*/}

{/*<!-- Banner -->*/}
class Banner extends React.Component {
  state={
   welcomeMessage: "hey world"
  };

changeWelcomeMessage =() =>{
  this.setState({ welcomeMessage: "Have a Good Time!" });
};

render() {
    return(
	<div className="banner">
	<h1 className="welcomeMessage"
      onClick={ ()=>this.changeWelcomeMessage() }>
      {this.state.welcomeMessage}   {/*!!!!!!!!!!!!!!!!!!!!*/}
      </h1>
</div>
      );
}};


		{/*<!-- content-->
      <section className="main-content"></section> */}
class Row extends React.Component {
  render() {
      return(
        <div>
        <h2 className="main-content-title">to start somewhere</h2>
        </div>

        <div className="row">
        <div className="content-box">content1</div>
        <div className="content-box">content2</div>
        <div className="content-box">content3</div>
        <div className="content-box">content4</div>
        </div>
      )
    }
  }


  class Call extends React.Component {
  state={
         display:"none",
  };

 showMoreBox=() =>{
  this.setState({ display:"flex" });
};

render() {
    return(

  <button className="call" onClick={ ()=> {this.showMoreBox();}}> call to action</button>

<div className="moretoshow" style={{ display: this.state.display }}>
  <div className="content-box">content5</div>
  <div className="content-box">content6</div>
  <div className="content-box">content7</div>
  <div className="content-box">content8</div>
</div>
)
}
}




{/*<!-- Footer-->*/}
function Footer() {
  return (
   <footer>
				<p>get in touch:)</p>
   <div>
				<p>&copy; allie wu. 2020</p>
	 </div>
			</footer>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
