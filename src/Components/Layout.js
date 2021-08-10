import { Grid } from "@material-ui/core";
import HeaderNav from "./HeaderNav";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <Grid container>
      <Grid item lg={1}>
        <Sidebar></Sidebar>
      </Grid>
      <Grid item lg={11}>
        <HeaderNav></HeaderNav>
        {children}
      </Grid>
    </Grid>
  );
};

export default Layout;
