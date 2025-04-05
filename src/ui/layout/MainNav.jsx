import { HiOutlineCalendarDays, HiOutlineHome } from "react-icons/hi2";
import { StyledNavLink } from "./NavLink";
import Logo from "../Logo";
import Heading from "../Heading";
import { useAuth } from "../../context/AuthContext";
import { CiLogout } from "react-icons/ci";
import Accordion from "../Accordion";

const navItems = [
  { path: "/dashboard", icon: <HiOutlineHome />, label: "الرئيسية" },
  { path: "/clients", icon: <HiOutlineCalendarDays />, label: "العملاء" },
  { path: "/cases", icon: <HiOutlineCalendarDays />, label: "القضايا" },
  { path: "/hearings", icon: <HiOutlineCalendarDays />, label: "الجلسات" },
  { path: "/tasks", icon: <HiOutlineCalendarDays />, label: "المهام" },
  { path: "/calender", icon: <HiOutlineCalendarDays />, label: "التقويم" },
  { path: "/invoices", icon: <HiOutlineCalendarDays />, label: "الفواتير" },
  {
    path: "/employees-and-jobs",
    icon: <HiOutlineCalendarDays />,
    label: "الموظفين والوظائف",
  },
  { path: "/documents", icon: <HiOutlineCalendarDays />, label: "مستندات" },
  {
    path: "/decisions",
    icon: <HiOutlineCalendarDays />,
    label: "قرارات الإدارة",
  },
];

function MainNav() {
  const { logout } = useAuth();
  return (
    <nav>
      <Logo />

      <Accordion />

      <StyledNavLink
        to={"/login"}
        onClick={() => {
          logout();
        }}
      >
        <CiLogout fontWeight={"bold"} color="var(--color-red-800)" />
        <Heading as={"h4"} color="red">
          تسجيل الخروج
        </Heading>
      </StyledNavLink>
    </nav>
  );
}

export default MainNav;
