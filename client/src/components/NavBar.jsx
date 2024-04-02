//Posts List Link (Root Path) | Link to create new post(Post form)
import React from "react";
import { Link } from 'react-router-dom';
import NewForm from '../features/posts/NewForm';


function NavBar() {
  return (
  	<nav>
  	  <Link to="/"> Posts List </Link>
  	  {" | "}
  	  <Link to="/new"> New Postttt </Link>

  	</nav>
  )
} 

export default NavBar;  