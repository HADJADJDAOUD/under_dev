import React from "react";
import { MyChart } from "./components/MyChart";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { RadialChart } from "./components/RadialChart";
import { AreaChart } from "./components/AreaChart";
export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      
      <MyChart />
      <ModeToggle />
      <RadialChart />
      <AreaChart />
    </ThemeProvider>
  );
}
