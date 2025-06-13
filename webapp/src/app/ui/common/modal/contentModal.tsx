"use client";

import React from "react";
import {
  DialogActions,
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  Stack,
  Grid,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import { useFormik } from "formik";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import * as Yup from "yup";
import { AddContentModalProps } from "@/app/lib/definitions";
import CustomFormField from "../customFormField";
import CustomFormSelectField from "../customFormSelectField";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  categoryname: Yup.number().required("Required").min(0, "Required"),
  youtubelink: Yup.string().required("Required").min(0),
  description: Yup.string().required("Required"),
});

const ContentModal = ({ open, handleClose }: AddContentModalProps) => {
  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      title: "",
      categoryname: "",
      youtubelink: "",
      description: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Dialog
      open={open}
      key={1}
      sx={{
        ".MuiDialog-paper": {
          maxWidth: 520,
          maxHeight: 600,
          borderRadius: 4,
          minHeight: 400,
        },
      }}
    >
      <DialogTitle
        variant="h5"
        sx={{
          fontSize: 18,
          borderColor: "divider",
          display: "flex",
          flexDirection: "column",
          paddingY: 2.5,
        }}
      >
        Add New Content
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon color="primary" />
      </IconButton>
      <DialogContent sx={{ p: 2, m: 0, paddingX: 3, height: "100%" }}>
        <Grid container spacing={4} alignItems="center">
          <CustomFormField
            name={"title"}
            label={"Content Title"}
            value={formik.values.title}
            onChange={formik.handleChange}
            error={Boolean(formik.touched.title && formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            type={"text"}
          />
          <CustomFormSelectField
            name="categoryname"
            label="Content Category"
            itemArray={[
              {
                id: 0,
                name: "Programming",
              },
              {
                id: 1,
                name: "Web Development",
              },
              {
                id: 2,
                name: "Data Science",
              },
              {
                id: 3,
                name: "Mobile Development",
              },
            ]}
            value={formik.values.categoryname}
            onChange={formik.handleChange}
            error={Boolean(
              formik.touched.categoryname && formik.errors.categoryname
            )}
            helperText={
              formik.touched.categoryname && formik.errors.categoryname
            }
            type={"number"}
          />

          <CustomFormField
            name={"youtubelink"}
            label={"Youtube Link"}
            value={formik.values.youtubelink}
            onChange={formik.handleChange}
            error={Boolean(
              formik.touched.youtubelink && formik.errors.youtubelink
            )}
            helperText={formik.touched.youtubelink && formik.errors.youtubelink}
            type={"text"}
          />

          <CustomFormField
            name={"description"}
            label={"Description"}
            value={formik.values.description}
            onChange={formik.handleChange}
            error={Boolean(
              formik.touched.description && formik.errors.description
            )}
            helperText={formik.touched.description && formik.errors.description}
            type={"text"}
          />
        </Grid>
      </DialogContent>
      <DialogActions sx={{ pb: 2, paddingX: 2 }}>
        <Stack flexDirection={"row"} gap={2}>
          <Button
            sx={{
              borderRadius: 2,
            }}
            onClick={() => handleClose()}
            variant="outlined"
          >
            Cancel
          </Button>
          <LoadingButton
            type="submit"
            sx={{
              borderRadius: 2,
              boxShadow: "none",
              border: 0.5,
              borderColor: "divider",
            }}
            variant="contained"
            loading={false}
            loadingPosition="start"
            startIcon={<AddIcon fontSize="small" />}
            disabled={!formik.isValid}
          >
            Add
          </LoadingButton>
        </Stack>
      </DialogActions>
    </Dialog>
  );
};

export default ContentModal;
