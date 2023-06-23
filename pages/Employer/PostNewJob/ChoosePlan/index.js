import styled from '@emotion/styled';
import { Box, Button } from '@mui/material'
import React from 'react'
const BasicButton = styled(Button)({
    color: "#ffff",
    padding: "10px",
    borderRadius: "10px",
    border: "2px solid #e7eaef",
    background: "#4fa9ff !important",
    textTransform: "capitalize",
    width: { xs: "100%", sm: "auto" },
    marginBottom: "10px",
  });
function Chooseplan(props) {
  return (
    <div>
      <Box sx={{display: "flex", justifyContent: "center" }}>
        <BasicButton onClick={props.postJobs}>Choose Free</BasicButton>
        <BasicButton onClick={props.postPremJobs}>Choose Premium</BasicButton>
      </Box>
    </div>
  )
}

export default Chooseplan
