import Image from "next/image";
import Link from "next/link";

const CardPost = ({ data, column = false, refCard }: CardPostProps) => {
  return (
    <Link href={`/posts/${"a"}`} ref={refCard}>
      <div
        className={`card card-post hover-active ${
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
            {data?.title}
          </h1>
          <p className={`card-subtitle ${column && "!line-clamp-3"}`}>
            {data?.body}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CardPost;
