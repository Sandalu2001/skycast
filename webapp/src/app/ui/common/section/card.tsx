"use client";

import { IconButton, Paper, Stack, Typography } from "@mui/material";
import { CardInterface, SectionType } from "@/app/lib/definitions";
import { extractVideoIdFromURL } from "@/app/lib/utils";
import { Delete, Edit, Visibility } from "@mui/icons-material";
import { useState } from "react";
import DeleteContentModal from "../modal/deleteContentModal";

const Card = ({ video, sectionTitle }: CardInterface) => {
  const [deleteContentClicked, setDeleteContentClicked] = useState(false);

  return (
    <>
      <Paper
        variant="elevation"
        sx={{
          minWidth: 30,
          minHeight: 300,
          borderRadius: 5,
          background: "common.white",
          boxShadow: 3,
          p: 2,
          px: 2,
        }}
      >
        <iframe
          title="Google Drive Viewer"
          src={extractVideoIdFromURL(video.youtubelink)}
          width="100%"
          height={"200px"}
          allowFullScreen
          sandbox="allow-same-origin allow-scripts"
          style={{
            borderRadius: 10,
          }}
        ></iframe>

        <Stack
          sx={{
            mt: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Stack
            gap={1}
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "primary.main",
                fontWeight: "bold",
              }}
            >
              {video.categoryname}
            </Typography>
            <Typography variant="h5">{video.title}</Typography>
          </Stack>
          {sectionTitle === SectionType.YOURS && (
            <Stack sx={{ flexDirection: "row", gap: 2 }}>
              <IconButton
                size="small"
                sx={{
                  zIndex: 1,
                  border: 1,
                  borderRadius: 2,
                  borderColor: "info.main",
                  ":hover": {},
                  color: "info.main",
                }}
              >
                <Edit fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  zIndex: 1,
                  border: 1,
                  borderRadius: 2,
                  borderColor: "error.main",
                  ":hover": {},
                  color: "error.main",
                }}
                onClick={() => setDeleteContentClicked(true)}
              >
                <Delete fontSize="small" />{" "}
              </IconButton>
            </Stack>
          )}
        </Stack>
        <Stack
          sx={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            justifyItems: "center",
            mt: 1,
          }}
        >
          <Typography variant="body2" sx={{ color: "GrayText" }}>
            {video.createdat.getFullYear() +
              "/" +
              (video.createdat.getMonth() + 1) +
              "/" +
              video.createdat.getDate()}
          </Typography>
          <Stack
            flexDirection={"row"}
            gap={1}
            sx={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              justifyItems: "center",
            }}
          >
            <Visibility fontSize="small" sx={{ color: "GrayText" }} />
            <Typography variant="body2" sx={{ color: "GrayText" }}>
              {Math.floor(Math.random() * 100)}
            </Typography>
          </Stack>
        </Stack>
      </Paper>

      <DeleteContentModal
        open={deleteContentClicked}
        handleClose={() => setDeleteContentClicked(false)}
        videoid={0}
      />
    </>
  );
};

export default Card;
