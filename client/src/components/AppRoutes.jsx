import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Route, Routes} from 'react-router-dom';
import PostsList from '../features/posts/PostsList';
import NewForm from '../features/posts/NewForm';


function AppRoutes() {
  return(
	  	<Routes>
	  	  <Route path="/" element={ <h1>This is the list of posts<PostsList/></h1>}/>
	  	  <Route path="/new" element={ <NewForm/> }/> 
	  	</Routes>
  );
}

export default AppRoutes;