import React, { Fragment } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Order = () => {
  return (
    <Fragment>
      <Navbar />
      Order
      <p>Add Stripe</p>
      <Footer />
    </Fragment>
  );
};

export default Order;
