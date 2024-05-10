import Image from "next/image";
import { useRouter } from "next/router";

import Author from "@/components/shared/Author";
import CardPost from "@/components/shared/CardPost";
import Comment from "@/components/shared/Comment";

const PostDetailPage = () => {
  const { query } = useRouter();

  return (
    <div className="container">
      {/* header */}
      <div className="post-header">
        <div className="col-span-2">
          {/* Title */}
          <h1>
            Stips abundans verbera vito volutabrum thesaurus cursus quae
            tamquam.
          </h1>

          {/* Author */}
          <Author />
        </div>
      </div>

      {/* content */}
      <article className="article">
        <div className="post-content">
          {/* thumbnail */}
          <div className="thumbnail">
            <Image
              src="/images/hero.jpg"
              className="rounded-xl"
              alt="asd"
              fill
              priority
              sizes="(min-width: 808px) 50vw, 100vw"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* description */}
          <p className="description">
            Tamen amplus spero. Bene via dolore. Uredo xiphias certus.
            Thalassinus vel speculum. Tantillus defigo incidunt. Sed cervus
            creo. Voluntarius crapula umerus. Apparatus thermae ager. Thesaurus
            voluptates argumentum. Cum talio curvo. Absconditus spero voluptas.
            Error volaticus conitor. Adsidue vulgivagus tremo. Cursim coepi
            demoror. Odio cunabula vir. Verecundia terror bonus. Verbum
            curiositas creta. Balbus dolore spes. Appositus arma amor.
          </p>
        </div>

        <aside>
          <h2 className="latest-title">Latest Posts</h2>
          <div className="wrap-latest-post">
            {Array.from({ length: 3 }).map((_, index) => (
              <CardPost column key={index} />
            ))}
          </div>
        </aside>
      </article>

      {/* comment */}
      <Comment />
    </div>
  );
};

export default PostDetailPage;
