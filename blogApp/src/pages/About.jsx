import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

function ContactForm() {
  const [state, handleSubmit] = useForm("xdorgwdn");
  if (state.succeeded) {
      return <p>Thanks for contacting!</p>;
  }
  return (
    <Box mt="3rem" sx={{ textAlign: "center" }}>
      <Paper
        elevation={3}
        sx={{ width: "15rem", padding: "1rem", margin: "auto" }}
      >
        <form onSubmit={handleSubmit} >
          <Typography>Contact Us</Typography>
          
          <TextField
            placeholder="Name"
            id="name"
            name="name"
          />
         
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />

          <TextField
            placeholder="Email"
            id="email"
            name="email"
            type="email"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          
          <TextField
            placeholder="Your wishes"
            multiline
            rows={2}
            maxRows={5}
            id="message"
            name="message"
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />

          <Button variant="contained" type="submit" disabled={state.submitting}>
            Submit
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

function About() {
  return <ContactForm />;
}

export default About;
