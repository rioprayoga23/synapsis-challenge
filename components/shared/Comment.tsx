import { MessageCircle } from "lucide-react";
import Profile from "./Profile";

const Comment = () => {
  return (
    <section className="comment">
      <div className="col-span-2">
        <div className="comment-header">
          <MessageCircle className="pe-1" />
          <p>{`${"10"} Komentar`}</p>
        </div>

        <div className="mt-8">
          {Array.from({ length: 5 }).map((_, index) => (
            <Profile comment key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comment;
