// import React from "react";
// import { useState, useEffect } from "react";
// import { useAppContext } from "../../context/appContext";
// import FileBase64 from "react-file-base64";

// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";
// // import { Link } from "react-router-dom";

// const inititalState = {
//   image: "",
//   name: "",
//   price: "",
//   desc: "",
//   category: "",
//   contact: "",
// };

// const Sell = () => {
//   const [values, setValues] = useState(inititalState);

//   const { sellItem } = useAppContext();

//   const handleChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//     console.log("working");
//   };

//   const handleImage = ({ base64 }) => {
//     setValues({ ...values, image: base64 });
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     const { image, name, price, desc, category, contact } = values;
//     if (!image || !name || !price || !desc || !category || !contact) {
//       console.log("please provide all values");
//     }
//     const allData = { image, name, price, desc, category, contact };
//     sellItem(allData);
//   };
//   return (
//     <>
//       <form onSubmit={onSubmit}>
//         <FileBase64 type="file" multiple={false} onDone={handleImage} />

//         <input
//           type="text"
//           name="name"
//           value={values.name}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="price"
//           value={values.price}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="desc"
//           value={values.desc}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="category"
//           value={values.category}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           name="contact"
//           value={values.contact}
//           onChange={handleChange}
//         />
//         <button type="submit">click</button>
//       </form>
//     </>
//   );
// };

// export default Sell;

import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Dropzone from "react-dropzone";
import { Formik } from "formik";
import * as yup from "yup";

const Sell = () => {
  const ThingSchema = yup.object().shape({
    image: yup.string().required("required"),
    name: yup.string().required("required"),
    price: yup.string().required("required"),
    desc: yup.string().required("required"),
    category: yup.string().required("required"),
    contact: yup.string().required("required"),
  });

  let initialValuesRegister = {
    image: "",
    name: "",
    price: "",
    desc: "",
    category: "",
    contact: "",
  };

  const sellItem = async (values, onSubmitProps) => {
    const formData = new FormData();
    //console.log(formData);
    formData.append("image", values.image.name);
    for (let value in values) {
      formData.append(value, values[value]);
    }
    // console.log(formData);

    //console.log(values);
    const savedUserResponse = await fetch("/api/v1/item/sell", {
      method: "POST",
      body: formData,
    });
    const savedUser = await savedUserResponse.json();
    console.log(savedUser);
    onSubmitProps.resetForm();
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    await sellItem(values, onSubmitProps);
  };
  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={initialValuesRegister}
      validationSchema={ThingSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <form>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: undefined },
            }}
          >
            <Dropzone
              acceptedFiles=".jpg,.jpeg,.png"
              multiple={false}
              onDrop={(acceptedFiles) =>
                setFieldValue("image", acceptedFiles[0])
              }
            >
              {({ getRootProps, getInputProps }) => (
                <Box
                  {...getRootProps()}
                  border={`2px dashed green`}
                  p="1rem"
                  sx={{ "&:hover": { cursor: "pointer" } }}
                >
                  <input {...getInputProps()} />
                  {!values.image ? (
                    <p>Add Picture Here</p>
                  ) : (
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography>{values.image.name}</Typography>
                      <EditOutlinedIcon />
                    </Box>
                  )}
                </Box>
              )}
            </Dropzone>

            <TextField
              label="name"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.name}
              name="name"
              error={Boolean(touched.name) && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              label="price"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.price}
              name="price"
              error={Boolean(touched.price) && Boolean(errors.price)}
              helperText={touched.price && errors.price}
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              label="desc"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.desc}
              name="desc"
              error={Boolean(touched.desc) && Boolean(errors.desc)}
              helperText={touched.desc && errors.desc}
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              label="Category"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.category}
              name="category"
              error={Boolean(touched.category) && Boolean(errors.category)}
              helperText={touched.category && errors.category}
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              label="contact"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.contact}
              name="contact"
              error={Boolean(touched.contact) && Boolean(errors.contact)}
              helperText={touched.contact && errors.contact}
              sx={{ gridColumn: "span 1" }}
            />
          </Box>

          <Box>
            <Button
              fullWidth
              type="submit"
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: "green",
                color: "red",
                "&:hover": { color: "yellow" },
              }}
              onClick={handleSubmit}
            >
              Register Item
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Sell;
