import {
  AccordionDetails,
  AccordionSummary,
  Accordion as MuiAccordion,
  styled,
  AccordionProps as MuiAccordionProps,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

interface CustomProps {
  title: string;
  children: React.ReactNode;
}

type AccordionProps = MuiAccordionProps & CustomProps;

const Accordion = ({ children, title, defaultExpanded, ...props }: AccordionProps) => {
  const [isExpanded, setIsExpanded] = useState(!!defaultExpanded);

  const handleExpand = (event: any, status: boolean) => setIsExpanded(status);

  return (
    <StyledAccordion onChange={handleExpand} expanded={isExpanded} {...props}>
      {/*<StyledAccordionSummary expandIcon={isExpanded ? <MinusIcon /> : <PlusIcon />}>*/}
      <StyledAccordionSummary>
        {/*<Title variant="mediumTitle" color="textColor.dark">*/}
        {title}
        {/*</Title>*/}
      </StyledAccordionSummary>
      <StyledAccordionDetails>{children}</StyledAccordionDetails>
    </StyledAccordion>
  );
};

const StyledAccordion = styled(MuiAccordion)(({ theme }) => ({
  margin: "0 !important",
  boxShadow: "none",
  borderBottom: "1px solid #E3DCE4",
  background: "transparent",

  "&:before": {
    display: "none",
  },

  "& .Mui-expanded": {
    transform: "rotate(0deg) !important",
  },

  "&:hover .MuiAccordionSummary-expandIconWrapper": {
    transform: "translateX(20px) !important",
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  padding: "32px 0 !important",

  "& .MuiAccordionSummary-content": {
    margin: "0 !important",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "16px 0 24px !important",
  },
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: " 0 0 24px",
}));

const Title = styled(Typography)({
  fontWeight: 400,
});

export default Accordion;
