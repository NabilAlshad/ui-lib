import { Typography } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import Link from "next/Link";
import {
  BsBoundingBoxCircles,
  BsFillBarChartFill,
  BsFillPersonFill,
  BsLockFill,
  BsTable,
} from "react-icons/bs";
import { FaBusinessTime, FaProductHunt, FaServicestack } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";

const SideNav = styled("div")({
  background: "#663399",
  padding: "5%",
  height: "600vh",
});
// const styled=theme=>({
//   IconStyle:{
//     display: "block",
//   fontSize: "25px",
//   textAlign: "center",
//   marginBottom: "20px",
//   cursor: "pointer",
//   color: "white",
//   '&:hover': {
//     background: "#f00",
//  },
//   },

// })
const IconStyle = styled("a")({
  display: "block",
  fontSize: "20px",
  textAlign: "center",
  padding: "10px",
  marginBottom: "20px",
  cursor: "pointer",
  color: "white",
  "&:hover": {
    backgroundColor: "#7D48B1",
  },
});
const IconText = styled("p")({
  fontSize: "14px",
});

const Sidebar = () => {
  return (
    <SideNav>
      <Typography
        style={{ marginTop: "20px" }}
        variant="h4"
        color="white"
        align="center"
      >
        Gull
      </Typography>
      <div style={{ marginTop: "40px" }}>
        <Link href="/">
          <IconStyle>
            <BsFillBarChartFill />
            <IconText>Dashboard</IconText>
          </IconStyle>
        </Link>

        <Link href="/Table">
          <IconStyle>
            <BsTable />
            <IconText>Table</IconText>
          </IconStyle>
        </Link>
        <Link href="/Customer">
          <IconStyle>
            <BsFillPersonFill />
            <IconText>Customer</IconText>
          </IconStyle>
        </Link>
        <Link href="/Analytics">
          <IconStyle>
            <IoMdAnalytics />
            <IconText>Analytics</IconText>
          </IconStyle>
        </Link>
        <Link href="/Finance">
          <IconStyle>
            <FaBusinessTime />
            <IconText>Finance</IconText>
          </IconStyle>
        </Link>
        <Link href="/Products">
          <IconStyle>
            <FaProductHunt />
            <IconText>Products</IconText>
          </IconStyle>
        </Link>
        <Link href="/Integration">
          <IconStyle>
            <BsBoundingBoxCircles />
            <IconText>Integration</IconText>
          </IconStyle>
        </Link>
        <Link href="/Admin">
          <IconStyle>
            <BsLockFill />
            <IconText>Admin</IconText>
          </IconStyle>
        </Link>
        <Link href="/Services">
          <IconStyle>
            <FaServicestack />
            <IconText>Services</IconText>
          </IconStyle>
        </Link>
      </div>
    </SideNav>
  );
};

export default Sidebar;
