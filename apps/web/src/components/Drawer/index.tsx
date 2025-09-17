import { DrawerBackdrop } from "./DrawerBackdrop";
import { DrawerMenu } from "./DrawerMenu";

interface Props {
  children: React.ReactNode;
}

export const Drawer = ({ children }: Props) => {
  return (
    <>
      <DrawerBackdrop />
      <DrawerMenu />
      {children}
    </>
  );
};
