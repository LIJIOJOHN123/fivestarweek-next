import React, { Fragment } from "react";
import { Grid, Paper, Button, Typography } from "@mui/material";
import TransactionTable from "./Table";
import { useSelector } from "react-redux";
import AddPayment from "../../profile/Payment/AddPayment";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles({
  col: {
    paddingTop: 50,
    paddingRight: 20,
    paddingLeft: 20,
    height: "160px",
    backgroundColor: "white",
    borderColor: "black",
    marginLeft: 5,
    borderRadius: 5,
    marginBottom: 20,
    height: 200,
  },
  cont: {
    marginLeft: 20,
  },
  link: {
    textDecoration: "none",
  },
  mar: {
    marginRight: 10,
  },
  par: {
    display: "flex",
    flexGrow: 1,
  },
});
const PaymenetFolder = () => {
  const classes = useStyle();
  const payment = useSelector((state) => state.payment);
  return (
    <Fragment>
      <Grid container>
        <Grid item xl={4} lg={3} md={4} xs={6} sm={12}>
          <Paper className={classes.cont}>
            <div className={classes.col}>
              <Typography align="center" variant="h6">
                Balance:Rs:
                {payment.payment[0] ? payment.payment[0].balance.toFixed(2) : 0}
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xl={4} lg={3} md={4} xs={6} sm={12}>
          <Paper className={classes.cont}>
            <div className={classes.col}>
              <Typography align="center">
                Use Phone Pe or Google Pay(Indian users)
              </Typography>
              <Typography align="center" variant="h6">
                Number: 9108167660
              </Typography>
            </div>
          </Paper>
        </Grid>
        <Grid item xl={4} lg={3} md={6} xs={12} sm={12}>
          <Paper className={classes.cont}>
            <div className={classes.col}>
              <Typography align="center">
                Paypal(International users)
              </Typography>
              <Typography align="center" variant="h6">
                lijojohnrbs@gmail.com
              </Typography>
              <Button
                style={{ color: "white", marginLeft: 20 }}
                variant="contained"
                align="center"
              >
                <a
                  className={classes.link}
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.paypal.com/myaccount/transfer/homepage/pay"
                >
                  Pay with PayPal
                </a>
              </Button>
            </div>
          </Paper>
        </Grid>
        {/* <Grid item xl={4} lg={3} md={4} xs={6} sm={12}>
          <Paper className={classes.cont}>
            <div className={classes.col}>
              <Typography align="center" variant="h6">
                Pay(Only for Indian users)
              </Typography>
              <AddPayment />
            </div>
          </Paper>
        </Grid> */}
      </Grid>
      <Typography variant="h4" align="center">
        Transaction History
      </Typography>
      <TransactionTable />
    </Fragment>
  );
};

export default PaymenetFolder;
