import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardPost = ({ column = false }: { column?: boolean }) => {
  return (
    <Link href={`/posts/${"a"}`}>
      <div
        className={`card-post ${
          !column ? "scale-animation" : "lg:flex gap-2 hover:border-primary"
        }`}
      >
        {/* thumbnail */}
        <div
          className={`card-thumbnail relative ${
            column && "flex-shrink-0 lg:w-[45%] xl:w-[40%] !h-[132px]"
          }`}
        >
          <Image
            src="/images/hero.jpg"
            className="rounded-xl"
            alt="img"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* title */}
        <div>
          <h1 className={`card-title ${column && "md:!mt-0"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sunt
            ducimus sequi harum
          </h1>
          <p className={`card-subtitle ${column && "!line-clamp-3"}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id illo
            qui, sapiente aut nobis consequatur aliquam perferendis laborum
            blanditiis? Debitis accusamus vitae aut nobis a illum mollitia!
            Animi, veritatis earum.
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardPost;
