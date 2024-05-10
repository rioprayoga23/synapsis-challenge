import Image from "next/image";
import Link from "next/link";

import ButtonAction from "@/components/shared/ButtonAction";
import InfoItem from "@/components/shared/InfoItem";

const CardUser = () => {
  return (
    <div className="card-users">
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
          <h3 className="users-name">Gudakesa Mehrotra JD</h3>
          <div className="flex flex-col items-center text-center sm:items-start sm:text-start mt-1">
            <Link href="mailto:someone@example.com" target="_blank">
              <InfoItem
                type={"email"}
                title="jd_gudakesa_mehrotra@huels-sanford.example"
              />
            </Link>

            <InfoItem type={"gender"} title="Female" />
            <InfoItem type={"status"} title="Active" />
          </div>
        </div>

        <div className="user-actions">
          <ButtonAction action="edit" />
          <ButtonAction action="delete" />
        </div>
      </div>

      {/* <div className="user-actions-small">
        <ButtonAction action="edit" />
        <ButtonAction action="delete" />
      </div> */}
    </div>
  );
};

export default CardUser;
