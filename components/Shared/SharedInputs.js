import React from "react";
import {
  Form,
  Button,
  Message,
  Segment,
  TextArea,
  Divider,
} from "semantic-ui-react";

function SharedInputs({
  user: { bio, snapchat, twitter, instagram, facebook, youtube },
  handleChange,
  showSocialLinks,
  setshowSocialLinks,
}) {
  return (
    <>
      <Form.Field
        control={TextArea}
        name="bio"
        value={bio}
        onChange={handleChange}
        placeholder="تعريف عني"
      />

      <Button
        content="حسابات التواصل الإجتماعي"
        color="olive"
        icon="at"
        type="button"
        onClick={() => setshowSocialLinks(!showSocialLinks)}
      />

      {showSocialLinks && (
        <>
          <Divider />
          <Form.Input
            icon="snapchat ghost"
            iconPosition="left"
            name="snapchat"
            value={snapchat}
            onChange={handleChange}
          />

          <Form.Input
            icon="twitter"
            iconPosition="left"
            name="twitter"
            value={twitter}
            onChange={handleChange}
          />

          <Form.Input
            icon="instagram"
            iconPosition="left"
            name="instagram"
            value={instagram}
            onChange={handleChange}
          />

          <Form.Input
            icon="facebook"
            iconPosition="left"
            name="facebook"
            value={facebook}
            onChange={handleChange}
          />

          <Form.Input
            icon="youtube"
            iconPosition="left"
            name="youtube"
            value={youtube}
            onChange={handleChange}
          />

          <Message
            icon="attention"
            info
            size="small"
            header="حسابات التواصل الإجتماعي إختيارية"
          />
        </>
      )}
    </>
  );
}

export default SharedInputs;
