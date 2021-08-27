import React from "react";
import { Form, Segment, Image, Icon, Header } from "semantic-ui-react";

function ImageDrop({
  highlighted,
  setHighlighted,
  inputRef,
  handleChange,
  mediaPreview,
  setMediaPreview,
  setMedia,
}) {
  return (
    <>
      <Segment placeholder basic secondary>
        <input
          style={{ display: "none" }}
          type="file"
          accept="image/*"
          onChange={handleChange}
          name="media"
          ref={inputRef}
        />

        <div
          onDragOver={(e) => {
            e.preventDefault();
            setHighlighted(true);
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            setHighlighted(false);
          }}
          onDrop={(e) => {
            e.preventDefault();
            setHighlighted(true);

            const dropedFile = Array.from(e.dataTransfer.files);
            setMedia(dropedFile[0]);
            setMediaPreview(URL.createObjectURL(dropedFile[0]));
          }}
        >
          {mediaPreview === null ? (
            <>
              <Segment color={highlighted ? "olive" : ""} placeholder basic>
                <Header icon>
                  <Icon
                    name="file image outline"
                    style={{ cursor: "pointer" }}
                    onClick={() => inputRef.current.click()}
                  />
                  إظافة صورة لملفك الشخصي
                </Header>
              </Segment>
            </>
          ) : (
            <>
              <Segment color="olive" placeholder basic>
                <Image
                  src={mediaPreview}
                  size="medium"
                  centered
                  style={{ cursor: "pointer" }}
                  onClick={() => inputRef.current.click()}
                />
              </Segment>
            </>
          )}
        </div>
      </Segment>
    </>
  );
}

export default ImageDrop;
