import React, { Fragment } from "react";
import { Typography, Button, Paper, Grid } from "@mui/material";
import TransactionTable from "./Table";
import CreateBank from "./AddBank";
import { useSelector } from "react-redux";
import EditBank from "./EditBank";
import WithdrawalForm from "./Withdraw";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles((theme) => ({
  container: {
    marginLeft: 20,
    marginTop: 20,
  },

  item: {
    paddingTop: 30,
    paddingRight: 20,
    paddingLeft: 20,
    height: 250,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    borderColor: "black",
    borderRadius: 5,
    marginBottom: 20,
  },

  large: {
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
}));
const ScoreFolder = () => {
  const classes = useStyle();
  const payment = useSelector((state) => state.payment);

  return (
    <Fragment>
      <Grid container>
        <Grid item xl={4} lg={4} md={4} xs={12} sm={12}>
          <Paper className={classes.container}>
            <div className={classes.item}>
              <Typography align="center" variant="h6">
                Bank/Paypal Details
              </Typography>
              {payment.bank ? (
                <Fragment>
                  {payment.bank.bankName && (
                    <Typography align="center">
                      {payment.bank.bankName}
                    </Typography>
                  )}
                  {payment.bank.accountNumber && (
                    <Typography align="center">
                      {payment.bank.accountNumber}
                    </Typography>
                  )}
                  {payment.bank.IFSC && (
                    <Typography align="center">{payment.bank.IFSC}</Typography>
                  )}
                  {payment.bank.accountHolderName && (
                    <Typography align="center">
                      {payment.bank.accountHolderName}
                    </Typography>
                  )}
                  <Typography align="center">{payment.bank.payPal}</Typography>
                </Fragment>
              ) : (
                ""
              )}
              {payment.bank !== null ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <EditBank data={payment.bank} />
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CreateBank />
                </div>
              )}
            </div>
          </Paper>
        </Grid>
        <Grid item xl={8} lg={8} md={8} xs={12} sm={12}>
          <Paper className={classes.container}>
            <div className={classes.item}>
              <Typography align="center" variant="h6">
                Available Balance
              </Typography>
              <Typography align="center">
                Rs:{payment.earnList[0] ? payment.earnList[0].balance : "00"}.00
              </Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <WithdrawalForm />
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Typography variant="h4" align="center">
        Earnings
      </Typography>
      <TransactionTable />
    </Fragment>
  );
};

export default ScoreFolder;
