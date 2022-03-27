import React from 'react';
import { Fragment } from 'react';
import {  useSelector } from 'react-redux';
import SearchPage from "./Page"
import Loading from "../../components/Theme/Loading"
const Search = () => {
const preSearchResult = useSelector(state=>state.search)
 return (
  <Fragment>
     {preSearchResult.loading ? <Loading/>:<SearchPage preresult={preSearchResult?preSearchResult.preresult:[]}/>}
  </Fragment>
   );
}
 
export default Search;