import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import styles from "./LoginForm.module.scss";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#212b36",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    "&.Mui-focused fieldset": {
      border: "1px solid #212b36",
    },
  },
});

export default function LoginForm() {
  const [type, setType] = useState("password");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
    if (showPassword) {
      setType("text");
    } else {
      setType("password");
    }
  };

  console.log(":::::: ~ showPassword:", showPassword);

  return (
    <div className={styles.formContainer}>
      <div className={styles.input}>
        <CssTextField label="Username" fullWidth />
      </div>
      <div className={styles.input}>
        <CssTextField
          label="Password"
          type={type}
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <button className={styles.buttonHeader}>Login</button>
    </div>
  );
}
