const blogs = [
  { id: 1, img: "/images/blogs/blog1.webp", top: "30%", left: "12%" },
  { id: 2, img: "/images/blogs/blog2.webp", top: "30%", right: "12%" },
  { id: 3, img: "/images/blogs/blog3.webp", top: "55%", left: "20%" },
  { id: 4, img: "/images/blogs/blog4.webp", top: "55%", right: "20%" },
];

export default function BlogNodes() {
  return (
    <>
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="absolute w-[160px] aspect-video rounded-lg overflow-hidden shadow-lg"
          style={{
            top: blog.top,
            left: blog.left,
            right: blog.right,
          }}
        >
          <img
            src={blog.img}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </>
  );
}
