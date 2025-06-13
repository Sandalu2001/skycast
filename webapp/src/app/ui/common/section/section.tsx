"use client";

import {
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import Card from "./card";
import { SectionInterface, SectionType } from "@/app/lib/definitions";
import ContentModal from "@/app/ui/common/modal/contentModal";

const Section = ({ title, videos }: SectionInterface) => {
  const [addContentClicked, setAddContentClicked] = useState(false);
  // test

  return (
    <>
      <Stack
        sx={{
          marginY: 5,
          gap: 5,
        }}
      >
        <Stack
          flexDirection={"row"}
          sx={{
            width: "100%",
            alignContent: "space-between",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4" color={"GrayText"}>
            {title}
          </Typography>
          {title === SectionType.YOURS && (
            <>
              <Button
                variant="contained"
                sx={{ borderRadius: 3 }}
                startIcon={<AddIcon />}
                onClick={() => setAddContentClicked(true)}
              >
                Add Video
              </Button>
              <ContentModal
                open={addContentClicked}
                handleClose={() => setAddContentClicked(false)}
              />
            </>
          )}
        </Stack>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={6.5} columns={12}>
            {videos.map((video, id) => (
              <Grid size={4} key={id}>
                <Card video={video} sectionTitle={title as SectionType} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Divider textAlign="center" sx={{ height: 1 }}>
          <IconButton
            size="large"
            color="primary"
            sx={{
              borderRadius: 6,
              backgroundColor: "primary.light",
              color: "common.white",
              ":hover": {
                backgroundColor: "primary.main",
              },
            }}
          >
            <KeyboardArrowDownIcon fontSize="large" />
          </IconButton>
        </Divider>
      </Stack>
    </>
  );
};

export default Section;
