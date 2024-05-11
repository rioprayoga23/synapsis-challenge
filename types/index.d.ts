declare type HeroProps = {
  title: string;
  subtitle: string;
};

declare type ProfileProps = {
  name: string;
  comment?: boolean;
  commentBody?: string;
};

declare type InfoItemProps = {
  type: "email" | "gender" | "status";
  title?: string;
};

declare type ButtonActionProps = {
  disabled?: boolean;
  handleAction?: any;
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

declare type Posts = {
  id: number;
  user_id: number;
  title: string;
  body: string;
};

declare type CardPostProps = {
  data?: Posts;
  column?: boolean;
  refCard?: any;
};

declare type Users = {
  id: number;
  name: string;
  email: string;
  gender: string;
  status: string;
};

declare type Comments = {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
};

declare type PostDetailPageProps = {
  postData: Posts;
  latestPostsData: Posts[];
  userData: Users;
  commentsData: Comments[];
};

declare type UserPayload = {
  id?: string;
  name: string;
  email: string;
  gender: string;
  status: string;
};

declare type ReduxSetModalProps = {
  modalAction: "add" | "edit" | "delete";
  data?: any;
};

declare type AnimationArgs = {
  name: string;
  delay: string;
};
