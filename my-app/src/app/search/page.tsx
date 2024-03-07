import PostList from "@/components/posts/post-list";
import { fetchPostsBySearchTerm } from "@/db/queries/post";
import { redirect } from "next/navigation";

interface SearchPageProps {
  searchParams: {
    searchTerm: string;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { searchTerm } = searchParams;

  if (!searchTerm) {
    redirect("/");
  }

  return (
    <div>
      <PostList fetchData={() => fetchPostsBySearchTerm(searchTerm)} />
    </div>
  );
}
