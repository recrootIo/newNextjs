import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { TabPanel } from "../JobListings/SearchSection";

const DatagridClient = ({ handleGetRowId, rows, columns, value }) => {
  return (
    <TabPanel id="simple-tab-0" value={value} index={0}>
      <div style={{ height: "550px", width: "100%" }}>
        <DataGrid
          sx={{ display: "flex", justifyContent: "center" }}
          getRowId={handleGetRowId}
          rows={rows}
          columns={columns}
        />
      </div>
    </TabPanel>
  );
};

export default DatagridClient;
