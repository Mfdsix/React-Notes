import React from "react";
import AppHeader from "../common/AppHeader";
import AppFooter from "../common/AppFooter";

function UserLayout({ children }) {
  return (
    <>
      <AppHeader />
      <main>{children}</main>
      <AppFooter />
    </>
  );
}

export default UserLayout;
