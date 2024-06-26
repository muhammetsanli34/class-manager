import Header from "@/components/Header";
import "../globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import AlertProvider from "@/providers/AlertProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider
          options={{
            // enableCssLayer: true,
          }}
        >
          <ThemeProvider theme={theme}>
            <Header />
            <AlertProvider>{children}</AlertProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
