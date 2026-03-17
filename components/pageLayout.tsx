import AppHeader from "@/components/appHeader";
import { Box, Typography } from "@mui/material";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppHeader />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "flex-start",
          px: { xs: 3, md: 10 },
          pt: { xs: 8, md: 5 },
          pb: { xs: 8, md: 4 },
        }}
        test-name="content"
      >
        {children}
      </Box>
    </Box>
  );
}
