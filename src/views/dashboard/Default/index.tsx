import { useEffect, useState } from "react";

// material-ui
import { Grid } from "@mui/material";

// project imports
import EarningCard from "./TotalConversion";
import TotalOrderLineChartCard from "./TotalLeads";
import TotalIncomeDarkCard from "./ActiveLeadsCard";
import TotalIncomeLightCard from "./HotLeadsCard";
import TotalGrowthBarChart from "./TotalGrowthBarChart";
import { gridSpacing } from "store/constant";
import { useDispatch } from "react-redux";
import { getDshboardData } from "../../../store/dashboardActions";

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(false);
    dispatch(getDshboardData());
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <TotalOrderLineChartCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={12} sm={12} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeDarkCard isLoading={isLoading} />
              </Grid>
              <Grid item sm={6} xs={12} md={6} lg={12}>
                <TotalIncomeLightCard isLoading={isLoading} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12}>
            <TotalGrowthBarChart isLoading={isLoading} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
