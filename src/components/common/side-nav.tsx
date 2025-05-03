"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, DotSquareIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Code, LogOut } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useAuthContext } from "@/context/auth-context";
import { SideNavItem, SideNavSection } from "@/types/side-nav";

export function SideNav({ menuItems }: { menuItems: SideNavSection[] }) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [showText, setShowText] = useState(false);
  const { logout } = useAuthContext();
  const pathname = usePathname();

  useEffect(() => {
    if (isExpanded) {
      const timer = setTimeout(() => {
        setShowText(true);
      }, 250);

      return () => clearTimeout(timer);
    } else {
      setShowText(false);
    }
  }, [isExpanded]);

  return (
    <div
      className={`border-r-2 border-gray-100 fixed bottom-0 top-0 ${
        pathname.includes("auth") ? "hidden" : "flex"
      }  flex-col justify-between gap-8 transition-all duration-300 bg-white z-50 ${
        isExpanded ? "" : ""
      }  ${isExpanded ? "md:w-64" : "md:w-20"}`}
    >
      <div className="flex flex-col">
        <div
          className={`flex text-gray-500 bg-white items-center justify-between p-6 h-[100px] rounded-tr-2xl`}
        >
          <Link href={"/"}>
            <Image
              key={showText ? "logo-large" : "logo-small"}
              src={
                showText
                  ? "/assets/logo/logo-hospital.png"
                  : "/assets/logo/logo-small-hospital.png"
              }
              alt="logo"
              priority
              className="w-full h-auto max-h-[48px] animate-fadeInImage"
              width={200}
              height={200}
            />
          </Link>
        </div>
        <div
          className={`relative flex flex-col justify-center ${
            isExpanded ? "p-6" : " py-6 px-[13.5px]"
          }`}
        >
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            className="absolute top-[-66px] right-[-16px] flex p-3 rounded-full w-8 h-8 bg-white border-1 border-gray-200 text-gray-400 hover:bg-white hover:border-1 hover:border-error hover:text-gray-500 cursor-pointer"
          >
            {isExpanded ? (
              <ChevronLeft size={24} />
            ) : (
              <ChevronRight size={24} />
            )}
          </Button>
          {menuItems.map((section, sectionIdx) => (
            <div
              key={sectionIdx}
              className={`flex flex-col gap-4  ${
                isExpanded ? "" : "items-center"
              }  ${
                sectionIdx >= 1 ? " mt-4 pt-8 border-t border-t-gray-700 " : ""
              }`}
            >
              <span className="text-gray-500 text-xs font-bold uppercase">
                {section.section}
              </span>
              <div className="flex flex-col gap-6 ">
                {section.items.map((item, idx) => (
                  <MenuItem
                    key={idx}
                    item={item}
                    isExpanded={isExpanded}
                    showText={showText}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={logout}
        className={`flex text-gray-300 bg-white items-center gap-3 p-6 h-[80px] border-t border-t-gray-700 rounded-br-2xl ${
          isExpanded ? "" : "justify-center"
        }`}
      >
        <LogOut size={20} strokeWidth={2} />
        {showText && <span>Sair</span>}
      </button>
    </div>
  );
}

function MenuItem({
  item,
  isExpanded,
  showText,
}: {
  item: SideNavItem;
  isExpanded: boolean;
  showText: boolean;
}) {
  const pathname = usePathname();
  const isSelected = item.path === pathname;

  return (
    <div>
      {item.submenu ? (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger
              // showIcon={showText}
              className={`flex h-[48px] items-center justify-between p-2 rounded-md gap-4 px-3 py-[10px] data-[state=open]:text-white text-gray-500 ${
                isSelected ? "text-white " : "text-gray-300 hover:text-white"
              } `}
            >
              <div className="flex flex-row items-center space-x-4">
                {item.icon}
                {isExpanded && <span className="">{item.title}</span>}
              </div>
            </AccordionTrigger>
            <AccordionContent className="my-2 ml-6 flex flex-col gap-4 text-gray-500 border-l border-gray-700 pl-4 mt-4">
              {item.subMenuItems?.map((subItem, idx) => (
                <Link
                  key={idx}
                  href={subItem.path}
                  className={`px-3 py-2 ${
                    subItem.path === pathname
                      ? "text-white bg-gray-700 rounded-md"
                      : ""
                  }`}
                >
                  <span>{subItem.title}</span>
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ) : (
        <Link
          href={item.path}
          className={`flex items-center gap-3 p-2 rounded-md px-3 py-3 ${
            isSelected ? "bg-gray-700 text-white" : "text-gray-300"
          }  `}
        >
          {item.icon}
          {isExpanded && showText && (
            <span
              className={`font-normal text-sm ${
                isSelected ? "text-white" : "text-gray-300 hover:text-white"
              }`}
            >
              {item.title}
            </span>
          )}
        </Link>
      )}
    </div>
  );
}
