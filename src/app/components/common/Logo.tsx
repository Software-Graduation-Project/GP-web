import { logoImg } from "../../../assets";
import { SectionIdEnum } from "../../types";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Logo = () => {
  const navigate = useNavigate();
  return (
    <Box
      component="div"
      display="flex"
      alignItems="center"
      gap={1}
      width="fit-content"
      onClick={() => {
        if (location.pathname !== "/") {
          navigate("/");
        }
        const section = document.getElementById(SectionIdEnum.offers);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }}
      style={{ cursor: "pointer" }}
    >
      <img width="60px" height="40px" src={logoImg} alt="logo" />
      <Typography
        variant="h5"
        sx={{ width: "min-content", fontFamily: "DynaPuff", color: "black" }}
      >
        Designify
      </Typography>
    </Box>
  );
};
