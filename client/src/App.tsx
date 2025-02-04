
import { ThemeProvider } from "@/components/theme-provider";



import Page from "./app/dashboard/page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
       <Router>
       <Routes>
       <Route path="/" element={<Page  />} />
       <Route path="/age-of-visitors" element={<Page />} />
          <Route path="/number-of-visitors-area" element={<Page />} />
          <Route path="/number-of-visitors-bar" element={< Page/>} />
          <Route path="/users" element={< Page/>} />
          <Route path="/location" element={< Page/>} />
          
      </Routes>
      </Router>
    </ThemeProvider>
  );
}
