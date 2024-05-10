import Image from "next/image";
import Link from "next/link";
import React from "react";

const LatestCardPost = () => {
  return (
    <Link href={`/posts/${"a"}`}>
      <div className="flex">
        {/* thumbnail */}
        <div className="relative flex-shrink-0 w-[30%] h-36">
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
          <h1 className="card-title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sunt
            ducimus sequi harum
          </h1>
          <p className="card-subtitle">
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

export default LatestCardPost;
