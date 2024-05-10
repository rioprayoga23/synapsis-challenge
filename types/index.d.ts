declare type HeroProps = {
  title: string;
  subtitle: string;
};

declare type ProfileProps = {
  comment?: boolean;
};

declare type InfoItemProps = {
  type: "email" | "gender" | "status";
  title?: string;
};

declare type ButtonActionProps = {
  action: "edit" | "delete" | "add";
};

declare type InputWithLabelProps = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
};

declare type FormSchema = {
  name: string;
  email: string;
  gender: string;
  status: string;
};
