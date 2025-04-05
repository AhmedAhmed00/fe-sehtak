import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../Sidebar";
import Header from "./Header";
import styled from "styled-components";
import { useEffect, useState } from "react";
import routeTitles from "../../data/routeTitles";
import Accordion from "../Accordion";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  ${"" /* padding: 2rem 1.8rem 0.4rem;  */}
  ${"" /* width: 97%; */}
  ${"" /* margin-top: 20px; */}
  border: 1px solid var(--color-grey-200);
  ${"" /* border-radius: 8px; */}
`;

function AppLayout() {
  const [title, setTitle] = useState("");
  const location = useLocation();
  useEffect(() => {
    let t = routeTitles[location.pathname] || "البيانات";
    if (location.search.includes("update")) {
      t = t.replace(/إضافة/, "تعديل");
    }
    setTitle(t);
  }, [location.pathname, setTitle, location.search]);

  return (
    <StyledAppLayout>
      <Header title={title} />
      <Sidebar />
      <Main>
        <Outlet context={{ setTitle }} />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
