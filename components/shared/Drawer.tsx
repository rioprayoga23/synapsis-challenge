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
import { ModalTitle } from "@/constants";
import DeleteAlert from "./DeleteAlert";

const DrawerModal = () => {
  const { isOpen, modalAction } = useSelector(
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

  const Content = () =>
    modalAction === "" ? null : modalAction === "delete" ? (
      <DeleteAlert />
    ) : (
      <FormUsers />
    );

  if (isDesktop) {
    return (
      <Dialog open={isOpen} onOpenChange={onChangeModal}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{ModalTitle(modalAction)}</DialogTitle>
          </DialogHeader>

          {/* content */}
          <Content />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={isOpen} onOpenChange={onChangeModal}>
      <DrawerContent className="container pb-10">
        <DrawerHeader className="text-center">
          <DrawerTitle>{ModalTitle(modalAction)}</DrawerTitle>
        </DrawerHeader>

        {/* content */}
        <Content />
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerModal;
