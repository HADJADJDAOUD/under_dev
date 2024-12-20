import React from "react";
import { MyChart } from "./components/MyChart";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      
      <MyChart />
      <ModeToggle />
    </ThemeProvider>
  );
}
