import Author from "@/components/shared/Author";
import CardPost from "@/components/shared/CardPost";
import Comment from "@/components/shared/Comment";
import CImage from "@/components/shared/Image";
import getCommentById from "@/services/comments/api";
import { getAllPosts, getPostById } from "@/services/posts/api";
import { getUserById } from "@/services/users/api";

const PostDetailPage = ({
  postData,
  userData,
  latestPostsData,
  commentsData,
}: PostDetailPageProps) => {
  return (
    <div className="container">
      {/* header */}
      <div className="post-header">
        <div className="col-span-2">
          {/* Title */}
          <h1>{postData?.title}</h1>

          {/* Author */}
          <Author name={userData?.name || "Unknown"} />
        </div>
      </div>

      {/* content */}
      <article className="article">
        <div className="post-content">
          {/* thumbnail */}
          <div className="thumbnail">
            <CImage
              src="/images/posts.jpg"
              className="rounded-xl"
              alt={postData?.title}
              sizes="(min-width: 808px) 50vw, 100vw"
              style={{ objectFit: "cover" }}
              fill
              priority
            />
          </div>

          {/* description */}
          <p className="description">{postData?.body}</p>
        </div>

        <aside>
          <h2 className="latest-title">Latest Posts</h2>
          <div className="wrap-latest-post">
            {latestPostsData?.length > 0 &&
              latestPostsData?.map((item, index) => (
                <CardPost data={item} column key={index} />
              ))}
          </div>
        </aside>
      </article>

      {/* comment */}
      <Comment data={commentsData} />
    </div>
  );
};

export default PostDetailPage;

export const getServerSideProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  //* get post data by id
  //* get 3 latest post data

  const [postData, latestPosts] = await Promise.all([
    getPostById(params?.slug),
    getAllPosts({ params: { page: 1, per_page: 3 } }),
  ]);

  //* check if post data is not found
  if (!postData) return { notFound: true };

  //* get user data by user id
  const userData = await getUserById(postData.user_id?.toString());

  //* get comment data by post id
  const commentsData = await getCommentById(postData.id?.toString());

  return {
    props: {
      postData,
      latestPostsData: latestPosts?.data ?? [],
      userData: userData ?? {},
      commentsData: commentsData ?? [],
    },
  };
};
