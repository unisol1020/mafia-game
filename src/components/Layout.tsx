import CustomQueryClientProvider from "@/providers/CustomQueryClientProvider";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <CustomQueryClientProvider>
        {children}
        <Toaster />
      </CustomQueryClientProvider>
    </ThemeProvider>
  );
}
