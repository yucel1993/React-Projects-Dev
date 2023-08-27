import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

function About() {
  const defaultTheme = createTheme();
  const [state, handleSubmit] = useForm("xdorgwdn");
  const [toggle, setToggle] = useState(false);

  const handleMySubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);

    setToggle(true);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      {!toggle ? (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <VerifiedUserIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Write To Me
            </Typography>
            <form onSubmit={handleMySubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="Comment"
                    label="Commnet"
                    type="text"
                    id="comment"
                    autoComplete="new-comment"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={state.submitting}
              >
                Submit
              </Button>
            </form>
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ mt: 5 }}
          >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Container>
      ) : (
        <Typography
          variant="h3"
          color="text.secondary"
          align="center"
          sx={{ mt: 35 }}
        >
          Thank You For Reaching Out To Me
        </Typography>
      )}
    </ThemeProvider>
  );
}

export default About;
