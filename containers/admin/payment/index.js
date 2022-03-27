import React, { Fragment } from "react";
import Term from "./Term";
import PaymentList from "./List";
import AddPayment from "./create";
import RemovePayment from "./remove";
const Payment = () => {
  return (
    <Fragment>
      <div style={{ display: "flex", marginBottom: 30 }}>
        <AddPayment />
        <RemovePayment />
      </div>
      <Term />
      <PaymentList />
    </Fragment>
  );
};

export default Payment;
