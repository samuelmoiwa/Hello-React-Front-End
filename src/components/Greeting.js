import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/greeting';

const Greeting = () => {
  const { message } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
  
    dispatch(fetchGreeting());
  }, [dispatch]);

  return <h1>{message}</h1>;
}

export default Greeting;
