import React from "react";
import { Card, Typography, List, ListItem, ListItemPrefix, ListItemSuffix, Chip, Accordion, AccordionHeader, AccordionBody, Alert, Input } from "@material-tailwind/react";
import { PresentationChartBarIcon, ShoppingBagIcon, UserCircleIcon, Cog6ToothIcon, InboxIcon, PowerIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon, CubeTransparentIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import "./styleSidebar.css";

export const SideBar = () => {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="h-screen w-full max-w-[19rem] p-4 shadow-xl shadow-blue-gray-900/5 flex-col border-r-2 border-white bg-gradient-to-r from-[#090d11] via-[#10171e] to-[#000] z-20 side">
      <div className="mb-2 flex items-center gap-4 p-4">
        <img src="/logo-br-w.png" alt="brand" className="h-10 w-10 " />
        <Typography variant="h5" color="white">
          BlackRing.Studio
        </Typography>
      </div>
      <div className="p-2 ">
        <Input icon={<MagnifyingGlassIcon className="h-5 w-5 text-white" />} label="Belum berfungsi" className="text-white" color="white" />
      </div>
      <List>
        <Link to="/">
          <ListItem className="z-20 hm">
            <ListItemPrefix>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="dashboard">
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path
                  fill="#FFFFFF"
                  d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"
                ></path>
              </svg>
            </ListItemPrefix>
            <Typography color="white" className="mr-auto font-normal">
              Dashboard
            </Typography>
          </ListItem>
        </Link>
        <Link to="/lab">
          <ListItem className="z-20 hm">
            <ListItemPrefix>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64" id="blueprint">
                <path
                  fill="#ffffff"
                  d="M61 17H12v-5a1 1 0 0 0-1-1H7a5 5 0 0 0-5 5v38a5 5 0 0 0 5 5h54a1 1 0 0 0 1-1V18a1 1 0 0 0-1-1ZM4 16a3.009 3.009 0 0 1 3-3h3v36H7a4.985 4.985 0 0 0-3 1Zm52 41h-6v-4h4v-2h-4v-2h2v-2h-2v-2h2v-2h-2v-2h4v-2h-4v-2h2v-2h-2v-2h2v-2h-2v-2h4v-2h-4v-4h6Zm4 0h-2V22a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v35H7a3 3 0 0 1 0-6h4a1 1 0 0 0 1-1V19h48Z"
                ></path>
                <path
                  fill="white"
                  d="M19 15h27a1 1 0 0 0 .406-.086l9-4a1 1 0 0 0 0-1.828l-9-4A1 1 0 0 0 46 5H19a5 5 0 0 0 0 10zm6-4h20v2H25zm22-3.461 2 .889v3.144l-2 .889zM45 9H25V7h20zm-22 4h-1V7h1zm28-2.317V9.317l1.538.683zM19 7h1v6h-1a3 3 0 0 1 0-6zm-2.142 33.99 2.682.383a10.96 10.96 0 0 0 .678 1.639l-1.624 2.166a1 1 0 0 0 .093 1.307l2.828 2.828a1 1 0 0 0 1.307.093l2.166-1.624a10.96 10.96 0 0 0 1.639.678l.383 2.682A1 1 0 0 0 28 52h4a1 1 0 0 0 .99-.858l.383-2.682a10.96 10.96 0 0 0 1.639-.678l2.166 1.624a1 1 0 0 0 1.307-.093l2.828-2.828a1 1 0 0 0 .093-1.307l-1.624-2.166a10.96 10.96 0 0 0 .678-1.639l2.682-.383A1 1 0 0 0 44 40v-4a1 1 0 0 0-.858-.99l-2.682-.383a10.96 10.96 0 0 0-.678-1.639l1.624-2.166a1 1 0 0 0-.093-1.307l-2.828-2.828a1 1 0 0 0-1.307-.093l-2.166 1.624a10.96 10.96 0 0 0-1.639-.678l-.383-2.682A1 1 0 0 0 32 24h-4a1 1 0 0 0-.99.858l-.383 2.682a10.96 10.96 0 0 0-1.639.678l-2.166-1.624a1 1 0 0 0-1.307.093l-2.828 2.828a1 1 0 0 0-.093 1.307l1.624 2.166a10.96 10.96 0 0 0-.678 1.639l-2.682.383A1 1 0 0 0 16 36v4a1 1 0 0 0 .858.99zM18 36.867l2.463-.352a1 1 0 0 0 .828-.743 8.892 8.892 0 0 1 .975-2.356 1 1 0 0 0-.06-1.111l-1.492-1.99 1.6-1.6 1.99 1.492a1 1 0 0 0 1.111.06 8.892 8.892 0 0 1 2.356-.975 1 1 0 0 0 .743-.828L28.867 26h2.266l.352 2.463a1 1 0 0 0 .743.828 8.892 8.892 0 0 1 2.356.975 1 1 0 0 0 1.111-.06l1.99-1.492 1.6 1.6-1.492 1.99a1 1 0 0 0-.06 1.111 8.892 8.892 0 0 1 .975 2.356 1 1 0 0 0 .828.743l2.464.353v2.266l-2.463.352a1 1 0 0 0-.828.743 8.892 8.892 0 0 1-.975 2.356 1 1 0 0 0 .06 1.111l1.492 1.99-1.6 1.6-1.986-1.491a1 1 0 0 0-1.111-.06 8.892 8.892 0 0 1-2.356.975 1 1 0 0 0-.743.828L31.133 50h-2.266l-.352-2.463a1 1 0 0 0-.743-.828 8.892 8.892 0 0 1-2.356-.975 1 1 0 0 0-1.111.06l-1.99 1.492-1.6-1.6 1.492-1.99a1 1 0 0 0 .06-1.111 8.892 8.892 0 0 1-.975-2.356 1 1 0 0 0-.828-.743L18 39.133z"
                ></path>
                <path fill="white" d="M30 44a6 6 0 1 0-6-6 6.006 6.006 0 0 0 6 6Zm0-10a4 4 0 1 1-4 4 4 4 0 0 1 4-4Z"></path>
              </svg>
            </ListItemPrefix>
            <Typography color="white" className="mr-auto font-normal">
              Laboratory
            </Typography>
          </ListItem>
        </Link>
        <Accordion open={open === 2} icon={<ChevronDownIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`} />}>
          <ListItem className="p-0 hm" selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
              <ListItemPrefix>
                <ChevronRightIcon strokeWidth={3} className="h-3 w-5 text-white" />
              </ListItemPrefix>
              <Typography color="white" className="mr-auto font-normal">
                Components
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem className="text-white hm">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Icon
              </ListItem>
              <ListItem className="text-white hm">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                illustration
              </ListItem>
              <ListItem className="text-white hm">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Logo
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-blue-gray-50" />
        {/* <ListItem className="z-20">
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
          </ListItemSuffix>
        </ListItem>
        <ListItem className="z-20">
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem> */}
      </List>
      <Alert open={openAlert} className="mt-auto w-64 mx-auto justify-center bg-transparent border-2 border-white" onClose={() => setOpenAlert(false)}>
        <svg width="150" height="150" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#e6e6e6" stroke-width="20" />
          <circle cx="100" cy="100" r="90" fill="none" stroke="#00bfff" stroke-width="20" stroke-dasharray="565.48" stroke-dashoffset="565.48" className="test2">
            {/* <animate attributeName="stroke-dashoffset" from="565.48" to="540.658" dur="2s" fill="freeze" /> */}
          </circle>
          <text x="50%" y="50%" dy=".3em" text-anchor="middle" font-size="60" fill="#fff">
            8%
          </text>
        </svg>

        <Typography variant="h8" className="mt-4 font-bold ">
          Web Development Progress
        </Typography>
      </Alert>
    </div>
  );
};
