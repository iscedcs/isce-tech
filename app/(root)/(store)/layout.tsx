import React from "react";

export default function StoreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`bg-foreground min-h-screen flex flex-col`}>
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
