import React, { Fragment } from "react";
import { Typography, makeStyles } from "@mui/material";
import Link from "next/link";
import { getCookie, parseCookies } from "../../utils/auth";
import { referalLink } from "../../action/refer";
import Share from "../../containers/refer/Share";
const useStyle = makeStyles({
  link: {
    textDecoration: "none",
  },
});
const Message = ({ refer, token }) => {
  const classes = useStyle();
  const language = getCookie("language");
  return (
    <Fragment>
      <div style={{ margin: 20 }}>
        <Typography>
          dalkfjdsalk fadlksjfd alkjf dlsajlkdfas ldja ldjfal fjadlksjf alksfj
          lajfdals dflasjdflak jfal flkadsj fladsjfla jfdlajfsld ajdasl faljfla
          sjflajf lasjfl adjkfalkfjdal dflkajfl adfladjflskadjflaj
          flajfladsjlfjladfjslj
        </Typography>

        <Typography>
          <Link
            href={`${process.env.DOMAIN}/refer/message?language=${language})}`}
          >
            <a className={classes.link}>
              {`${process.env.DOMAIN}/refer/message?language=${language}`}
            </a>
          </Link>
        </Typography>
      </div>

      <Share
        link={`${process.env.DOMAIN}/refer/message?language=${language}`}
      />
    </Fragment>
  );
};

Message.getInitialProps = async ({ req }) => {
  let token = await parseCookies(req).token;
  const refer = await referalLink(token);
  return { refer, token };
};
export default Message;
