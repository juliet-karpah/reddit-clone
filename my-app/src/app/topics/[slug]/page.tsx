import CreatePostForm from "@/components/posts/create-form";
import PostList from "@/components/posts/post-list";
import { fetchPostsByTopicSlug } from "@/db/queries/post";

interface TopicShowPageProps {
  params: {
    slug: string;
  };
}

export default function TopicShowPage(props: TopicShowPageProps) {
  const { slug } = props.params;
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        {" "}
        <h1 className="text-xl m-2"> {slug} </h1>{" "}
        <PostList fetchData={()=>fetchPostsByTopicSlug(slug)}/>
      </div>
      <div>
        {" "}
        <CreatePostForm slug={slug} />{" "}
      </div>
    </div>
  );
}
