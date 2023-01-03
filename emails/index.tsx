import {
  render,
  Mjml,
  MjmlHead,
  MjmlTitle,
  MjmlPreview,
  MjmlBody,
  MjmlSection,
  MjmlColumn,
  MjmlButton,
  MjmlImage,
} from "mjml-react";

function Component({ width, color }) {
  return (
    <Mjml>
      <MjmlHead>
        <MjmlTitle>Last Minute Offer</MjmlTitle>
        <MjmlPreview>Last Minute Offer...</MjmlPreview>
      </MjmlHead>
      <MjmlBody width={width}>
        <MjmlSection fullWidth backgroundColor={color}>
          <MjmlColumn>
            <MjmlImage src="https://images.pexels.com/photos/14281753/pexels-photo-14281753.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" />
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection>
          <MjmlColumn>
            <MjmlButton
              padding="10px"
              backgroundColor="#e37188"
              href="https://www.wix.com/"
            >
              I like it!
            </MjmlButton>
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
}

function email({ width, color }) {
  const { html } = render(<Component width={width} color={color} />, {
    validationLevel: "soft",
  });
  return html;
}
export default email;
