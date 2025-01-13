import React from "react";
import { Typography, styled } from "@mui/material";

import { DiscordIcon, FooterArrow, FooterBg, MediumIcon, TwitterIcon } from "../Icons/Icons";
import { YoutubeIcon } from "../Icons/YoutubeIcon";

const socialMock = [
  {
    id: 0,
    icon: <TwitterIcon />,
    href: "https://twitter.com/cbia_org",
  },
  {
    id: 1,
    icon: <DiscordIcon />,
    href: "https://discord.gg/UspYS3nxXY",
  },
  {
    id: 2,
    icon: <YoutubeIcon />,
    href: "https://www.youtube.com/@CardanoBlockchainInfraAlliance",
  },
];

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  };

  return (
    <Wrapper id="footer">
      <Top>
        <Left>
          <ContactUsWrapper>
            <ContactUsText color="textColor.light" variant="contactUs">
              Have a question? Contact us
            </ContactUsText>
            <Typography color="textColor.light" variant="contactEmail">
              contact@cbia.io
            </Typography>
          </ContactUsWrapper>
        </Left>
        <Right>
          <ContactUsWrapper>
            <FollowUsText color="textColor.light" variant="contactUs">
              Follow us
            </FollowUsText>
            <SocialsWrapper>
              {socialMock.map((elem) => (
                <a key={elem.id} href={elem.href} target="_blank" rel="noreferrer">
                  {elem.icon}
                </a>
              ))}
            </SocialsWrapper>
          </ContactUsWrapper>
        </Right>
      </Top>
      <Bottom>
        <PrivacyWrapper>
          <OpacityText color="textColor.light" variant="footerText">
            Privacy Policy
          </OpacityText>
          <OpacityText color="textColor.light" variant="footerText">
            Terms & Conditions
          </OpacityText>
        </PrivacyWrapper>
        <CardanoWrapper>
          <OpacityText color="textColor.light" variant="footerText">
            Cardano Alliance® | 2022
          </OpacityText>
        </CardanoWrapper>
      </Bottom>
      <BgWrapper>
        <FooterBg />
      </BgWrapper>
      <UpWrapper onClick={handleScrollTop}>
        <Line />
        <ArrowWrapper>
          <FooterArrow />
        </ArrowWrapper>
        <UpText variant="upText" color="textColor.light">
          to the top
        </UpText>
      </UpWrapper>
    </Wrapper>
  );
};

const ArrowWrapper = styled("div")({
  opacity: 0.8,
  transform: "rotate(90deg)",
});

const Line = styled("div")(({ theme }) => ({
  position: "absolute",
  right: "115px",
  top: "50%",
  transform: "translateY(50%)",
  width: "508px",
  background: "#4C5CD0",
  height: "1px",
  cursor: "default",

  "&:before": {
    position: "absolute",
    right: "-5px",
    top: "-200%",
    content: `''`,
    width: "5px",
    height: "5px",
    background: "#91ABFF",
    borderRadius: "50%",
  },
}));

const UpText = styled(Typography)({
  opacity: "0.8",
  textTransform: "uppercase",
});

const UpWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  top: "-100px",
  gap: "10px",
  flexDirection: "row-reverse",
  position: "absolute",
  left: "50%",
  transform: "rotate(-90deg) translateX(-50%)",
  cursor: "pointer",

  [theme.breakpoints.down("md")]: {
    top: "-85px",
    left: "44%",
  },

  [theme.breakpoints.down("sm")]: {
    top: "-38px",
    right: "-133px",
  },
}));

const BgWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  bottom: "-10px",
  left: "-200px",
  right: "-200px",
  zIndex: "-10",

  svg: {
    width: "100%",
  },

  "@media(max-width: 768px)": {
    bottom: "-175px",
    left: "-100",
    right: "-100",
  },
}));

const OpacityText = styled(Typography)({
  opacity: 0.6,
});

const ContactUsText = styled(Typography)({
  opacity: 0.8,
});

const Right = styled("div")({});

const FollowUsText = styled(Typography)(({ theme }) => ({
  textAlign: "right",

  [theme.breakpoints.down("sm")]: {
    textAlign: "left",
  },
}));

const CardanoWrapper = styled("div")({});

const SocialsWrapper = styled("div")({
  display: "flex",
  gap: "17px",
});

const Top = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
    gap: "40px",
  },
}));

const Bottom = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: "16px",
  },
}));

const ContactUsWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  rowGap: "12px",
});

const PrivacyWrapper = styled("div")({
  display: "flex",
  columnGap: "22px",
});

const Left = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const Wrapper = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  rowGap: "73px",
  padding: "0 200px 50px",
  marginTop: "auto",

  [theme.breakpoints.down("xl")]: {
    padding: "0 60px 50px",
  },

  [theme.breakpoints.down("md")]: {
    padding: "0 40px 33px",
    rowGap: "37px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "0 20px 33px",
    gap: "65px",
  },
}));

export default Footer;
