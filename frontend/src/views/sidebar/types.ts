interface ISubMenu {
  name: string;
  path: string;
}

export interface IMenuItem {
  name: string;
  icon: React.ReactNode;
  subItems?: ISubMenu[];
}

export interface ISidebar {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}
