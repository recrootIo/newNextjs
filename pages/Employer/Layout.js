import EmployerNavbar from "@/components/EmployerNavbar/EmployerNavbar";
import { Box } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <div sx={{ minHeight: "100vh" }}>
      <EmployerNavbar />
      <Box
        sx={{
          backgroundImage: 'url("/EmployerDashboardBG.svg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "250px",
        }}
      ></Box>
      {/* <div>{children}</div> */}
    </div>
  );
};

export default Layout;
