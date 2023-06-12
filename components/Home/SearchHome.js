import React, { useState } from "react";
import Container from "@mui/material/Container";
import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  InputBase,
  Radio,
  RadioGroup,
  Stack,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import { NEUTRAL } from "../../theme/colors";
import { MAX } from "../../theme/spacings";
import Image from "next/image";
import { useRouter } from "next/router";

const StyledButton = styled("button")({
  height: "62px",
  backgroundColor: "#00339B",
  color: NEUTRAL,
  borderRadius: "5px",
  width: "100%",
  fontWeight: 700,
  fontSize: "20px",
});

const SearchHome = () => {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");

  const router = useRouter();

  const changeAddress = (e) => {
    setAddress(() => e.target.value);
  };

  const changeTitle = (e) => {
    setTitle(() => e.target.value);
  };

  const searchData = () => {
    router.push(`/jobs?title=${title}&address=${address}`);
  };

  return (
    <div style={{ backgroundColor: "#D4F0FC" }}>
      <Container>
        <Grid container>
          <Grid
            item
            md={9}
            sm={12}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Stack sx={{ gap: "10px" }} className="searchFormHome">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pr: { sm: 0, xs: 1 },
                  pl: { sm: 0, xs: 1 },
                  backgroundColor: "#F8FDFF",
                  height: MAX,
                }}
              >
                <SearchIcon
                  sx={{
                    marginRight: { sm: "38px", xs: "10px" },
                    marginLeft: { sm: "34px", xs: "10px" },
                    color: "#A6A6A6",
                    height: MAX,
                  }}
                />
                <InputBase
                  sx={{ ml: 1, flex: 1, height: MAX }}
                  placeholder="Keyword or title"
                  inputProps={{ "aria-label": "Keyword or title" }}
                  value={title}
                  onChange={changeTitle}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pr: { sm: 0, xs: 1 },
                  pl: { sm: 0, xs: 1 },

                  backgroundColor: "#F8FDFF",
                  height: MAX,
                }}
              >
                <AddLocationIcon
                  sx={{
                    marginRight: { sm: "38px", xs: "10px" },
                    marginLeft: { sm: "34px", xs: "10px" },
                    color: "#A6A6A6",
                    height: MAX,
                  }}
                />
                <InputBase
                  sx={{ ml: 1, flex: 1, height: MAX }}
                  placeholder="Location"
                  inputProps={{ "aria-label": "Keyword or title" }}
                  value={address}
                  onChange={changeAddress}
                />
              </Box>

              <FormControl>
                <RadioGroup
                  sx={{
                    flexDirection: "row",
                    marginTop: "26px",
                    marginBottom: "30px",
                    justifyContent: "center",
                    gap: { sm: "40px", xs: "5px" },
                  }}
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  defaultValue="Permanent"
                  //   onChange={typeChange}
                  //   value={search.type}
                >
                  <FormControlLabel
                    style={{ color: "#034275", fontSize: "20px" }}
                    value="Remote"
                    control={<Radio style={{ color: "#034275" }} />}
                    label="Remote"
                  />
                  <FormControlLabel
                    style={{ color: "#034275" }}
                    value="Onsite"
                    control={<Radio style={{ color: "#034275" }} />}
                    label="Onsite"
                  />
                  <FormControlLabel
                    style={{ color: "#034275" }}
                    value="Hybrid"
                    control={<Radio style={{ color: "#034275" }} />}
                    label="Hybrid"
                  />
                </RadioGroup>
              </FormControl>

              <StyledButton onClick={() => searchData()}>Search</StyledButton>
            </Stack>
          </Grid>

          <Grid item md={3} xs={0}>
            <Image
              alt=""
              src="/searchImage.png"
              className="searchHomeImage"
              width="0"
              height="0"
              sizes="100vw"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SearchHome;
