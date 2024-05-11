import CardPost from "@/components/shared/CardPost";
import Hero from "@/components/shared/Hero";
import SkeletonCardPost from "@/components/shared/SkeletonCardPost";
import { useAllPosts } from "@/services/posts/queries";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const PostsPage = () => {
  const postsQuery = useAllPosts();

  const [ref, inView] = useInView({
    threshold: 1,
    skip: !postsQuery.hasNextPage,
  });

  useEffect(() => {
    if (inView) {
      postsQuery.fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <Hero
        title="Synapsis Sinergi Digital"
        subtitle="Become the number one Internet of Things solution provider company."
      />

      <div className="container py-10">
        <div className="mb-10">
          <h3 className="title">Our Posts</h3>
          <h4 className="subtitle">
            Get the latest, hottest, and most updated information.
          </h4>
        </div>

        <div className="wrap-posts">
          {postsQuery.data?.pages.map((item: any, index) =>
            item.data.map((subItem: Posts) => (
              <CardPost data={subItem} refCard={ref} key={index} />
            ))
          )}

          {/* show skeleton when loading */}
          {(postsQuery.isFetching || postsQuery.isLoading) &&
            !postsQuery.isError &&
            Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCardPost key={index} />
            ))}
        </div>
      </div>
    </>
  );
};

export default PostsPage;
