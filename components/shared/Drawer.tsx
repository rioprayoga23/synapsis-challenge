import { useMediaQuery } from "react-responsive";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useEffect, useState } from "react";
import FormUsers from "./FormUsers";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "@/store";
import { clearModal } from "@/store/modal/action";

const DrawerModal = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, modalAction, data } = useSelector(
    (state: IRootState) => state.modal
  );

  const dispatch = useDispatch();
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  useEffect(() => {
    if (isDesktop && modalAction === "add") {
      dispatch(clearModal());
    }
  }, [isDesktop]);

  const onChangeModal = (open: boolean) => {
    if (!open) return dispatch(clearModal());
  };

  const title = modalAction === "add" ? "Add Users" : "Edit Users";

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={onChangeModal}>
        <DialogTrigger asChild>
          <DrawerTrigger asChild>{children}</DrawerTrigger>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>

          {/* content */}
          <FormUsers />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={onChangeModal}>
      <DrawerTrigger asChild>
        <DrawerTrigger asChild>{children}</DrawerTrigger>
      </DrawerTrigger>
      <DrawerContent className="container pb-10">
        <DrawerHeader className="text-center">
          <DrawerTitle>{title}</DrawerTitle>
        </DrawerHeader>

        {/* content */}
        <FormUsers />
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerModal;
