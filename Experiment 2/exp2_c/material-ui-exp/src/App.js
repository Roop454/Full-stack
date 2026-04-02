import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  Container,
  Avatar,
  Box,
  Snackbar,
  IconButton,
  InputAdornment,
  Stack,
  Divider
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [openSnack, setOpenSnack] = useState(false);

  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Please enter email and password");
    } else {
      setOpenSnack(true);
    }
  };

  return (
    <>
      {/* App Bar */}
      <AppBar
        position="static"
        sx={{
          background: "linear-gradient(90deg, #ae167b, #42a5f5)",
          boxShadow: 5,
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div">
            <b>Material UI Login System</b>
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Login Card */}
      <Container
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(to right, #f5f7fa, #c3cfe2)",
          padding: 2,
        }}
      >
        <Card
          sx={{
            maxWidth: 450,
            width: "100%",
            padding: 4,
            borderRadius: 3,
            boxShadow: 6,
            transition: "0.3s",
            "&:hover": { boxShadow: 12, transform: "scale(1.02)" },
          }}
        >
          <CardContent>
            {/* Avatar */}
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              mb={2}
            >
              <Avatar sx={{ bgcolor: "#42a5f5", mb: 1 }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography variant="h5" fontWeight="bold">
                Sign In
              </Typography>
            </Box>

            {/* Input Fields */}
            <TextField
              label="Email Address"
              fullWidth
              margin="normal"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              label="Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              margin="normal"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Login Button */}
            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{
                mt: 3,
                borderRadius: 2,
                padding: 1.5,
                fontSize: "1rem",
                background: "linear-gradient(90deg, #ae167b, #42a5f5)",
                "&:hover": { transform: "scale(1.03)" },
              }}
              onClick={handleLogin}
            >
              Login
            </Button>

            {/* OR Divider */}
            <Divider sx={{ my: 3 }}>OR</Divider>

            {/* Social Login Buttons */}
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                startIcon={<GoogleIcon />}
                fullWidth
                sx={{
                  textTransform: "none",
                  borderColor: "#db4437",
                  color: "#db4437",
                  "&:hover": {
                    backgroundColor: "#fce8e6",
                    borderColor: "#db4437",
                  },
                }}
              >
                Google
              </Button>

              <Button
                variant="outlined"
                startIcon={<FacebookIcon />}
                fullWidth
                sx={{
                  textTransform: "none",
                  borderColor: "#1877f2",
                  color: "#1877f2",
                  "&:hover": {
                    backgroundColor: "#e7f0fe",
                    borderColor: "#1877f2",
                  },
                }}
              >
                Facebook
              </Button>
            </Stack>

            {/* Footer */}
            <Typography
              variant="body2"
              align="center"
              sx={{ mt: 3, color: "text.secondary" }}
            >
              © 2026 Material UI Experiment
            </Typography>
          </CardContent>
        </Card>
      </Container>

      {/* Snackbar */}
      <Snackbar
        open={openSnack}
        autoHideDuration={3000}
        onClose={() => setOpenSnack(false)}
        message="Login Successful!"
      />
    </>
  );
}

export default App;
