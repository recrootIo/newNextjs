import * as React from "react";
import { Box, FormLabel } from "@mui/material";
import { CheckBox } from "@mui/icons-material";

export function UpgradeJobCard() {
  return <Box sx={{ width: "100px" }}>
    {sectors.map((sec, index) => (
      <FormLabel
        key={index}
        control={<CheckBox
          size="small"
          checked={selectedSector.includes(sec)}
          name={sec}
          onChange={handleSector} />}
        label={sec} />
    ))}
  </Box>;
}
