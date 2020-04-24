import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YoutubeIcon from "@material-ui/icons/YouTube";
import PhoneIcon from "@material-ui/icons/Phone";

const SocialLink = props => {
  return (
    <div>
      {props.data.email && (
        <a
          className="btn social-icon btn-email"
          href={`mailto:${props.data.email}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <EmailIcon />
        </a>
      )}
      {props.data.contact_no_primary && (
        <a
          className="btn social-icon btn-phone"
          href={`tel:${props.data.contact_no_primary}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <PhoneIcon />
        </a>
      )}
      {props.data.github_link && (
        <a
          className="btn social-icon btn-github"
          href={props.data.github_link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <GitHubIcon />
        </a>
      )}
      {props.data.linkedin_link && (
        <a
          className="btn social-icon btn-linkedin"
          rel="noopener noreferrer"
          href={props.data.linkedin_link}
          target="_blank"
        >
          <LinkedInIcon />
        </a>
      )}
      {props.data.facebook_link && (
        <a
          className="btn social-icon btn-facebook"
          rel="noopener noreferrer"
          href={props.data.facebook_link}
          target="_blank"
        >
          <FacebookIcon />
        </a>
      )}
      {props.data.twitter_link && (
        <a
          className="btn social-icon btn-twitter"
          rel="noopener noreferrer"
          href={props.data.twitter_link}
          target="_blank"
        >
          <TwitterIcon />
        </a>
      )}
      {props.data.instagram_link && (
        <a
          className="btn social-icon btn-instagram"
          rel="noopener noreferrer"
          href={props.data.instagram_link}
          target="_blank"
        >
          <InstagramIcon />
        </a>
      )}
      {props.data.youtube_link && (
        <a
          className="btn social-icon btn-youtube"
          rel="noopener noreferrer"
          href={props.data.youtube_link}
          target="_blank"
        >
          <YoutubeIcon />
        </a>
      )}
    </div>
  );
};

export default SocialLink;
