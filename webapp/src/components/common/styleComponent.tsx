import React from "react";
import { Stack, alpha, useTheme, StackProps } from "@mui/material";

interface StyledContainerProps extends StackProps {
  children: React.ReactNode;
}

const StyledContainer = ({ children, sx, ...rest }: StyledContainerProps) => {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        borderRadius: 6,
        background: `linear-gradient(-45deg, ${
          theme.palette.info.main
        }, ${alpha(theme.palette.info.main, 0.8)})`,
        boxShadow: `
            inset 0px 5px 15px rgba(0, 0, 0, 0.08),
            0px 15px 30px rgba(0, 0, 0, 0.05)
          `,
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.01)",
          boxShadow: `
              inset 0px 5px 15px rgba(0, 0, 0, 0.08),
              0px 25px 50px rgba(0, 0, 0, 0.15)
            `,
        },
        px: 1,
        py: 3,
        textAlign: "center",
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Stack>
  );
};

export default StyledContainer;
