import AppHeader from "@/components/appHeader";
import PageLayout from "@/components/pageLayout";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <PageLayout>
      <Box>
        {/* Eyebrow label */}
        <Typography
          component="p"
          sx={{
            fontFamily: "'Courier New', monospace",
            fontSize: "1rem",
            letterSpacing: "0.3em",
            color: "#b868c8ff", // was #8927b0ff
            textTransform: "uppercase",
            mb: 2,
            opacity: 0.9,
          }}
        >
          QA Engineer · Tech Generalist · Netherlands
        </Typography>

        {/* Name headline */}
        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Georgia', serif",
            fontSize: { xs: "3.5rem", md: "6rem" },
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            color: "#eeeeeeff",
            mb: 4,
            "& em": {
              fontStyle: "italic",
              color: "#8927b0ff",
            },
          }}
        >
          Hi, I'm <em>Mihai.</em>
        </Typography>

        {/* Divider accent */}
        <Box
          sx={{
            width: 60,
            height: 3,
            bgcolor: "#8927b0ff",
            mb: 4,
            boxShadow: "0 0 12px #8927b0aa",
          }}
        />

        {/* Bio — split into punchy lines */}
        <Box
          sx={{
            borderLeft: "2px solid #5e5e5eff",
            pl: 3,
            display: "flex",
            flexDirection: "column",
            gap: 2.5,
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Georgia', serif",
              fontSize: { xs: "1.05rem", md: "1.25rem" },
              color: "#bdc3c9ff",
              lineHeight: 1.6,
            }}
          >
            10+ years across{" "}
            <Box component="span" sx={{ color: "#eeeeeeff", fontWeight: 700 }}>
              automotive
            </Box>{" "}
            and{" "}
            <Box component="span" sx={{ color: "#eeeeeeff", fontWeight: 700 }}>
              web
            </Box>{" "}
            industries. I care about delivery, adapt to what the project needs,
            and I'm just as comfortable writing test automation as I am running
            a sprint or demoing to stakeholders.
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Georgia', serif",
              fontSize: { xs: "1.05rem", md: "1.25rem" },
              color: "#bdc3c9ff",
              lineHeight: 1.6,
            }}
          >
            Outside of work I push heavy weights and build games — both hobbies
            that teach you a lot about{" "}
            <Box
              component="span"
              sx={{ color: "#b868c8ff", fontStyle: "italic" }}
            >
              discipline, iteration, and not giving up
            </Box>{" "}
            when things get hard.
          </Typography>

          <Typography
            sx={{
              fontFamily: "'Courier New', monospace",
              fontSize: "1rem",
              color: "#bdc3c9ff", // was #5e5e5eff
              letterSpacing: "0.05em",
              mt: 1,
            }}
          >
            → Open to remote &amp; hybrid opportunities
          </Typography>
        </Box>
      </Box>
    </PageLayout>
  );
}
