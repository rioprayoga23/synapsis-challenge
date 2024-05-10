import CardPost from "@/components/shared/CardPost";
import Hero from "@/components/shared/Hero";

const PostsPage = () => {
  return (
    <>
      <Hero
        title="Synapsis Sinergi Digital"
        subtitle="Become the number one Internet of Things solution provider company."
      />

      <section className="container py-10">
        <div className="mb-10">
          <h3 className="title">Our Posts</h3>
          <h4 className="subtitle">
            Get the latest, hottest, and most updated information.
          </h4>
        </div>

        <div className="wrap-posts">
          {Array.from({ length: 10 }).map((_, index) => (
            <CardPost key={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default PostsPage;
