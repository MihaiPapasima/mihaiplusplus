import AppHeader from "@/components/appHeader";
import PageLayout from "@/components/pageLayout";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

export default function Apps() {
  return (
    <PageLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography variant="h3" sx={{ py: 2 }}>
          Apps
        </Typography>
        <Typography variant="h5" sx={{ py: 1 }}>
          Coming soon!
        </Typography>
      </Box>
    </PageLayout>
  );
}
