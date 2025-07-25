"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { IRootState } from "@/store";
import axios from "axios";
import useAuthStore from "@/store/authStore";
import {
  toggleTheme,
  toggleSidebar,
  toggleRTL,
} from "@/store/themeConfigSlice";
import Dropdown from "@/components/dropdown";
import IconMenu from "@/components/icon/icon-menu";
import IconXCircle from "@/components/icon/icon-x-circle";
import IconSun from "@/components/icon/icon-sun";
import IconMoon from "@/components/icon/icon-moon";
import IconInfoCircle from "@/components/icon/icon-info-circle";
import IconBellBing from "@/components/icon/icon-bell-bing";
import IconUser from "@/components/icon/icon-user";
import IconLogout from "@/components/icon/icon-logout";
import { usePathname, useRouter } from "next/navigation";
import { getTranslation } from "@/i18n";
import Image from "next/image";
import Logo from "../../public/assets/images/PEAITT2.png";

interface noti {
  id: number;
  user_id: number;
  title: string;
  message: string;
  is_read: boolean;
  created_at: any;
}

const Header = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();
  const { t, i18n } = getTranslation();
  const user = useAuthStore((state) => state.user)
  const [myimg, setMyimg] = useState<string | null>(null)

  useEffect(() => {
    let imgUrl: string;
    const heyimg = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}users/${user?.student_profile?.id}/picture`,
          {
            responseType: "blob",
            withCredentials: true,
          }
        );
        imgUrl = URL.createObjectURL(res.data);
        setMyimg(imgUrl);
      } catch (error) {
        console.error("โหลดรูปไม่สำเร็จ", error);
      }
    };

    if (user?.student_profile?.id) {
      heyimg();
    }

    return () => {
      if (imgUrl) URL.revokeObjectURL(imgUrl);
    };
  }, [user]);

  useEffect(() => {
    const selector = document.querySelector(
      'ul.horizontal-menu a[href="' + window.location.pathname + '"]'
    );
    if (selector) {
      const all: any = document.querySelectorAll(
        "ul.horizontal-menu .nav-link.active"
      );
      for (let i = 0; i < all.length; i++) {
        all[0]?.classList.remove("active");
      }

      let allLinks = document.querySelectorAll("ul.horizontal-menu a.active");
      for (let i = 0; i < allLinks.length; i++) {
        const element = allLinks[i];
        element?.classList.remove("active");
      }
      selector?.classList.add("active");

      const ul: any = selector.closest("ul.sub-menu");
      if (ul) {
        let ele: any = ul.closest("li.menu").querySelectorAll(".nav-link");
        if (ele) {
          ele = ele[0];
          setTimeout(() => {
            ele?.classList.add("active");
          });
        }
      }
    }
  }, [pathname]);

  const isRtl =
    useSelector((state: IRootState) => state.themeConfig.rtlClass) === "rtl";

  const themeConfig = useSelector((state: IRootState) => state.themeConfig);

  const setLocale = (flag: string) => {
    if (flag.toLowerCase() === "ae") {
      dispatch(toggleRTL("rtl"));
    } else {
      dispatch(toggleRTL("ltr"));
    }
    router.refresh();
  };

  const haddleLogout = async () => {
    try {
      await actionLogout()
    } catch (error) {
      console.log(error);
    }
  };

  const [notifications, setNotifications] = useState<noti[]>([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const mynoti = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}noti?user_id=${user?.id}&is_read=false`,
          {
            withCredentials: true,
          }
        );
        setNotifications(mynoti.data.data);
      } catch (error) {
        console.error("ไม่สามารถโหลดการแจ้งเตือนได้", error);
      }
    };
    fetch();
  }, [user?.id]);

  const removeNotification = async (id: number) => {
    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}noti/read/${id}`,
        {},
        {
          withCredentials: true,
        }
      );
      setNotifications((prevNoti) => prevNoti.filter((n) => n.id !== id));
    } catch (error) {
      console.error("ไม่สามารถอัปเดตการแจ้งเตือนได้", error);
    }
  };

  const readAllNotifications = async () => {
    try {
      await Promise.all(
        notifications.map((n) =>
          axios.put(
            `${process.env.NEXT_PUBLIC_API_URL}noti/read/${n.id}`,
            {},
            { withCredentials: true }
          )
        )
      );
      setNotifications([]);
    } catch (error) {
      console.error("ไม่สามารถอ่านการแจ้งเตือนทั้งหมดได้", error);
    }
  };

  const [search, setSearch] = useState(false);

  return (
    <header
      className={`z-40 ${
        themeConfig.semidark && themeConfig.menu === "horizontal" ? "dark" : ""
      }`}
    >
      <div className="shadow-sm">
        <div className="relative flex w-full items-center bg-white px-5 py-2.5 dark:bg-black">
          <div className="horizontal-logo flex items-center justify-between lg:hidden ltr:mr-2 rtl:ml-2">
            <Link href="/" className="main-logo flex shrink-0 items-center">
              <Image
                className="inline w-[132px] ltr:-ml-1 rtl:-mr-1"
                src={Logo}
                alt="logo"
              />
            </Link>
            <button
              type="button"
              className="collapse-icon flex flex-none rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:text-[#d0d2d6] dark:hover:bg-dark/60 dark:hover:text-primary lg:hidden ltr:ml-2 rtl:mr-2"
              onClick={() => dispatch(toggleSidebar())}
            >
              <IconMenu className="h-5 w-5 " />
            </button>
          </div>

          <div className="flex items-center space-x-1.5 dark:text-[#d0d2d6] sm:flex-1 lg:space-x-2 ltr:ml-auto ltr:sm:ml-0 rtl:mr-auto rtl:space-x-reverse sm:rtl:mr-0">
            <div className="sm:ltr:mr-auto sm:rtl:ml-auto"></div>
            <div>
              {themeConfig.theme === "light" ? (
                <button
                  className="flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60"
                  onClick={() => dispatch(toggleTheme("dark"))}
                >
                  <IconSun />
                </button>
              ) : (
                <button
                  className="flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60"
                  onClick={() => dispatch(toggleTheme("light"))}
                >
                  <IconMoon />
                </button>
              )}
            </div>

            <div className="dropdown shrink-0">
              <Dropdown
                offset={[0, 8]}
                placement={`${isRtl ? "bottom-start" : "bottom-end"}`}
                btnClassName="relative block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                button={
                  <span>
                    <IconBellBing />
                    <span className="absolute top-0 flex h-3 w-3 ltr:right-0 rtl:left-0">
                      <span className="absolute -top-[3px] inline-flex h-full w-full animate-ping rounded-full bg-success/50 opacity-75 ltr:-left-[3px] rtl:-right-[3px]"></span>
                      <span className="relative inline-flex h-[6px] w-[6px] rounded-full bg-success"></span>
                    </span>
                  </span>
                }
              >
                <ul className="w-[300px] divide-y !py-0 text-dark dark:divide-white/10 dark:text-white-dark sm:w-[350px]">
                  <li onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-between px-4 py-2 font-semibold">
                      <h4 className="text-lg">Notification</h4>
                      {notifications.length ? (
                        <span className="badge bg-primary/80">
                          {notifications.length} New
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </li>
                  {notifications.length > 0 ? (
                    <>
                      {notifications.map((notification) => (
                        <li
                          key={notification.id}
                          className="dark:text-white-light/90"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="group flex items-center px-4 py-2">
                            <div className="grid place-content-center rounded">
                              {/* <div className="relative h-12 w-12">
                                <span className="absolute bottom-0 right-[6px] block h-2 w-2 rounded-full bg-success"></span>
                              </div> */}
                            </div>
                            <div className="flex flex-auto ltr:pl-3 rtl:pr-3">
                              <div className="ltr:pr-3 rtl:pl-3">
                                <h5
                                  className="font-semibold"
                                  dangerouslySetInnerHTML={{
                                    __html: notification.title,
                                  }}
                                ></h5>
                                <h6
                                  dangerouslySetInnerHTML={{
                                    __html: notification.message,
                                  }}
                                ></h6>
                                <span className="block text-xs  text-gray-500 font-normal dark:text-gray-500">
                                  {new Date(notification.created_at)
                                    .toISOString()
                                    .slice(0, 19)
                                    .replace("T", " ")}
                                </span>
                              </div>
                              <button
                                type="button"
                                className="text-neutral-300 opacity-0 hover:text-danger group-hover:opacity-100 ltr:ml-auto rtl:mr-auto"
                                onClick={() =>
                                  removeNotification(notification.id)
                                }
                              >
                                <IconXCircle />
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                      <li>
                        <div className="p-4">
                          <button
                            className="btn btn-primary btn-small block w-full"
                            onClick={readAllNotifications}
                          >
                            Read All Notifications
                          </button>
                        </div>
                      </li>
                    </>
                  ) : (
                    <li onClick={(e) => e.stopPropagation()}>
                      <button
                        type="button"
                        className="!grid min-h-[200px] place-content-center text-lg hover:!bg-transparent"
                      >
                        <div className="mx-auto mb-4 rounded-full ring-4 ring-primary/30">
                          <IconInfoCircle
                            fill={true}
                            className="h-10 w-10 text-primary"
                          />
                        </div>
                        No data available.
                      </button>
                    </li>
                  )}
                </ul>
              </Dropdown>
            </div>

            <div className="dropdown flex shrink-0">
              <Dropdown
                offset={[0, 8]}
                placement={`${isRtl ? "bottom-start" : "bottom-end"}`}
                btnClassName="relative group block"
                button={
                  <img
                    className="h-9 w-9 rounded-full object-cover saturate-50 group-hover:saturate-100"
                    src={myimg ? myimg : "/assets/images/watdee.jpeg"}
                    alt="userProfile"
                  />
                }
              >
                <ul className="w-[230px] !py-0 font-semibold text-dark dark:text-white-dark dark:text-white-light/90">
                  <li>
                    <div className="flex items-center px-4 py-4">
                      <img
                        className="h-10 w-10 rounded-md object-cover"
                        src={myimg ? myimg : "/assets/images/watdee.jpeg"}
                        alt="userProfile"
                      />
                      <div className="truncate ltr:pl-4 rtl:pr-4">
                        <h4 className="text-base">
                          {user?.fname} {user?.lname}
                        </h4>
                        <button
                          type="button"
                          className="text-black/60 hover:text-primary dark:text-dark-light/60 dark:hover:text-white"
                        >
                          {user?.email}
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="hover:bg-[#ECB9DB] hover:bg-opacity-50 ">
                    <Link
                      href="/users/profile"
                      className="dark:hover:text-white "
                    >
                      <IconUser className="h-4.5 w-4.5 shrink-0 ltr:mr-2 rtl:ml-2" />
                      โปรไฟล์
                    </Link>
                  </li>
                  <li className="border-t border-white-light hover:bg-[#ECB9DB] hover:bg-opacity-50 dark:border-white-light/10 ">
                    <Link
                      onClick={haddleLogout}
                      href="/login"
                      className="!py-3 text-danger"
                    >
                      <IconLogout className="h-4.5 w-4.5 shrink-0 rotate-90 ltr:mr-2 rtl:ml-2 " />
                      ออกจากระบบ
                    </Link>
                  </li>
                </ul>
              </Dropdown>
            </div>
          </div>
        </div>

        {/* horizontal menu */}
        <ul className="horizontal-menu hidden border-t border-[#ebedf2] bg-white px-6 py-1.5 font-semibold text-black dark:border-[#191e3a] dark:bg-black dark:text-white-dark lg:space-x-1.5 xl:space-x-8 rtl:space-x-reverse"></ul>
      </div>
    </header>
  );
};

export default Header;
