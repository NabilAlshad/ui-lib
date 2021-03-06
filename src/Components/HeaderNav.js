import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles, styled } from "@material-ui/styles";
import Image from "next/image";
import { BsBell } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";

const Header = styled("div")({
  padding: "2%",
});

const AdminPart = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  marginTop: "20px",
});

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 10px",
    display: "flex",
    borderRadius: "30px",
    alignItems: "center",
    marginLeft: "-80%",
    width: 500,
  },
  input: {
    marginLeft: 10,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const HeaderNav = () => {
  const classes = useStyles();
  return (
    <Header>
      <Grid container>
        <Grid item lg={4}>
          <FontAwesomeIcon
            style={{ fontSize: "30px", marginTop: "10px", color: "#663399" }}
            icon={faBars}
          />
        </Grid>

        {/* form field  */}
        <Grid item lg={4}>
          <Paper component="form" className={classes.root}>
            <InputBase className={classes.input} />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>

        <Grid item lg={4}>
          <AdminPart>
            <FaPlus style={{ color: "#663399", fontSize: "30px" }} />
            <BsBell
              style={{
                fontSize: "30px",
                marginLeft: "15px",
                color: "#663399",
                marginRight: "20px",
              }}
            />
            <Image src="/dummy-man.png" width={40} height={40} />
          </AdminPart>
        </Grid>
      </Grid>
    </Header>
  );
};

export default HeaderNav;
