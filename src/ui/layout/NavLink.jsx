import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  &:i {
    color: var(--color-text);
  }
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    color: var(--color-grey-600);
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0.4rem 0;
    padding: 0.8rem 0.8rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-light);
    background-color: var(--color-primary);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-grey-600);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-light);
  }
`;
