import React, { Fragment } from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookMessengerShareButton,
  TelegramShareButton,
} from "react-share";
import {
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TwitterIcon,
  WhatsappIcon,
  FacebookMessengerIcon,
  TelegramIcon,
} from "react-share";

export default function ShareDialog({ link }) {
  const shareSection = (
    <Fragment>
      <FacebookShareButton
        url={`${link}`}
        // quote={article.title}
        style={{ marginRight: 20 }}
      >
        <FacebookIcon size={50} round />
      </FacebookShareButton>

      <WhatsappShareButton url={`${link}`} style={{ marginRight: 20 }}>
        <WhatsappIcon size={50} round style={{ marginRight: 20 }} />
      </WhatsappShareButton>
      <FacebookMessengerShareButton url={`${link}`} style={{ marginRight: 20 }}>
        <FacebookMessengerIcon size={50} round style={{ marginRight: 20 }} />
      </FacebookMessengerShareButton>

      <RedditShareButton url={`${link}`} style={{ marginRight: 20 }}>
        <RedditIcon size={50} round />
      </RedditShareButton>
      <TwitterShareButton url={`${link}`} style={{ marginRight: 20 }}>
        <TwitterIcon size={50} round />
      </TwitterShareButton>
      <TelegramShareButton url={`${link}`} style={{ marginRight: 20 }}>
        <TelegramIcon size={50} round />
      </TelegramShareButton>
      <LinkedinShareButton url={`${link}`} style={{ marginRight: 20 }}>
        <LinkedinIcon size={50} round />
      </LinkedinShareButton>
    </Fragment>
  );

  return <div>{shareSection}</div>;
}
