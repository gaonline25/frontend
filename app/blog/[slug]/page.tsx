// "use client";

// import React, { useEffect, useState } from "react";

// interface Media {
//   id: string;
//   url: string;
//   cloudinary_url?: string;
//   alt?: string;
//   width?: number;
//   height?: number;
// }

// interface BlogPost {
//   id: string;
//   title: string;
//   slug: string;
//   excerpt: string;
//   publishedDate: string;
//   status: string;
//   featuredImage?: {
//     image?: Media;
//     mobile?: Media;
//     tablet?: Media;
//     desktop?: Media;
//     alt?: string;
//   };
// }

// const PAYLOAD_URL =
//   process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3001";

// const Blog: React.FC = () => {
//   const [posts, setPosts] = useState<BlogPost[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         // Fetch ALL blog posts first (no filters)
//         const response = await fetch(
//           `${PAYLOAD_URL}/api/blog?depth=1&sort=-publishedDate&limit=100`
//         );

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();

//         console.log("Full API Response:", data);
//         console.log("Total Docs:", data.totalDocs);
//         console.log("Docs Array:", data.docs);

//         // Filter published posts on the frontend for now
//         const publishedPosts =
//           data.docs?.filter((post: BlogPost) => post.status === "published") ||
//           [];

//         console.log("Published Posts:", publishedPosts);

//         setPosts(publishedPosts);
//       } catch (error) {
//         console.error("Error fetching blog posts:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPosts();
//   }, []);

//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     const day = date.getDate();
//     const month = date.toLocaleString("en-US", { month: "short" });
//     return { day, month };
//   };

//   const getImageUrl = (media?: Media) => {
//     if (!media) return null;
//     // Prefer cloudinary_url, fallback to url
//     return media.cloudinary_url || media.url;
//   };

//   if (loading) {
//     return (
//       <main id="main">
//         <div className="partial_abstract_type_hero banner" data-s3-partial>
//           <div className="row">
//             <div className="inner">
//               <h1>Blog</h1>
//               <ul className="partial_breadcrumb" data-s3-partial>
//                 <li>
//                   <a
//                     href="/"
//                     role="link"
//                     aria-label="Breadcrumbs to help navigate the user"
//                   >
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/blog/"
//                     role="link"
//                     aria-label="Breadcrumbs to help navigate the user"
//                   >
//                     Blog
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="container">
//           <div className="row">
//             <div className="partial_blog_index" data-s3-partial>
//               <p>Loading...</p>
//             </div>
//           </div>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main id="main">
//       {/* Blog Layout */}
//       {/* Abstract Type Hero Partial */}
//       <div className="partial_abstract_type_hero banner" data-s3-partial>
//         <div className="row">
//           <div className="inner">
//             <h1>Blog</h1>
//             <ul className="partial_breadcrumb" data-s3-partial>
//               <li>
//                 <a
//                   href="/"
//                   role="link"
//                   aria-label="Breadcrumbs to help navigate the user"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/blog/"
//                   role="link"
//                   aria-label="Breadcrumbs to help navigate the user"
//                 >
//                   Blog
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         <div className="row">
//           <div className="partial_blog_index" data-s3-partial>
//             {posts.length === 0 ? (
//               <p>No published blog posts found. Check console for details.</p>
//             ) : (
//               posts.map((post, index) => {
//                 const { day, month } = formatDate(post.publishedDate);
//                 const mainImageUrl = getImageUrl(post.featuredImage?.image);
//                 const mobileImageUrl = getImageUrl(post.featuredImage?.mobile);
//                 const tabletImageUrl = getImageUrl(post.featuredImage?.tablet);
//                 const desktopImageUrl = getImageUrl(
//                   post.featuredImage?.desktop
//                 );

//                 return (
//                   <React.Fragment key={post.id}>
//                     <div className="index-item">
//                       <div className="date">
//                         <p className="day">{day}</p>
//                         <p className="month">{month}</p>
//                       </div>
//                       <div className="content">
//                         {mainImageUrl && (
//                           <a
//                             href={`/blog/${post.slug}/`}
//                             className="image"
//                             title="View blog article"
//                             aria-label="View blog article"
//                           >
//                             <picture className="">
//                               {mobileImageUrl && (
//                                 <source
//                                   media="(max-width:420px)"
//                                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                                   data-lazyload-srcset={`${mobileImageUrl}?w=420 1x, ${mobileImageUrl}?w=630 2x`}
//                                 />
//                               )}
//                               {tabletImageUrl && (
//                                 <source
//                                   media="(max-width:800px)"
//                                   srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                                   data-lazyload-srcset={`${tabletImageUrl}?w=800 1x, ${tabletImageUrl}?w=1200 2x`}
//                                 />
//                               )}
//                               <source
//                                 srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                                 data-lazyload-srcset={`${
//                                   desktopImageUrl || mainImageUrl
//                                 }?w=800`}
//                               />
//                               <img
//                                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
//                                 data-lazyload-src={`${mainImageUrl}?w=800`}
//                                 loading="lazy"
//                                 data-lazyload="img"
//                                 width="800"
//                                 height="NaN"
//                                 alt={post.featuredImage?.alt || post.title}
//                                 draggable="false"
//                               />
//                             </picture>
//                           </a>
//                         )}
//                         <h2 className="title">
//                           <a href={`/blog/${post.slug}/`} rel="bookmark">
//                             {post.title}
//                           </a>
//                         </h2>
//                         <p>{post.excerpt}</p>
//                         <a
//                           className="btn"
//                           href={`/blog/${post.slug}/`}
//                           title="View full blog article"
//                           aria-label="View full blog article"
//                         >
//                           View More
//                         </a>
//                       </div>
//                     </div>
//                     {index < posts.length - 1 && <hr />}
//                   </React.Fragment>
//                 );
//               })
//             )}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Blog;




"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

interface Media {
  id: string;
  url: string;
  cloudinary_url?: string;
  alt?: string;
  width?: number;
  height?: number;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: any;
  publishedDate: string;
  status: string;
  featuredImage?: {
    image?: Media;
    mobile?: Media;
    tablet?: Media;
    desktop?: Media;
    alt?: string;
  };
}

const PAYLOAD_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_URL || "http://localhost:3001";

const BlogPost: React.FC = () => {
  const params = useParams();
  const slug = params?.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      try {
        const response = await fetch(
          `${PAYLOAD_URL}/api/blog?depth=2&where[slug][equals]=${slug}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Single Post API Response:", data);

        if (data.docs && data.docs.length > 0) {
          setPost(data.docs[0]);
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const renderLexicalContent = (content: any): JSX.Element[] => {
    if (!content || !content.root || !content.root.children) {
      return [];
    }

    const renderNode = (node: any, index: number): JSX.Element | null => {
      if (node.type === "text") {
        let text = node.text;

        if (node.format === 1) {
          return <strong key={index}>{text}</strong>;
        }
        if (node.format === 2) {
          return <em key={index}>{text}</em>;
        }

        return <React.Fragment key={index}>{text}</React.Fragment>;
      }

      if (node.type === "paragraph") {
        return (
          <p key={index}>
            {node.children?.map((child: any, i: number) =>
              renderNode(child, i)
            )}
          </p>
        );
      }

      if (node.type === "heading") {
        const Tag = node.tag || "h2";
        return (
          <Tag key={index} className="wp-block-heading">
            {node.children?.map((child: any, i: number) =>
              renderNode(child, i)
            )}
          </Tag>
        );
      }

      if (node.type === "link") {
        const url = node.fields?.url || "#";
        const newTab = node.fields?.newTab || false;

        return (
          <Link
            key={index}
            href={url}
            target={newTab ? "_blank" : undefined}
            rel={newTab ? "noopener noreferrer" : undefined}
          >
            {node.children?.map((child: any, i: number) =>
              renderNode(child, i)
            )}
          </Link>
        );
      }

      if (node.type === "list") {
        const ListTag = node.tag || "ul";
        return (
          <ListTag key={index}>
            {node.children?.map((child: any, i: number) =>
              renderNode(child, i)
            )}
          </ListTag>
        );
      }

      if (node.type === "listitem") {
        return (
          <li key={index}>
            {node.children?.map((child: any, i: number) =>
              renderNode(child, i)
            )}
          </li>
        );
      }

      return null;
    };

    return content.root.children
      .map((node: any, index: number) => renderNode(node, index))
      .filter(Boolean);
  };

  const getImageUrl = (media?: Media) => {
    if (!media) return null;
    return media.cloudinary_url || media.url;
  };

  if (loading) {
    return (
      <main id="main">
        <div className="partial_abstract_type_hero banner" data-s3-partial="">
          <div className="row">
            <div className="inner">
              <h1>Loading...</h1>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (!post) {
    return (
      <main id="main">
        <div className="partial_abstract_type_hero banner" data-s3-partial="">
          <div className="row">
            <div className="inner">
              <h1>Post Not Found</h1>
            </div>
          </div>
        </div>
      </main>
    );
  }

  const mainImageUrl = getImageUrl(post.featuredImage?.image);
  const mobileImageUrl = getImageUrl(post.featuredImage?.mobile);
  const tabletImageUrl = getImageUrl(post.featuredImage?.tablet);
  const desktopImageUrl = getImageUrl(post.featuredImage?.desktop);

  return (
    <main id="main">
      <div className="partial_abstract_type_hero banner" data-s3-partial="">
        <div className="row">
          <div className="inner">
            <h1>{post.title}</h1>
            <ul className="partial_breadcrumb" data-s3-partial="">
              <li>
                <Link
                  href="/"
                  role="link"
                  aria-label="Breadcrumbs to help navigate the user"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/"
                  role="link"
                  aria-label="Breadcrumbs to help navigate the user"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href={`/blog/${post.slug}/`}
                  role="link"
                  aria-label="Breadcrumbs to help navigate the user"
                >
                  {post.title}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row post">
          <div className="partial_article_item" data-s3-partial="">
            <div className="content">
              {mainImageUrl && (
                <div className="image">
                  <picture className="">
                    {mobileImageUrl && (
                      <source
                        media="(max-width:420px)"
                        srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        data-lazyload-srcset={`${mobileImageUrl}?w=420, ${mobileImageUrl}?w=630 2x`}
                      />
                    )}
                    {tabletImageUrl && (
                      <source
                        media="(max-width:800px)"
                        srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                        data-lazyload-srcset={`${tabletImageUrl}?w=800, ${tabletImageUrl}?w=1200 2x`}
                      />
                    )}
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset={`${
                        desktopImageUrl || mainImageUrl
                      }?w=800`}
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src={`${mainImageUrl}?w=800`}
                      loading="lazy"
                      data-lazyload="img"
                      width="800"
                      height={NaN}
                      alt={post.featuredImage?.alt || ""}
                      draggable="false"
                    />
                  </picture>
                </div>
              )}
              {renderLexicalContent(post.content)}
            </div>
          </div>
          <hr />
          <Link href="/blog/" className="btn mb-20">
            Back to Blog
          </Link>
        </div>
      </div>
    </main>
  );
};

export default BlogPost;