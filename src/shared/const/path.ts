export const PATH = {
  HOME: "/",
  SERVICE: "/service",
  QUICK_LAUNCHER: "/quick-launcher",
  CONTACT_US: "/contact-us",
  MANUAL:
    "https://lgu-cto.atlassian.net/wiki/spaces/CLOUDASSET/pages/17715101462/8.+UCMP",
  CLOUD_ASSET: "https://lgu-cto.atlassian.net/wiki/spaces/CLOUDASSET/overview",
};

export const MAIN_NAV_ITEMS: MAIN_NAV_ITEM[] = [
  {
    label: "서비스",
    href: PATH.SERVICE,
    permissionRequired: true,
  },
  {
    label: "퀵런처",
    href: PATH.QUICK_LAUNCHER,
    permissionRequired: true,
  },
  {
    label: "담당자",
    href: PATH.CONTACT_US,
    permissionRequired: false,
  },
  {
    label: "매뉴얼",
    href: PATH.MANUAL,
    permissionRequired: false,
  },
  {
    label: "지식 포털",
    href: PATH.CLOUD_ASSET,
    permissionRequired: false,
  },
];

interface MAIN_NAV_ITEM {
  label: string;
  href: string;
  permissionRequired: boolean;
}
