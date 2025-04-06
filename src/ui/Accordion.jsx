import React, { useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { StyledNavLink } from "./layout/NavLink";
import {
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineMap,
} from "react-icons/hi";
import {
  FaHospital,
  FaUserMd,
  FaCity,
  FaCameraRetro,
  FaFlask,
  FaBone,
  FaGlobeAmericas,
  FaMoneyBillWave,
  FaCreditCard,
  FaClipboardList,
  FaClock,
  FaSearch,
  FaUsers,
} from "react-icons/fa";
import {
  MdCategory,
  MdOutlineAttachMoney,
  MdManageAccounts,
  MdOutlineCampaign,
  MdFilterList,
  MdSettings,
  MdBusiness,
} from "react-icons/md";

const groupedNavItems = [
  {
    title: "All Users",
    links: [
      {
        title: "Hospital",
        path: "/all-users/hospital",
        icon: <FaHospital />,
      },
      {
        title: "Doctor",
        path: "/all-users/doctor",
        icon: <FaUserMd />,
      },
      {
        title: "Scanner",
        path: "/all-users/scanner",
        icon: <FaCameraRetro />,
      },
      {
        title: "Lab",
        path: "/all-users/lab",
        icon: <FaFlask />,
      },
      {
        title: "Physical Therapy",
        path: "/all-users/physical-therapy",
        icon: <FaBone />,
      },
    ],
  },
  {
    title: "Specialization",
    links: [
      {
        title: "Specialization",
        path: "/specialization/specialization",
        icon: <MdCategory />,
      },
      {
        title: "Sub Specialization",
        path: "/specialization/sub-specialization",
        icon: <MdFilterList />,
      },
    ],
  },
  {
    title: "Location",
    links: [
      {
        title: "City",
        path: "/location/city",
        icon: <FaCity />,
      },
      {
        title: "Region",
        path: "/location/region",
        icon: <FaGlobeAmericas />,
      },
    ],
  },
  {
    title: "Finance",
    links: [
      {
        title: "By Providers",
        path: "/finance/by-providers",
        icon: <FaMoneyBillWave />,
      },
      {
        title: "By Orders",
        path: "/finance/by-orders",
        icon: <FaCreditCard />,
      },
    ],
  },
  {
    title: "Orders",
    links: [
      {
        title: "Orders",
        path: "/orders/orders",
        icon: <FaClipboardList />,
      },
      {
        title: "Pending",
        path: "/orders/pending",
        icon: <FaClock />,
      },
    ],
  },

  {
    title: "Services",
    links: [
      {
        title: "Services admin",
        path: "/services/services-admin",
        icon: <MdSettings />,
      },
      {
        title: "Lab Categories",
        path: "/services/lab-categories",
        icon: <FaFlask />,
      },
      {
        title: "Scan Categories",
        path: "/services/scan-categories",
        icon: <FaSearch />,
      },
    ],
  },
  {
    title: "Management",
    links: [
      {
        title: "Branches",
        path: "/management/branches",
        icon: <MdBusiness />,
      },

      {
        title: "Users",
        path: "/management/users",
        icon: <FaUsers />,
      },
    ],
  },
];

const standAloneNavItems = [
  { title: "Clients", path: "/clients", icon: <HiOutlineUsers /> },

  { title: "Ads", path: "/ads", icon: <MdOutlineCampaign /> },
];

const AccordionItem = styled.div`
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const AccordionTitle = styled.h3`
  margin: 0;
  padding: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 1.7rem;

  user-select: none;
  transition: color 0.2s ease;

  &:hover {
    color: #000;
  }

  ${({ active }) =>
    active &&
    css`
      color: #000;
      font-weight: 600;
    `}
`;

const AccordionBody = styled.div`
  overflow: hidden;
  transition: height 0.3s ease;
  height: ${({ active, bodyHeight }) => (active ? `${bodyHeight}px` : "0")};
`;

const AccordionContent = styled.div`
  padding: 0 1rem 1rem;
`;

// AccordionItems Component
const AccordionItems = React.memo(
  ({ accordionContent, currentAccordion, toggleAccordion }) => {
    const contentRefs = useRef([]);

    const handleRef = useCallback((index, el) => {
      contentRefs.current[index] = el;
    }, []);

    return accordionContent.map(({ title, links }, i) => {
      const isActive = currentAccordion === i;
      const bodyHeight = contentRefs.current[i]?.clientHeight || 0;

      return (
        <AccordionItem key={`accordion-item-${i}`}>
          <AccordionTitle
            active={isActive}
            onClick={() =>
              toggleAccordion(i, contentRefs.current[i]?.clientHeight || 0)
            }
          >
            {title}
            <span>{isActive ? "−" : "+"}</span>
          </AccordionTitle>
          <AccordionBody active={isActive} bodyHeight={bodyHeight}>
            <AccordionContent ref={(el) => handleRef(i, el)}>
              {links.map((link, index) => (
                <StyledNavLink key={index} to={link.path}>
                  {link.icon || ""}
                  {link.title}
                </StyledNavLink>
              ))}
            </AccordionContent>
          </AccordionBody>
        </AccordionItem>
      );
    });
  }
);

AccordionItems.propTypes = {
  accordionContent: PropTypes.array.isRequired,
  currentAccordion: PropTypes.number,
  toggleAccordion: PropTypes.func.isRequired,
};

// Main Accordion Component
export default function Accordion() {
  const [currentAccordion, setCurrentAccordion] = useState(null);

  const toggleAccordion = useCallback((index, height) => {
    setCurrentAccordion((prev) => (prev === index ? null : index));
  }, []);

  return (
    <>
      <AccordionItems
        accordionContent={groupedNavItems}
        currentAccordion={currentAccordion}
        toggleAccordion={toggleAccordion}
      />

      {standAloneNavItems.map((link, index) => (
        <StyledNavLink key={index} to={link.path}>
          {link.icon} {link.title}
        </StyledNavLink>
      ))}
    </>
  );
}
