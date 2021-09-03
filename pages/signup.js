import React, { useState, useEffect, useRef } from "react";
import {
  Form,
  Button,
  Message,
  Segment,
  TextArea,
  Divider,
  Item,
} from "semantic-ui-react";

import {
  HeaderMessage,
  FooterMessage,
} from "../components/Shared/WelcomeMessage";
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import SharedInputs from "../components/Shared/SharedInputs";
import ImageDrop from "../components/Shared/ImageDrop";

const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
let cancel;

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

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "media") {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }

    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const [username, setUsername] = useState("");
  const [usernameLoading, setUsernameLoading] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState(false);

  // Drag n Drop image
  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);
  const [highlighted, setHighlighted] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    const isUser = Object.values({ name, email, password }).every((item) =>
      Boolean(item)
    );
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]);

  const checkUsername = async () => {
    setUsernameLoading(true);
    try {
      cancel && cancel();

      const CancelToken = axios.CancelToken;

      const res = await axios.get(`${baseUrl}/api/signup/${username}`, {
        cancelToken: new CancelToken((canceler) => {
          cancel = canceler;
        }),
      });
      if (res.data === "Available") {
        setUsernameAvailable(true);
        setUser((prev) => ({ ...prev, username }));
      }
    } catch (error) {
      setErrorMsg("إسم المستخدم غير متوفر");
    }
    setUsernameLoading(false);
  };

  useEffect(() => {
    username === "" ? setUsernameAvailable(false) : checkUsername();
  }, [username]);

  const handleSubmit = (e) => e.prventDefault();

  return (
    <>
      <HeaderMessage />
      <Form
        loading={formLoading}
        error={errorMsg !== null}
        onSubmit={handleSubmit}
      >
        <Message
          error
          header="المعذرة"
          content={errorMsg}
          onDismiss={() => setErrorMsg(null)}
        />

        <Segment>
          <ImageDrop
            mediaPreview={mediaPreview}
            setMediaPreview={setMediaPreview}
            setMedia={setMedia}
            inputRef={inputRef}
            highlighted={highlighted}
            setHighlighted={setHighlighted}
            handleChange={handleChange}
          />
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
            label="كلمة السر"
            placeholder="كلمة السر"
            name="password"
            value={password}
            onChange={handleChange}
            fluid
            icon={{
              name: "eye",
              circular: true,
              link: true,
              onClick: () => setShowPassword(!showPassword),
            }}
            iconPosition="left"
            type={showPassword ? "text" : "password"}
          />

          <Form.Input
            loading={usernameLoading}
            error={!usernameAvailable}
            required
            label="اسم المستخدم"
            placeholder="اسم المستخدم"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              if (regexUserName.test(e.target.value)) {
                setUsernameAvailable(true);
              } else {
                setUsernameAvailable(false);
              }
            }}
            fluid
            icon={usernameAvailable ? "check" : "close"}
            iconPosition="left"
          />

          <SharedInputs
            user={user}
            showSocialLinks={showSocialLinks}
            setshowSocialLinks={setShowSocialLinks}
            handleChange={handleChange}
          />

          <Divider hidden />
          <Button
            icon="signup"
            content="سجل"
            type="submit"
            color="olive"
            disabled={submitDisabled || !userameAvailable}
          />
        </Segment>
      </Form>

      <FooterMessage />
    </>
  );
}

export default Signup;
