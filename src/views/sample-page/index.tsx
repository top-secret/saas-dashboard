// material-ui
import { Button, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// project imports
import MainCard from "ui-component/cards/MainCard";
import { getAllLeads } from "../../store/leadsActions";
import Table from "../../ui-component/table";

// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
  const [data, setData] = useState([]);
  const leadsSelector = useSelector((state) => state.leads);

  useEffect(() => {
    if (!leadsSelector.error && leadsSelector.success) {
      console.log(leadsSelector);
      setData([...leadsSelector.leads]);
    }
  }, [leadsSelector]);

  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(getAllLeads());
  }, []);
  return (
    <>
      <Stack direction={"row"} justifyContent={"end"} py={2}>
        <Button
          disableElevation
          size="large"
          type="submit"
          variant="contained"
          color="secondary"
        >
          Add Lead
        </Button>
      </Stack>

      <MainCard title="Leads Board">
        <Table data={data} />
      </MainCard>
    </>
  );
};

export default SamplePage;
