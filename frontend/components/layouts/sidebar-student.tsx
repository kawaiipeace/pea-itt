"use client";

import PerfectScrollbar from "react-perfect-scrollbar";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { toggleSidebar } from "@/store/themeConfigSlice";
import { IRootState } from "@/store";
import { usePathname } from "next/navigation";
import { getTranslation } from "@/i18n";
import Image from "next/image";

import IconCaretsDown from "@/components/icon/icon-carets-down";
import IconMenuCalendar from "@/components/icon/menu/icon-menu-calendar";
import IconMinus from "@/components/icon/icon-minus";

import Logo from "../../public/assets/images/PEAITT2.png";

const SidebarStudent = () => {
  const dispatch = useDispatch();
  const { t } = getTranslation();
  const pathname = usePathname();

  const semidark = useSelector(
    (state: IRootState) => state.themeConfig.semidark
  );

  return (
    <div className={semidark ? "dark" : ""}>
      <nav
        className={`sidebar fixed bottom-0 top-0 z-50 h-full min-h-screen w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300 ${
          semidark ? "text-white-dark" : ""
        }`}
      >
        <div className="h-full bg-white dark:bg-black">
          <div className="flex items-center justify-between px-4 py-3">
            <Link href="/" className="main-logo flex shrink-0 items-center">
              <Image
                className="inline w-[132px] ltr:-ml-1 rtl:-mr-1"
                src={Logo}
                alt="logo"
              />
            </Link>

            <button
              type="button"
              className="collapse-icon flex h-8 w-8 items-center rounded-full transition duration-300 hover:bg-gray-500/10 dark:text-white-light dark:hover:bg-dark-light/10 rtl:rotate-180"
              onClick={() => dispatch(toggleSidebar())}
            >
              <IconCaretsDown className="m-auto rotate-90" />
            </button>
          </div>

          <PerfectScrollbar className="relative h-[calc(100vh-80px)]">
            <ul className="relative space-y-0.5 p-4 py-0 font-semibold">
              <h2 className="-mx-4 mb-1 flex items-center bg-white-light/30 px-7 py-3 font-extrabold uppercase dark:bg-dark dark:bg-opacity-[0.08]">
                <IconMinus className="hidden h-5 w-4 flex-none" />
                <span>{t("นักศึกษา")}</span>
              </h2>

              <li className="nav-item">
                <ul>
                  
                  <li className="menu nav-item">
                    <Link
                      href="/"
                      className={`nav-link group w-full ${
                        pathname === "/" ? "active" : ""
                      }`}
                    >
                      <div className="flex items-center">
                        <img
                          className="w-[20px] flex-none"
                          src="/assets/images/time.png"
                          alt="logo"
                        />
                        <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                          {t("การลงเวลาปฏิบัติงาน")}
                        </span>
                      </div>
                    </Link>
                  </li>

                  
                  <li className="nav-item">
                    <Link
                      href="/users/leaverequest"
                      className={`nav-link group w-full ${
                        pathname.startsWith("/users/leaverequest")
                          ? "active"
                          : ""
                      }`}
                    >
                      <div className="flex items-center">
                        <IconMenuCalendar className="shrink-0 group-hover:!text-primary" />
                        <span className="text-black dark:text-[#506690] dark:group-hover:text-white-dark ltr:pl-3 rtl:pr-3">
                          {t("การลาปฏิบัติงาน")}
                        </span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </PerfectScrollbar>
        </div>
      </nav>
    </div>
  );
};

export default SidebarStudent;
