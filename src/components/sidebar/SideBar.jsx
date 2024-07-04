import React from "react";
import { Card, Typography, List, ListItem, ListItemPrefix, ListItemSuffix, Chip, Accordion, AccordionHeader, AccordionBody, Alert, Input } from "@material-tailwind/react";
import { PresentationChartBarIcon, ShoppingBagIcon, UserCircleIcon, Cog6ToothIcon, InboxIcon, PowerIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon, CubeTransparentIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export const SideBar = () => {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="h-screen w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 flex-col border-r-2 border-blue-200 bg-black ">
      <div className="mb-2 flex items-center gap-4 p-4">
        <img src="/logo-br-w.png" alt="brand" className="h-10 w-10" />
        <Typography variant="h5" color="white">
          BlackRing.Studio
        </Typography>
      </div>
      <div className="p-2 ">
        <Input icon={<MagnifyingGlassIcon className="h-5 w-5 text-white" />} label="Belum berfungsi" className="text-white" color="white" />
      </div>
      <List>
        <ListItem className="z-20 hm">
          <ListItemPrefix>
            <svg width="20" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 0.5C1.46957 0.5 0.960859 0.710714 0.585786 1.08579C0.210714 1.46086 0 1.96957 0 2.5V4.5C0 5.03043 0.210714 5.53914 0.585786 5.91421C0.960859 6.28929 1.46957 6.5 2 6.5H4C4.53043 6.5 5.03914 6.28929 5.41421 5.91421C5.78929 5.53914 6 5.03043 6 4.5V2.5C6 1.96957 5.78929 1.46086 5.41421 1.08579C5.03914 0.710714 4.53043 0.5 4 0.5H2ZM2 8.5C1.46957 8.5 0.960859 8.71071 0.585786 9.08579C0.210714 9.46086 0 9.96957 0 10.5V12.5C0 13.0304 0.210714 13.5391 0.585786 13.9142C0.960859 14.2893 1.46957 14.5 2 14.5H4C4.53043 14.5 5.03914 14.2893 5.41421 13.9142C5.78929 13.5391 6 13.0304 6 12.5V10.5C6 9.96957 5.78929 9.46086 5.41421 9.08579C5.03914 8.71071 4.53043 8.5 4 8.5H2ZM8 2.5C8 1.96957 8.21071 1.46086 8.58579 1.08579C8.96086 0.710714 9.46957 0.5 10 0.5H12C12.5304 0.5 13.0391 0.710714 13.4142 1.08579C13.7893 1.46086 14 1.96957 14 2.5V4.5C14 5.03043 13.7893 5.53914 13.4142 5.91421C13.0391 6.28929 12.5304 6.5 12 6.5H10C9.46957 6.5 8.96086 6.28929 8.58579 5.91421C8.21071 5.53914 8 5.03043 8 4.5V2.5ZM8 10.5C8 9.96957 8.21071 9.46086 8.58579 9.08579C8.96086 8.71071 9.46957 8.5 10 8.5H12C12.5304 8.5 13.0391 8.71071 13.4142 9.08579C13.7893 9.46086 14 9.96957 14 10.5V12.5C14 13.0304 13.7893 13.5391 13.4142 13.9142C13.0391 14.2893 12.5304 14.5 12 14.5H10C9.46957 14.5 8.96086 14.2893 8.58579 13.9142C8.21071 13.5391 8 13.0304 8 12.5V10.5Z"
                fill="#fff"
              />
            </svg>
          </ListItemPrefix>
          <Typography color="white" className="mr-auto font-normal">
            Dashboard
          </Typography>
        </ListItem>
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
      <Alert open={openAlert} className="mt-auto w-64 mx-auto justify-center bg-transparent" onClose={() => setOpenAlert(false)}>
        <svg width="150" height="150" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#e6e6e6" stroke-width="20" />
          <circle cx="100" cy="100" r="90" fill="none" stroke="#00bfff" stroke-width="20" stroke-dasharray="565.48" stroke-dashoffset="565.48">
            <animate attributeName="stroke-dashoffset" from="565.48" to="540.658" dur="2s" fill="freeze" />
          </circle>
          <text x="50%" y="50%" dy=".3em" text-anchor="middle" font-size="60" fill="#fff">
            5%
          </text>
        </svg>

        <Typography variant="h8" className="mt-4 font-bold">
          Web Develop Progress
        </Typography>
      </Alert>
    </div>
  );
};
