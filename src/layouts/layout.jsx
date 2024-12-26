import React, { useEffect, useState } from "react";
import { Outlet } from "react-router";
import NavBar from "../components/navigartion/navBar";
import Footer from "../components/navigartion/footer";
import Preload from "../components/content/load/loadPage";

export default function Layout() {
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    // setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 5800);
  }, []);
  return (
    <div>
      <div className="">
        {Loading ? (
          <Preload />
        ) : (
          <>
            <div className="">
              <NavBar />

              <Outlet />
              <Footer />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
