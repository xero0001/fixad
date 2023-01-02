import "../shared/styles/globals.css";
import RecoilRootProvider from "./RecoilRootProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <RecoilRootProvider>{children}</RecoilRootProvider>
      </body>
    </html>
  );
}
