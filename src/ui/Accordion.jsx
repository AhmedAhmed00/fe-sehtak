import React, { useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { StyledNavLink } from "./layout/NavLink";
import {
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineMap,
} from "react-icons/hi";
import { FaHospital, FaUserMd, FaCity } from "react-icons/fa";
import {
  MdScanner,
  MdCategory,
  MdSubtitles,
  MdBuild,
  MdOutlineAttachMoney,
  MdManageAccounts,
  MdOutlineCampaign,
} from "react-icons/md";
import { BiTestTube } from "react-icons/bi";

const groupedNavItems = [
  {
    title: "All Users",
    links: [
      { title: "Hospital", path: "/hospital", icon: <FaHospital size={18} /> },
      { title: "Doctor", path: "/doctor", icon: <FaUserMd size={18} /> },
      { title: "Scanner", path: "/scanner", icon: <MdScanner size={18} /> },
      { title: "Lab", path: "/lab", icon: <BiTestTube size={18} /> },
    ],
  },
  {
    title: "Specialization",
    links: [
      {
        title: "Specialization",
        path: "/specialization",
        icon: <MdCategory size={18} />,
      },
      {
        title: "Sub Specialization",
        path: "/sub-specialization",
        icon: <MdSubtitles size={18} />,
      },
    ],
  },
  {
    title: "Location",
    links: [
      { title: "City", path: "/city", icon: <FaCity size={18} /> },
      { title: "Region", path: "/region", icon: <HiOutlineMap size={18} /> },
    ],
  },
];

const standAloneNavItems = [
  {
    title: "Orders",
    path: "/orders",
    icon: <HiOutlineShoppingCart size={18} />,
  },
  { title: "Clients", path: "/clients", icon: <HiOutlineUsers size={18} /> },
  { title: "Services", path: "/services", icon: <MdBuild size={18} /> },
  {
    title: "Finance",
    path: "/finance",
    icon: <MdOutlineAttachMoney size={18} />,
  },
  {
    title: "Management",
    path: "/mangment",
    icon: <MdManageAccounts size={18} />,
  },
  { title: "Ads", path: "/ads", icon: <MdOutlineCampaign size={18} /> },
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
