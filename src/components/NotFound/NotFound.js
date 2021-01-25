import React from 'react';
import './NotFound.css'
import NotFoundError from '../NotFoundError/NotFoundError'

const NotFound = ({ isVisibleNews, isServerError }) => {

  return (
    <>
      {!isVisibleNews && !isServerError ?
        <NotFoundError isServerError={isServerError} /> :
        <NotFoundError isServerError={isServerError} />}
    </>
  )
}

export default NotFound;
