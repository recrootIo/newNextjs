const styles = {
  blue: {
    backgroundColor: "#4F9AFF",
    // height:'100vh',
    display: { md: "block", xs: "none" },
  },
  signup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  img: {
    marginTop: "24px",
  },
  sinup: {
    fontWeight: 700,
    fontSize: "48px",
    lineHeight: "70px",
    letterSpacing: "1.5px",
    marginTop: { md: "50px", xs: "20px" },
  },
  btncand: {
    border: "1px solid white",
    color: "white !important",
    width: { lg: "480px" },
    height: { lg: "76px" },
    textTransform: "capitalize",
    p:'10px'
  },
  mntxt: {
    fontSize: "24px",
  },
  sbtxt: {
    fontSize: "16px",
  },
  grid: {
    marginTop: "60px",
    rowGap: { md: "35px", xs: "15px" },
    paddingRight: "30px",
    paddingLeft: "20px",
  },
  rightbtn: {
    marginTop: "50%",
    paddingBottom: "662px",
    paddingRight: "33px",
    paddingLeft: "33px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: { md: "38px" },
  },
  menu: {
    border: "1px solid grey",
    color: "#7a7d80",
    width: "100%",
    padding: "15px 15px",
    justifyContent: "space-between",
  },
  topspc: {
    display: { md: "none", xs: "flex" },
    paddingBottom: { md: "0", xs: "20px" },
    paddingTop: { md: "0", xs: "20px" },
    justifyContent: "space-evenly",
  },
  topbtn: {
    border: "1px solid #fff",
    backgroundColor: "#4F9AFF",
    color: "white !important",
    textTransform: "capitalize",
  },
  candtxt: {
    fontSize: { md: "24px", sm: "16px" },
    fontWeight: "700",
    lineHeight: "35px",
    letterSpacing: "1.5px",
  },
  candsub: {
    fontSize: "18px",
    fontWeight: "400",
    marginTop: "5px",
    marginLeft: "10px",
  },
};

export default styles;