import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilFingerprint,
  cilNoteAdd,
  cilNotes,
  cilGroup,
  cilDescription,
  cilEnvelopeClosed,
  cilUser,
  cilPencil,
  cilSpeedometer,
  cilStar,
  cilArrowThickFromBottom,
  cilUserPlus,
  cilFax,
  cilInfo,
} from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    component: CNavTitle,
    name: "Extras",
  },
  {
    component: CNavGroup,
    name: "Accounts",
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Login",
        to: "/",
        icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "Register",
        to: "/register",
        icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavTitle,
    name: "SAMS",
  },
  {
    component: CNavGroup,
    name: "Student Management",
    to: "/base",
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "View",
        to: "/Trainee",
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "Add",
        to: "/AddTrainee",
        icon: <CIcon icon={cilNoteAdd} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "Edit",
        to: "/Trainee",
        icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Trainer Management",
    to: "/base",
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "View",
        to: "/dashboard",
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "Add",
        to: "/dashboard",
        icon: <CIcon icon={cilNoteAdd} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "Edit",
        to: "/dashboard",
        icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Notification Management",
    to: "/base",
    icon: <CIcon icon={cilEnvelopeClosed} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "View",
        to: "/dashboard",
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "Add",
        to: "/dashboard",
        icon: <CIcon icon={cilNoteAdd} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "Edit",
        to: "/dashboard",
        icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: "Access Management",
    to: "/base",
    icon: <CIcon icon={cilFingerprint} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "View",
        to: "/dashboard",
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "Add",
        to: "/dashboard",
        icon: <CIcon icon={cilNoteAdd} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: "Edit",
        to: "/dashboard",
        icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
      },
    ],
  },
  {
    component: CNavItem,
    name: "Bulk Upload",
    to: "/Bulk",
    icon: <CIcon icon={cilArrowThickFromBottom} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Activity Log",
    to: "/charts",
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Reports",
    to: "/charts",
    icon: <CIcon icon={cilFax} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "About PBMA",
    href: "https://www.linkedin.com/company/technical-training-institute-of-the-poona-blind-men-s-association/?originalSubdomain=in",
    icon: <CIcon icon={cilInfo} customClassName="nav-icon" />,
  },
];

export default _nav;
