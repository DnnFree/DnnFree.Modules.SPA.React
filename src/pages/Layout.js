import React, { Component } from 'react';
import axios from 'axios';
import fetchApi from '../services/fetchApi'

export default ({mid, service}) => {
  const { data, loading, error } = fetchApi({mid, service});
  return(
    <>
      { loading && <h1>Loading...</h1> }
      { error && <h1>Error. Try refreshing.</h1>}
      <h1>{data}</h1>
    </>
  )
}