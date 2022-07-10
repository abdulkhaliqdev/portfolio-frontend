import React from "react";
import "typeface-raleway";

const Header = () => (
  <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" id="logo">AK<span>.</span>Dev</a>
      <ul class="navbar-nav ml-auto">
        <div class="hori-selector">
          <div class="left"></div>
          <div class="right"></div>
        </div>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0);" selected="selected" ><i class=""></i>Home</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="javascript:void(0);"><i class=""></i>Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0);"><i class=""></i>Article</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0);"><i class=""></i>Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0);"><i class=""></i>Contact Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0);"><i class=""></i>About Me</a>
        </li>
  		</ul>
    </div>
  </nav>
);


export default Header