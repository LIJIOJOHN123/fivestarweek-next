import { Typography, Grid, AppBar } from "@mui/material";
import React, { Fragment } from "react";
import Link from "next/link";
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
  MailruIcon,
  TelegramIcon,
} from "react-share";
const Message = () => {
  return (
    <Fragment>
      <Grid container style={{ paddingRight: 10, paddingLeft: 10 }}>
        <Grid lg={3} xl={4} md={2}></Grid>
        <Grid lg={7} xl={5} md={8}>
          <Typography
            variant="h1"
            style={{
              fontSize: 50,
              fontWeight: "bold",
              marginTop: 30,
              marginBottom: 30,
            }}
          >
            {" "}
            Fivestarweek - Introduction
          </Typography>
          <Typography paragraph={true}>
            FiveStarWeek is a social media platform where you can post various
            news, articles, blogs, and videos and discuss various topics with
            the users.
          </Typography>
          <Typography paragraph={true}>
            It is also one of the best websites for earning passive income for
            people looking for work from home jobs.We believe in customer
            loyalty and satisfaction, so we share around 90% of the revenue with
            our users. We aim to create more jobs in the nation so that everyone
            can earn money with their skills.
          </Typography>
          <Typography
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginTop: 30,
              marginBottom: 30,
            }}
          >
            A) Problems and Solution
          </Typography>
          <Typography
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 20,
              marginBottom: 10,
            }}
          >
            1) Problems
          </Typography>
          <Typography
            style={{
              marginTop: 20,
              marginBottom: 20,
              marginLeft: 20,
              fontWeight: "bold",
            }}
          >
            a) Inequality of wealth distribution
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            These days people are getting less income even after putting in all
            their efforts and focus. So through this website, we make sure that
            the wealth is equally distributed among the users as per the
            efforts.
          </Typography>
          <Typography
            style={{
              marginTop: 20,
              marginBottom: 10,
              marginLeft: 20,
              fontWeight: "bold",
            }}
          >
            b) Unemployment
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            Due to the advancement in technology, the number of jobs has reduced
            in the industry.
          </Typography>
          <Typography
            style={{
              marginTop: 20,
              marginBottom: 10,
              marginLeft: 20,
              fontWeight: "bold",
            }}
          >
            c) Unsecured Jobs
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            Due to the change in the requirements and advancements in
            technology, there is a shortage of secured jobs.
          </Typography>
          <Typography
            style={{
              marginTop: 20,
              marginBottom: 10,
              marginLeft: 20,
              fontWeight: "bold",
            }}
          >
            d) Covid and Uncertainty
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            Pandemic or other certain disasters can have an adverse effect on
            jobs.
          </Typography>
          <Typography
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            2) The consequence of all these problems
          </Typography>
          <Typography
            style={{
              marginTop: 20,
              marginBottom: 10,
              marginLeft: 20,
              fontWeight: "bold",
            }}
          >
            a) Instability
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            Due to the lack of jobs or fewer jobs available, there would be an
            unstable source of income in people lives.
          </Typography>
          <Typography
            style={{
              marginTop: 20,
              marginBottom: 10,
              marginLeft: 20,
              fontWeight: "bold",
            }}
          >
            b) Financial crisis
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            Having a low payout or rare work requirement can lead to a financial
            crisis in the country.
          </Typography>
          <Typography
            style={{
              marginTop: 20,
              marginBottom: 10,
              marginLeft: 20,
              fontWeight: "bold",
            }}
          >
            c) Poverty increase
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            No jobs or fewer jobs available for the individuals can lead to
            poverty in the country.
          </Typography>
          <Typography
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            3) Solutions
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            After observing all these problems, we have come up with a solution
            to solve this issue. We have various online jobs available so that
            each one can select it as per their skills and earn money. Here are
            the different jobs that we have come up with.
          </Typography>
          <Typography style={{ marginLeft: 30, fontWeight: "bold" }}>
            Data collection
          </Typography>
          <Typography style={{ marginLeft: 30, fontWeight: "bold" }}>
            Data arrangement
          </Typography>
          <Typography style={{ marginLeft: 30, fontWeight: "bold" }}>
            Data moderation
          </Typography>
          <Typography
            paragraph={true}
            style={{ marginLeft: 20, marginTop: 10 }}
          >
            We are continuously working hard to create more features and
            products so that the number of jobs can be indirectly increased.
          </Typography>
          <Typography
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginTop: 30,
              marginBottom: 30,
            }}
          >
            B) UI Guide
          </Typography>
          <Typography
            style={{
              marginTop: 20,
              marginBottom: 10,
              marginLeft: 20,
              fontWeight: "bold",
            }}
          >
            a) How to register to Fivestarweek?
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            To register to the website, click on the register button on the
            upper right side of the website.
            <Link target="_blank" href="https://www.fivestarweek.com/register">
              <a style={{ textDecoration: "none" }}>Register here</a>
            </Link>
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            Enter your details like the Name, Email, Password, and Mobile
            number, and click on the register button. You can even register with
            your Gmail account.
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            Now you are one step ahead for earning points.
          </Typography>
          <Typography
            style={{
              marginTop: 20,
              marginBottom: 10,
              marginLeft: 20,
              fontWeight: "bold",
            }}
          >
            b) How to login to the account?
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            To log in to your account, you have to enter your email and
            password, and then you are all set for earning points. You can also
            log in with your Gmail account.
            <Link target="_blank" href="https://www.fivestarweek.com/login">
              <a style={{ textDecoration: "none" }}>Login here</a>
            </Link>
          </Typography>
          <Typography
            style={{
              marginTop: 20,
              marginBottom: 10,
              marginLeft: 20,
              fontWeight: "bold",
            }}
          >
            c) How to follow various channels on the website?
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            To follow various channels, click on the Channels tab on the menu
            bar and then click on the follow button of the channel you want to
            follow.
            <Link target="_blank" href="https://www.fivestarweek.com/channels">
              <a style={{ textDecoration: "none" }}>Channel list</a>
            </Link>
          </Typography>
          <Typography
            style={{
              marginTop: 20,
              marginBottom: 10,
              marginLeft: 20,
              fontWeight: "bold",
            }}
          >
            d) How to create your own channel?
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            You must login your account and click on following link
            <Link target="_blank" href="https://www.fivestarweek.com/channels">
              <a style={{ textDecoration: "none" }}>Channel list</a>
            </Link>
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            Click on create new channel button
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            Enter name, username,introduction and keywords for your channel and
            click CREATE button. Your channel will be created and you can add
            new content to the channel.
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            For creating a channel on Fivestarweek, follow the below
            instructions.
          </Typography>
          <Typography style={{ marginLeft: 40 }}>
            1) Select a unique username for your profile.
          </Typography>
          <Typography style={{ marginLeft: 40 }}>
            2) Then select a unique channel name. Ensure that the username and
            channel name are related to your topic.
          </Typography>
          <Typography style={{ marginLeft: 40 }}>
            3) Enter the introduction of what the channel is about. Also,
            provide your contact details to publish the advertisement.
          </Typography>
          <Typography style={{ marginLeft: 40 }}>
            4) After creating the channel, start posting the content that is
            related to your topic.
          </Typography>
          <Typography style={{ marginLeft: 40 }}>
            5)If you are interested, then you can create unlimited channels on
            the platform and upload unlimited content.
          </Typography>
          <Typography
            style={{
              marginTop: 20,
              marginBottom: 10,
              marginLeft: 20,
              fontWeight: "bold",
            }}
          >
            e) How to add articles/videos/blogs to the channels?
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            Once you have created the channel, click on the Create Post Button
            in your profile. Then add the article/video/blog link you want to
            publish and submit it.Please watch above video.
          </Typography>
          <Typography />
          <Typography
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginTop: 30,
              marginBottom: 30,
            }}
          >
            C) Work from Home
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            We provide the opportunity to the individuals who are planning to
            work from home to earn a good amount of passive income with
            different tasks. We pay the revenue based on the points earned by
            you. Here is the points allocation information for your reference.
          </Typography>
          <Typography
            style={{
              marginTop: 20,
              marginBottom: 10,
              marginLeft: 20,
              fontWeight: "bold",
            }}
          >
            a) Points Allocation
          </Typography>
          <Typography style={{ marginLeft: 40 }}>
            1)If you add the content on the site, you get 2 points.
          </Typography>
          <Typography style={{ marginLeft: 40 }}>
            2)If you comment on the article/video, etc., of other users, then
            for each comment, you get 3 points.
          </Typography>
          <Typography style={{ marginLeft: 40 }}>
            3) If you visit 50 articles/videos, etc., of other users, you will
            get 5 points.
          </Typography>
          <Typography style={{ marginLeft: 40 }}>
            4) If your content is getting 250 visits, then you get 10 points for
            it.
          </Typography>
          <Typography style={{ marginLeft: 40 }}>
            5) If you inform us of any violated content, and if its valid, then
            only you get 10 points for it.
          </Typography>
          <Typography
            style={{
              marginTop: 20,
              marginBottom: 10,
              marginLeft: 20,
              fontWeight: "bold",
            }}
          >
            b) Qualification for revenue sharing
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            You are qualified for revenue sharing if you:
          </Typography>
          <Typography style={{ marginLeft: 40 }}>
            1) Score 3000 points in a month.
          </Typography>
          <Typography style={{ marginLeft: 40 }}>
            2)Post at least 1 article or video in a day.
          </Typography>
          <Typography style={{ marginLeft: 40 }}>
            3)Get at least 100 visits for your content.
          </Typography>
          <Typography style={{ marginLeft: 40 }}>
            4) Become a premium member
          </Typography>
          <Typography
            style={{
              marginTop: 20,
              marginBottom: 10,
              marginLeft: 20,
              fontWeight: "bold",
            }}
          >
            c) Payment
          </Typography>
          <Typography style={{ marginLeft: 40 }}>
            1) Your revenue based on the points earned will be shared on a
            monthly basis.
          </Typography>
          <Typography style={{ marginLeft: 40 }}>
            2) For Indian users it will be transferred through bank account and
            for the International users PayPal will be the mode of transfer
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            Get more followers and tie up with companies and publish their
            products and services and earn direct income.
          </Typography>
          <Typography
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginTop: 30,
              marginBottom: 30,
            }}
          >
            D) Revenue Sharing Formula
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            Before sharing the revenue with you, we will first determine how
            many points you have generated in a day.
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            Then we will figure out how much income you have earned in a day
            based on your points.
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            We will share 70% of our revenue with the users who have gained some
            points, and the remaining 30% of the revenue will be utilized for
            data moderation, data arrangement, and marketing.
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            Here are the examples of our Revenue Calculation
          </Typography>
          <Typography
            style={{
              marginTop: 20,
              marginBottom: 10,
              marginLeft: 20,
              fontWeight: "bold",
            }}
          >
            Example 1: Company Point of View
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            If the user has earned 10,000 points and the total revenue generated
            from it is 1,00000.
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            Now,as mentioned above 70% of the revenue will be distributed, then
            70% of 1,00000 = 70000
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            Then, the total distributive revenue/ points = each point.
          </Typography>{" "}
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            Then as per the above example, 70000/10000 = Rs 7/ point.
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            You have generated 500 points in a day by adding content,
            commenting, visiting articles, etc.
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            Now, your income for the day will be 500*7 = Rs 3500
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            The above calculation is for one day. We will calculate the earnings
            daily and then share the income with the users.
          </Typography>
          <Typography
            style={{
              marginTop: 20,
              marginBottom: 10,
              marginLeft: 20,
              fontWeight: "bold",
            }}
          >
            Example 2: From User Point of View
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            You have generated 500 points in a day by adding content,
            commenting, visiting articles, etc.
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            Now, your income for the day will be 500*7 = Rs 3500
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            The above calculation is for one day. We will calculate the earnings
            daily and then share the income with the users.
          </Typography>
          <Typography
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginTop: 30,
              marginBottom: 30,
            }}
          >
            E) Future and Scope
          </Typography>
          <Typography
            style={{
              marginTop: 20,
              marginBottom: 10,
              marginLeft: 20,
              fontWeight: "bold",
            }}
          >
            1) Enhance Features
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            Our team is continuously working to enhance the features on the
            current website so that it can be easy for the users to navigate and
            access the site with ease.
          </Typography>
          <Typography
            style={{
              marginTop: 20,
              marginBottom: 10,
              marginLeft: 20,
              fontWeight: "bold",
            }}
          >
            2) Launch new products
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            We are on the way of launching new products in the future. We will
            be handling majorly massive amount of data in different languages.
            And to do this, we will require more people who can work on the
            content arrangement and the moderation part.
          </Typography>
          <Typography paragraph={true} style={{ marginLeft: 20 }}>
            We are planning to create a new platform for this, and this will
            indirectly create more jobs for people of different regions who want
            to earn money by posting the content in their local language.
          </Typography>
          <Typography
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginTop: 30,
              marginBottom: 30,
            }}
          >
            F) Support us
          </Typography>
          <Typography
            style={{
              marginTop: 20,
              marginBottom: 10,
              marginLeft: 20,
              fontWeight: "bold",
            }}
          >
            a) Become a premium member
            <Link target="_blank" href="https://www.fivestarweek.com/premium">
              <a style={{ textDecoration: "none" }}> Click here</a>
            </Link>
          </Typography>
          <Typography>
            There are few benefits of becoming a premium member on Fivestarweek
            like:
          </Typography>
          <Typography>1) Verified Profile and Channel</Typography>
          <Typography>2) Gain more points</Typography>
          <Typography>3) Increase the reach content to more users</Typography>
          <Typography
            style={{
              marginTop: 20,
              marginBottom: 10,
              marginLeft: 20,
              fontWeight: "bold",
            }}
          >
            b) Suggestions and Feedback
          </Typography>
          <Typography>
            If you feel that some of the website features need to be improved,
            then your suggestions or feedback are most welcomed.
          </Typography>
          <Typography
            style={{
              marginTop: 20,
              marginBottom: 10,
              marginLeft: 20,
              fontWeight: "bold",
            }}
          >
            c) Actively participate
          </Typography>
          <Typography>
            Your active participation on the website will be highly appreciated
            as users will get to read interesting content across various niches.
          </Typography>
          <Typography
            style={{
              marginTop: 20,
              marginBottom: 10,
              marginLeft: 20,
              fontWeight: "bold",
            }}
          >
            d) Share our website
          </Typography>
          <Typography>
            Word of Mouth is considered a powerful source of reference. We would
            be glad if you share our website with your friends and family and
            ask them to participate on it.
          </Typography>
          <Typography
            style={{
              marginTop: 20,
              marginBottom: 10,
              marginLeft: 20,
              fontWeight: "bold",
            }}
          >
            e) Download our app
          </Typography>
          <Typography>
            You can actively work on the site even while travelling. We have
            launched our app on the Google Play Store and on iOS, it will be
            available soon.
            <Link href="https://play.google.com/store/apps/details?id=fivestarweek.social">
              <a style={{ textDecoration: "none" }}> Google playstore</a>
            </Link>
          </Typography>
          <Typography
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginTop: 30,
              marginBottom: 30,
            }}
          >
            G) Contact us
          </Typography>
          <Typography>
            You can get in touch with us through Email and Call.
          </Typography>
          <Typography>email:support@fivestarweek.com</Typography>
          <Typography style={{ marginBottom: 30 }}>
            Mobile: +91 8971988251
          </Typography>
          <Fragment>
            <FacebookShareButton
              url="https://www.fivestarweek.com/workfromhome"
              style={{ marginRight: 20 }}
            >
              <FacebookIcon size={50} round />
            </FacebookShareButton>
            <WhatsappShareButton
              url="https://www.fivestarweek.com/workfromhome"
              style={{ marginRight: 20 }}
            >
              <WhatsappIcon size={50} round style={{ marginRight: 20 }} />
            </WhatsappShareButton>
            <FacebookMessengerShareButton
              url="https://www.fivestarweek.com/workfromhome"
              style={{ marginRight: 20 }}
            >
              <FacebookMessengerIcon
                size={50}
                round
                style={{ marginRight: 20 }}
              />
            </FacebookMessengerShareButton>

            <RedditShareButton
              url="https://www.fivestarweek.com/workfromhome"
              style={{ marginRight: 20 }}
            >
              <RedditIcon size={50} round />
            </RedditShareButton>
            <TwitterShareButton
              url="https://www.fivestarweek.com/workfromhome"
              style={{ marginRight: 20 }}
            >
              <TwitterIcon size={50} round />
            </TwitterShareButton>
            <TelegramShareButton
              url="https://www.fivestarweek.com/workfromhome"
              style={{ marginRight: 20 }}
            >
              <TelegramIcon size={50} round />
            </TelegramShareButton>
            <LinkedinShareButton
              url="https://www.fivestarweek.com/workfromhome"
              style={{ marginRight: 20 }}
            >
              <LinkedinIcon size={50} round />
            </LinkedinShareButton>
          </Fragment>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Message;
