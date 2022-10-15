import {Container, Typography, useTheme} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import {LockOutlined as LockOutlinedIcon} from '@mui/icons-material'
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import UserService from '../../api/service/UserService'
import {useState} from "react";
import { store } from '../../store'
import {useDispatch} from "react-redux";
import { login } from '../../store/reducers/loginSlice';
import {showAlert} from '../../store/reducers/errorSlice'
import {TOASTIFY_ERROR_FONTS} from "../../utils/constants";
import {useNavigate} from "react-router-dom";

function Copyright(props) {
    return (
            <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                {...props}
                >
                {"Copyright © "}
                Group G {" "}
                {new Date().getFullYear()}
                {"."}
            </Typography>
            );
}

const Login = () => {

    const theme = useTheme()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit() {
        const response = await UserService.login(`/api/login?username=${username}&password=${password}`, {})
        if(response.status === 200) {

            store.dispatch(login({
                accessToken: response.data?.access_token
            }))

            let config = {
                headers: {
                    'Authorization': `Bearer ${response.data?.access_token}`,
                }
            }

            const userInfoResponse = await UserService.getUser({
                username
            }, config)
            if(userInfoResponse.status === 200) {
                console.log(userInfoResponse)
                store.dispatch(login({
                    isLoggedIn: true,
                    userId: userInfoResponse?.data?.id,
                    name: userInfoResponse?.data?.name,
                    email: 'sithum@gmail.com',
                    userRole: userInfoResponse?.data?.roles[0]?.name,
                    lastLoggedIn: new Date().toUTCString(),
                }))

                store.dispatch(
    showAlert({
      shouldShow: true,
      message: "Successfully loggedin!",
      type: TOASTIFY_ERROR_FONTS.SUCCESS,
    }),
    );
                navigate("/dashboard", { replace: true })
            } else {
                store.dispatch(
                        showAlert({
                            shouldShow: true,
                            message: "Something Went Wrong!",
                            type: TOASTIFY_ERROR_FONTS.ERROR,
                        }),
                        );
            }


        }
         else {
             store.dispatch(
                     showAlert({
                         shouldShow: true,
                         message: "Something Went Wrong!",
                         type: TOASTIFY_ERROR_FONTS.ERROR,
                     }),
                     );
         }
    }

    return ( <Container component="main" maxWidth="xs">
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
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="username"
                  onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                  onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>

          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
              onClick={handleSubmit}
            sx={{ mt: 3, mb: 2, px: 4, pt:2, pb:2, backgroundColor: theme.palette.primary.main }}
          >
            Login
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Dont't have an account? Sign up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
    )
}

export default Login;