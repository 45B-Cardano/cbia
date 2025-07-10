import React from "react";
import { styled, Typography } from "@mui/material";
import { projectsMock } from "../../../mocks/homeMocks";

const Projects = () => {
  return (
    <OuterWrapper id="projects">
      <LineWrapper>
        <LineTitle variant="blockTitle" color="textColor.main">
          projects
        </LineTitle>
      </LineWrapper>
      <Wrapper>
        {projectsMock.map((elem) => (
          <React.Fragment key={elem.id}>
            <Title variant="principlesCardTitle" color="textColor.dark">
              <a key={elem.url} href={elem.url} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>
                {elem.title}
              </a>
            </Title>
            <Subtitle variant="subtitle1" color="textColor.dark">
              <div dangerouslySetInnerHTML={{ __html: elem.description }} />
            </Subtitle>
            <div style={{ display: "flex", gap: "15px" }}>
              {elem.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: 600 }}>
                  {link.text}
                </a>
              ))}
            </div>
          </React.Fragment>
        ))}
      </Wrapper>
    </OuterWrapper>
  );
};

const Title = styled(Typography)({});
const Subtitle = styled(Typography)({});

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  maxWidth: "877px",
  width: "100%",
  marginLeft: "auto",
  marginRight: "472px",

  [theme.breakpoints.down("xl")]: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    maxWidth: "990px",
    width: "100%",
    marginLeft: "auto",
    marginRight: "172px",
  },

  "@media(max-width: 1400px)": {
    marginRight: "70px",
    maxWidth: "800px",
  },

  "@media(max-width: 1000px)": {
    maxWidth: "700px",
  },

  "@media(max-width: 850px)": {
    gap: "10px",
    maxWidth: "520px",
    marginTop: "40px",
  },

  "@media(max-width: 768px)": {
    marginRight: "100px",
  },

  "@media(max-width: 700px)": {
    marginRight: "50px",
  },

  "@media(max-width: 650px)": {
    marginRight: "20px",
  },

  "@media(max-width: 600px)": {
    padding: "0 20px",
  },
}));

const OuterWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  paddingBottom: "190px",
  paddingTop: "135px",

  [theme.breakpoints.down("xl")]: {
    paddingBottom: "260px",
    paddingTop: "100px",
  },

  "@media(max-width: 850px)": {
    paddingTop: "40px",
    paddingBottom: "150px",
  },

  "@media(max-width: 400px)": {
    paddingTop: "35px",
    paddingBottom: "100px",
  },
}));

const LineTitle = styled(Typography)({
  textTransform: "uppercase",
});

const LineWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "end",
  position: "absolute",
  left: "15%",
  top: "0px",
  width: "18%",

  "&:after": {
    content: `''`,
    height: "1px",
    width: "100%",
    background: "rgba(0, 56, 255, 0.10)",
    marginTop: "10px",
  },

  "&:before": {
    content: `''`,
    position: "absolute",
    left: "-2.5px",
    bottom: "-2.5px",
    width: "5px",
    height: "5px",
    borderRadius: "50%",
    background: "#91ABFF",
  },

  [theme.breakpoints.down("xl")]: {
    left: "10%",
    width: "13%",
  },

  "@media(max-width: 600px)": {
    left: "0",
    width: "100px",
    alignItems: "center",

    "&::before": {
      content: `''`,
      position: "absolute",
      right: "-2.5px",
      left: "unset",
      bottom: "-2.5px",
      width: "5px",
      height: "5px",
      borderRadius: "50%",
      background: "#91ABFF",
    },

    "&:after": {
      content: `''`,
      height: "1px",
      width: "100%",
      background: "rgba(0, 56, 255, 0.10)",
      marginTop: "5px",
    },
  },
}));

export default Projects;
