import Image from "next/image";
import Link from "next/link";

import ButtonAction from "@/components/shared/ButtonAction";
import InfoItem from "@/components/shared/InfoItem";
import { useDeleteUser } from "@/services/users/mutation";
import { useDispatch } from "react-redux";
import { setModal } from "@/store/modal/action";

const CardUser = ({ data, refCard }: { data: Users; refCard: any }) => {
  const deleteUserMutation = useDeleteUser();
  const dispatch = useDispatch();

  const onDeleteAction = () => {
    deleteUserMutation.mutate(data?.id?.toString());
  };

  const onEditAction = () => {
    dispatch(setModal({ modalAction: "edit", data }));
  };

  return (
    <div className="card-users" ref={refCard}>
      {/* avatar image */}
      <div className="avatar flex-shrink-0">
        <Image
          src="/images/avatar.jpg"
          width={100}
          height={100}
          alt="avatar"
          className="rounded-full"
        />
      </div>

      {/* user information */}
      <div className="content-users">
        <div>
          <h3 className="users-name">{data?.name}</h3>
          <div className="flex flex-col items-center text-center sm:items-start sm:text-start mt-1">
            <Link href="mailto:someone@example.com" target="_blank">
              <InfoItem type={"email"} title={data?.email} />
            </Link>

            <InfoItem type={"gender"} title={data?.gender} />
            <InfoItem type={"status"} title={data?.status} />
          </div>
        </div>

        <div className="user-actions">
          <ButtonAction handleAction={onEditAction} action="edit" />
          <ButtonAction handleAction={onDeleteAction} action="delete" />
        </div>
      </div>
    </div>
  );
};

export default CardUser;
