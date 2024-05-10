import * as React from "react";
import { useMediaQuery } from "react-responsive";

import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import FormUsers from "./FormUsers";
import ButtonAction from "./ButtonAction";

const DrawerMobile = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);

  const isMediumToLarge = useMediaQuery({ query: "(min-width: 768px)" });

  React.useEffect(() => {
    if (isMediumToLarge) {
      setOpen(false);
    }
  }, [isMediumToLarge]);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Add Users</DrawerTitle>
          </DrawerHeader>

          <div className="container pb-5">
            <FormUsers />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerMobile;
