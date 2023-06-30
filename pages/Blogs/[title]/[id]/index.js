import BlogDetails from "@/components/Blogs/BlogMain";
import http from "@/redux/http-common";

const Blogs  = ({ blog, tags, recent }) => {
  return(
    <>
    <BlogDetails blog={blog} tags={tags} recent={recent}/>
    </>
  )
};

export const getServerSideProps = async (context) => {
  const { title = "", id = "" } = context.query;
  let blog = "";
  let tags = "";
  let recent = "";
  await http.get(`/getBlog/${id}`).then((res) => (blog = res.data[0]));
  await http.get(`/getBlogTags`).then((res) => (tags = res?.data));
  await http.get(`/getRecentBlog`).then((res) => (recent = res?.data));

  return {
    props: {
      blog,
      tags,
      recent,
    },
  };
};

export default Blogs