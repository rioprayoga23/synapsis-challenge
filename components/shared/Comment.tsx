import { MessageCircle } from "lucide-react";
import Profile from "./Profile";

const Comment = ({ data }: { data: Comments[] }) => {
  return (
    <section className="comment">
      <div className="col-span-2">
        <div className="comment-header">
          <MessageCircle className="pe-1" />
          <p>{`${data?.length} Comment`}</p>
        </div>

        {data.length <= 0 && <div className="no-comments">No Comments Yet</div>}

        <div className="mt-8">
          {data?.map((item, index) => (
            <Profile
              name={item.name}
              commentBody={item.body}
              comment
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comment;
