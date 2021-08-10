import { Grid, Paper } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { BsCircleHalf, BsPersonCheckFill } from "react-icons/bs";
import { FaHandHoldingUsd, FaMoneyBill } from "react-icons/fa";

const PaperStyle = styled(Paper)({
  background: "#FFFFFF",
  display: "flex",
  justifyContent: "space-between",
  boxShadow: "20px 20px 20px white",
  width: "100%",
  paddingRight: "5%",
  marginLeft: "30px",
  alignItems: "center",
});
const IconPart = styled("div")({
  padding: "10px",
});
const DescriptionPart = styled("div")({
  marginRight: "70px",
});

const Dashboard = () => {
  return (
    <div style={{ margin: "10%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3} lg={3}>
          <PaperStyle variant="outlined" circle>
            <IconPart>
              <p
                style={{
                  color: "#663399",
                  fontSize: "20px",
                  background: "#F2F1FE",
                  padding: "20px",
                  borderRadius: "20%",
                }}
              >
                <BsPersonCheckFill />
              </p>
            </IconPart>
            <DescriptionPart>
              <h4 style={{ color: "#663399", marginBottom: "-20px" }}>
                New Leds
              </h4>
              <h2 style={{ color: "#663399" }}>520</h2>
            </DescriptionPart>
          </PaperStyle>
        </Grid>
        {/* 2nd item  */}
        <Grid item spacing={2} xs={12} md={3} lg={3}>
          <PaperStyle variant="outlined" circle>
            <IconPart>
              <p
                style={{
                  color: "#3981F7",
                  fontSize: "20px",
                  fontWeight: "bold",
                  background: "#C5DBFF",
                  padding: "20px",
                  borderRadius: "20%",
                }}
              >
                <FaHandHoldingUsd />
              </p>
            </IconPart>
            <DescriptionPart>
              <h4 style={{ color: "#43454D", marginBottom: "-20px" }}>Sales</h4>
              <h2 style={{ color: "#3981F7" }}>$5042</h2>
            </DescriptionPart>
          </PaperStyle>
        </Grid>
        {/* 3rd Item  */}
        <Grid item spacing={2} xs={12} md={3} lg={3}>
          <PaperStyle variant="outlined" circle>
            <IconPart>
              <p
                style={{
                  color: "#5DAE49",
                  fontSize: "20px",
                  background: "#BCDDB3",
                  padding: "20px",
                  borderRadius: "20%",
                }}
              >
                <BsCircleHalf />
              </p>
            </IconPart>
            <DescriptionPart>
              <h4 style={{ color: "#43454D", marginBottom: "-20px" }}>
                Orders
              </h4>
              <h2 style={{ color: "#5DAE49" }}>80</h2>
            </DescriptionPart>
          </PaperStyle>
        </Grid>

        {/* 4th item  */}
        <Grid item spacing={2} xs={12} md={3} lg={3}>
          <PaperStyle variant="outlined" circle>
            <IconPart>
              <p
                style={{
                  color: "#FFC620",
                  fontSize: "20px",
                  background: "#FFF6E0",
                  padding: "20px",
                  borderRadius: "20%",
                }}
              >
                <FaMoneyBill />
              </p>
            </IconPart>
            <DescriptionPart>
              <h4 style={{ color: "#43454D", marginBottom: "-20px" }}>
                Expense
              </h4>
              <h2 style={{ color: "#FFC620" }}>$1200</h2>
            </DescriptionPart>
          </PaperStyle>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
