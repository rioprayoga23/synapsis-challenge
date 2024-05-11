import { useDeleteUser } from "@/services/users/mutation";
import { IRootState } from "@/store";
import { clearModal } from "@/store/modal/action";
import { useDispatch, useSelector } from "react-redux";
import ButtonAction from "./ButtonAction";

const DeleteAlert = () => {
  const { data } = useSelector((state: IRootState) => state.modal);
  const deleteUserMutation = useDeleteUser();
  const dispatch = useDispatch();

  const onDeleteAction = () => {
    deleteUserMutation.mutate(data?.id?.toString());
    dispatch(clearModal());
  };

  return (
    <div>
      <h3 className="mb-5">Are you sure wante to delete this data?</h3>
      <ButtonAction handleAction={onDeleteAction} action="delete" />
    </div>
  );
};

export default DeleteAlert;
