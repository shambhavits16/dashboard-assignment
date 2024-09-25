import React, { useEffect, useState } from "react";
import {
  PiBugBeetle,
  PiUser,
  PiBroadcast,
  PiSidebarDuotone,
} from "react-icons/pi";

function RightSidebar({
  theme,
  leftSidebarOpen,
  toggleLeftSidebar,
  setLeftSidebarOpen,
}) {
  const notifications = [
    {
      id: 1,
      message: "You have a bug that needs...",
      time: "Just now",
      icon: <PiBugBeetle size={16} />,
      bgColor: "#E3F5FF",
    },
    {
      id: 2,
      message: "New user registered",
      time: "59 minutes ago",
      icon: <PiUser size={16} />,
      bgColor: "#E5ECF6",
    },
    {
      id: 3,
      message: "You have a bug that needs...",
      time: "12 hours ago",
      icon: <PiBugBeetle size={16} />,
      bgColor: "#E3F5FF",
    },
    {
      id: 4,
      message: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
      icon: <PiBroadcast size={16} />,
      bgColor: "#E5ECF6",
    },
  ];

  const activities = [
    {
      id: 1,
      message: "You have a bug that needs...",
      time: "Just now",
      icon: (
        <img src="/Images/Activity1.png" alt="User" className="rounded-full" />
      ),
    },
    {
      id: 2,
      message: "Released a new version",
      time: "59 minutes ago",
      icon: (
        <img src="/Images/Activity2.png" alt="User" className="rounded-full" />
      ),
    },
    {
      id: 3,
      message: "Submitted a bug",
      time: "12 hours ago",
      icon: (
        <img src="/Images/Activity3.png" alt="User" className="rounded-full" />
      ),
    },
    {
      id: 4,
      message: "Modified A data in Page X",
      time: "Today, 11:59 AM",
      icon: (
        <img src="/Images/Activity4.png" alt="User" className="rounded-full" />
      ),
    },
    {
      id: 5,
      message: "Deleted a page in Project X",
      time: "Feb 2, 2023",
      icon: (
        <img src="/Images/Activity5.png" alt="User" className="rounded-full" />
      ),
    },
  ];

  const contacts = [
    { id: 1, name: "Natali Craig", avatar: "/Images/NataliCraig.png" },
    { id: 2, name: "Drew Cano", avatar: "/Images/DrewCano.png" },
    { id: 3, name: "Orlando Diggs", avatar: "/Images/OrlandoDiggs.png" },
    { id: 4, name: "Andi Lane", avatar: "/Images/AndiLane.png" },
    { id: 5, name: "Kate Morrison", avatar: "/Images/KateMorrison.png" },
    { id: 6, name: "Koray Okumus", avatar: "/Images/KorayOkumus.png" },
  ];

  const sidebarClass =
    theme === "light"
      ? "bg-white text-black"
      : "bg-[#1C1C1C] text-white border-[#282828]";
  const textSecondary = theme === "light" ? "text-gray-500" : "text-gray-400";

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1400);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleRSideBar = () => {
    toggleLeftSidebar(!leftSidebarOpen);
    console.log(!leftSidebarOpen);
  };

  return (
    <>
      {leftSidebarOpen && (
        <div
          className={`p-4 overflow-y-auto border-l font-inter ${sidebarClass} ${isMobile ? "absolute top-0 right-0 z-50" : "relative"
            }`}
        >
          <div className="mb-8">
            <div className="flex justify-between items-center">
              <h2 className="text-sm font-inter font-semibold mb-4">
                Notifications
              </h2>
              {isMobile && (
                <PiSidebarDuotone
                  className="cursor-pointer mr-4 mb-4"
                  size={20}
                  onClick={toggleRSideBar}
                />
              )}
            </div>
            {notifications.map((notif) => (
              <div key={notif.id} className="flex items-start mb-4 min-w-56">
                <div
                  className={`mr-3 mt-1 rounded-lg p-1 text-black bg-[${notif.bgColor}]`}
                >
                  {notif.icon}
                </div>
                <div>
                  <p className="text-sm font-inter font-medium">
                    {notif.message}
                  </p>
                  <p
                    className={`text-xs leading-[18px] font-normal ${textSecondary}`}
                  >
                    {notif.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="text-sm font-inter font-semibold mb-4">
              Activities
            </h2>
            {activities.map((activity) => (
              <div key={activity.id} className="flex items-start mb-4">
                <div className="mr-2 mt-1 size-6">{activity.icon}</div>
                <div>
                  <p className="text-sm font-inter font-medium">
                    {activity.message}
                  </p>
                  <p
                    className={`text-xs leading-[18px] font-normal ${textSecondary}`}
                  >
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-sm font-inter font-semibold mb-4">Contacts</h2>
            {contacts.map((contact) => (
              <div key={contact.id} className="flex items-center mb-4">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="rounded-full mr-2 size-6"
                />
                <p className="text-sm font-inter font-medium">{contact.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default RightSidebar;
