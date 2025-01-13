import * as React from "react";
import { useRef } from "react";
import {
  Menu as MuiMenu,
  MenuItem as MuiMenuItem,
  MenuProps as MUIMenuProps,
  styled,
  ListItemIcon,
  Typography,
} from "@mui/material";

interface CustomOptions {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
}

interface CustomMenuProps {
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
  options: CustomOptions[];
}

export type MenuProps = Omit<MUIMenuProps, "open"> & CustomMenuProps;

const Menu = ({ options, children, open, handleClose, ...props }: MenuProps) => {
  const anchorRef = useRef(null);

  return (
    <>
      <MenuButtonWrapper ref={anchorRef}>{children}</MenuButtonWrapper>
      <StyledMenu
        {...props}
        anchorEl={anchorRef.current}
        id="marketplace-menu"
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
        }}
        transformOrigin={{ horizontal: "center", vertical: "top" }}
        anchorOrigin={{ horizontal: "center", vertical: "bottom" }}>
        {options.map((option) => (
          <MenuItem key={option.label + "menu-item"} onClick={option.onClick}>
            <a href={option.href || ""}>
              {option.icon && <ListItemIcon>{option.icon}</ListItemIcon>}
              <Typography color="textColor.dark">{option.label}</Typography>
            </a>
          </MenuItem>
        ))}
      </StyledMenu>
    </>
  );
};

const StyledMenu = styled(MuiMenu)(({ theme }) => ({
  overflow: "visible",
  marginTop: "1.5px",
  borderRadius: "12px",

  "& .MuiAvatar-root": {
    width: "32px",
    height: "32px",
    marginLeft: "-0.5px",
    marginRight: "1px",
  },
  "&:before": {
    content: '""',
    display: "block",
    position: "absolute",
    top: 0,
    right: 14,
    width: 10,
    height: 10,
    backgroundColor: theme.palette.primary.light,
    transform: "translateY(-50%) rotate(45deg)",
    zIndex: 0,
  },
}));

const MenuButtonWrapper = styled("div")(() => ({
  display: "inline-flex",
  cursor: "pointer",
}));

const MenuItem = styled(MuiMenuItem)(({ theme }) => ({
  "& svg": {
    fill: theme.palette.social.main,
  },
}));

export default Menu;
