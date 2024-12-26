import Feature from "@/components/Feature";
import Mega from "@/components/Mega";
import CommentSection from "@/components/Comment-sec";
import AuthorCard from "@/components/AuthorCard";

export default function Home() {
  return (
   <div>
    <Feature />
    <Mega />
    <CommentSection postId="1"/>
    <AuthorCard />
   </div>
  );
}
