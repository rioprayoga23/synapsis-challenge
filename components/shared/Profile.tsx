import Image from "next/image";
import React from "react";

const Profile = ({ comment, name, commentBody }: ProfileProps) => {
  return (
    <div
      className={`flex ${
        comment ? "items-start" : "items-center"
      }  gap-2 my-4 mf:my-5`}
    >
      <div
        className={`relative ${
          comment
            ? "w-12 h-12 md:w-14 md:h-14 rounded-xl"
            : "w-8 h-8 md:w-10 md:h-10 rounded-full"
        } overflow-hidden border-2 border-primary flex-shrink-0`}
      >
        <Image
          src={"/images/hero.jpg"}
          alt="avatar"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <div>
        <h2 className="text-sm md:text-lg font-medium">{name}</h2>
        {comment && <p className="text-gray-300">{commentBody}</p>}
      </div>
    </div>
  );
};

export default Profile;
