// assets
import { IconBrandChrome, IconHelp } from "@tabler/icons";

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: "leads board",
  type: "group",
  children: [
    {
      id: "leads",
      title: "Leads Board",
      type: "item",
      url: "/leads",
      icon: icons.IconBrandChrome,
      breadcrumbs: false,
    },
  ],
};

export default other;
