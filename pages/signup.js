import React, { useState, useEffect, useRef } from "react";
import {
  Form,
  Button,
  Message,
  Segment,
  TextArea,
  Divider,
} from "semantic-ui-react";

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
    youtube: "",
  });

  const { name, email, password, bio } = user;

  const [showSocialLinks, setshowSocialLinks] = useState(false);
  const [showPassword, setshowPassword] = useState(false);
  const [errorMsg, seterrorMsg] = useState(null);
  const [fromLoading, setformLoading] = useState(false);

  const [username, setusername] = useState(" ");
  const [usernameLoading, setusernameLoading] = useState(false);
  const [usenameAvailable, setusenameAvailable] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => e.prventDefault();

  return (
    <>
      <HeaderMessage />
      <Form
        loading={fromLoading}
        error={errorMsg !== null}
        onSubmit={handleSubmit}
      >
        <Message
          error
          header="Oops!"
          content={errorMsg}
          onDismiss={() => seterrorMsg(null)}
        />

        <Segment>
          <Form.Input
            required
            label="الإسم"
            placeholder="الإسم"
            name="name"
            value={name}
            onChange={handleChange}
            fluid
            icon="user"
            iconPosition="left"
          />

          <Form.Input
            required
            label="البريد الإكتروني"
            placeholder="البريد الإكتروني"
            name="email"
            value={email}
            onChange={handleChange}
            fluid
            icon="envelope"
            iconPosition="left"
            type="email"
          />

          <Form.Input
            required
            label="البريد الإكتروني"
            placeholder="البريد الإكتروني"
            name="password"
            value={password}
            onChange={handleChange}
            fluid
            icon={{
              name: "eye",
              circular: true,
              link: true,
              onClick: () => setshowPassword(!showPassword),
            }}
            iconPosition="left"
            type={showPassword ? "text" : "password"}
          />
        </Segment>
      </Form>

      <FooterMessage />
    </>
  );
}

export default Signup;
