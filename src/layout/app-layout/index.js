import React from "react";
import AppViews from "views/app-views";
import "./styles.scss";
const AppLayout = () => {
  const toggleElement = (e) => {
    const element = document.getElementById(e);
    element.classList.toggle("showMenu");
  };

  const toggleSider = () => {
    const sider = document.getElementById("sidebar");
    sider.classList.toggle("close");
  };
  return (
    <>
      <div className="sidebar close  " id="sidebar">
        <div className="logo-details">
          <i className="fa-brands fa-js fa-2x"></i>
          <span className="logo_name">LogoAlanı</span>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#">
              <i className="fa-solid fa-grip"></i>
              <span className="link_name">Dashboard</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <span className="link_name">Posts</span>
              </li>
            </ul>
          </li>
          <li>
            <div className="icon-link">
              <a href="">
                <i className="fa-solid fa-align-left"></i>
                <span className="link_name">Category</span>
              </a>
              <i className="fa-solid fa-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <span className="link_name">Category</span>
                <a href="#">Web Design 2</a>
                <a href="#">Web Design 3 </a>
                <a href="#">Web Design 4</a>
              </li>
            </ul>
          </li>
          <li id="1" onClick={() => toggleElement(1)}>
            <div className="icon-link">
              <a href="#">
                <i className="fa-solid fa-align-left"></i>
                <span className="link_name">Posts</span>
              </a>
              <i className="fa-solid fa-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <span className="link_name">Posts</span>
                <a href="#">Post 2</a>
                <a href="#">Post 3 </a>
                <a href="#">Post 4</a>
              </li>
            </ul>
          </li>
          <li>
            <div className="profile-details">
              <div className="profile-content">
                <img
                  src="https://img.discogs.com/BnC3aeMxwC7om63PeDMDyPeMnDs=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-3148800-1497908447-1580.jpeg.jpg"
                  alt="profile"
                />
              </div>
              <div className="name-job">
                <div className="profile_name">Prem Shahi</div>
                <div className="job">Frontend Developer</div>
              </div>
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </div>
          </li>
        </ul>
      </div>
      <section className="home-section">
        <div className="home-content">
          <div className="title bg-white -mt-3 w-full h-14  p-0 flex items-center">
            <i className="fa-solid fa-bars menu-bar" onClick={toggleSider}></i>
            <span className="text">Test Test Tes Test</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppLayout;
