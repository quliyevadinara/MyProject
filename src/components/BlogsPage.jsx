import React, { useContext } from "react";
import { LangContext } from "../App";

const BlogsPage = () => {
  const blogsData = [
    {
      id: 1,
      title: "Blog 1",
      description: "This is the description of blog 1",
      image: "https://template.hasthemes.com/hurst-v1/hurst/img/blog/3.jpg",
    },
    {
      id: 2,
      title: "Blog 2",
      description: "This is the description of blog 2",
      image: "https://template.hasthemes.com/hurst-v1/hurst/img/blog/4.jpg",
    },
    {
      id: 3,
      title: "Blog 3",
      description: "This is the description of blog 3",
      image: "https://template.hasthemes.com/hurst-v1/hurst/img/blog/5.jpg",
    },
  ];
  const [lang, setLang] = useContext(LangContext);

  return (
    <div className="blogs-page">
     {
        lang=='en' ? <h3>From The Blog</h3> : <h3>Blogdan</h3>
     }

      <div className="blogs">
        {blogsData.map((blog) => (
          <div className="blog" key={blog.id}>
            <img src={blog.image} alt={blog.title} />
            <div className="blog-title">
              <div className="title-1">
                <span>15</span>
              </div>

              <div className="title-2">
                <span>July,2024</span>
                <h6>Farniture drawing 2024</h6>
              </div>
            </div>
            <p className="blog-description">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered If you are going to use a passage
              Lorem Ipsum, you alteration in some form.
            </p>
            {
                lang=='en' ? <p className="read-more">Read more...</p> : <p className="read-more">Daha çox oxu...</p>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
