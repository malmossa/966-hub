import React, { useState, useEffect, useRef } from "react";
import { Form, Button, Message, Segment, TextArea, Divider } from "semantic-ui-react"

import {
  HeaderMessage,
  FooterMessage,
} from "../components/Shared/WelcomeMessage";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    snapchat: "",
    twitter: "",
    instagram: "",
    facebook: "",
    youtube: ""
  });

  const { name, email, password, bio } = user

  const [showSocialLinks, setshowSocialLinks] =  useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const [errorMsg, seterrorMsg] = useState(null);

  const [username, setusername] = useState(" ");
  const [usernameLoading, setusernameLoading] = useState(false);
  const [usenameAvailable, setusenameAvailable] = useState(false);
  


  return (
    <>
      <HeaderMessage />

      <FooterMessage />
    </>
  );
}

export default Signup;
