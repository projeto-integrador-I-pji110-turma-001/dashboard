import { ReactNode } from "react";

export interface SideNavItem {
  title: string;
  path: string;
  icon?: ReactNode;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
}

export interface SideNavSection {
  section: string;
  items: SideNavItem[];
}
