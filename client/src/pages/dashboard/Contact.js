import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function MultilineTextFields() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginX: "21rem",
        borderRadius: "0.5rem",
      }}
    >
      <Box sx={{ fontSize: "2rem" }}>Contact Us</Box>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "40ch" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <TextField
            id="outlined-multiline-flexible"
            label="Email Address"
            multiline
            maxRows={4}
          />
          <TextField
            id="outlined-textarea"
            label="Phone Number"
            placeholder="Phone Number"
            multiline
          />
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={8}
            defaultValue=""
          />
        </div>
      </Box>
    </Box>
  );
}
