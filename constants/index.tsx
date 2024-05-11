import { configs } from "@/configs";
import {
  CheckCircleIcon,
  EditIcon,
  LayoutGrid,
  MailIcon,
  PlusIcon,
  Trash2,
  User,
  Users,
} from "lucide-react";

export const navlink = [
  {
    name: "Beranda",
    route: "/",
    icon: <LayoutGrid size={18} />,
  },
  {
    name: "Users",
    route: "/users",
    icon: <Users size={18} />,
  },
];

export const Status = [
  {
    label: "Active",
    value: "active",
  },
  {
    label: "Inactive",
    value: "inactive",
  },
];

export const Gender = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
];

export const InfoIcon = ({ type }: InfoItemProps) => {
  switch (type) {
    case "email":
      return <MailIcon className="mt-[2px]" />;
    case "gender":
      return <User className="mt-[2px]" />;
    case "status":
      return <CheckCircleIcon className="mt-[2px]" />;
    default:
      null;
  }
};

export const actionType = ({ action }: ButtonActionProps) => {
  switch (action) {
    case "edit":
      return (
        <>
          <EditIcon width={20} />
          Edit
        </>
      );

    case "delete":
      return (
        <>
          <Trash2 width={20} />
          Delete
        </>
      );

    case "add":
      return (
        <>
          <PlusIcon width={20} />
          Save
        </>
      );

    default:
      null;
  }
};

export const ModalTitle = (modalAction: string) => {
  switch (modalAction) {
    case "add":
      return "Add User";
    case "edit":
      return "Edit User";
    case "delete":
      return "Delete User";
  }
};

export const metaDataHome = {
  title:
    "Become the number one Internet of Things solution provider company. | Synapsis.id",
  canonical: "https://rio-synapsis-challenge.vercel.app/",
  description:
    "PT. Synapsis Sinergi Digital, is a company that working on system prototyping especially Internet of Things systems and devices.",
  ogImage: "",
};

export const metaDataUsers = {
  title: "Users | Synapsis.id",
  canonical: "https://rio-synapsis-challenge.vercel.app/users",
  description:
    "PT. Synapsis Sinergi Digital, is a company that working on system prototyping especially Internet of Things systems and devices.",
  ogImage: "",
};

export const metaDataPostDetail = {
  title: "",
  canonical: "",
  description:
    "PT. Synapsis Sinergi Digital, is a company that working on system prototyping especially Internet of Things systems and devices.",
  ogImage: "https://imagetolink.com/ib/bnYKYi44LJ.jpg",
};
