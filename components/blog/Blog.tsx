import React from "react";

const Blog: React.FC = () => {
  return (
    <main id="main">
      {/* Blog Layout */}
      {/* Abstract Type Hero Partial */}
      <div className="partial_abstract_type_hero banner" data-s3-partial>
        <div className="row">
          <div className="inner">
            <h1>Blog</h1>
            <ul className="partial_breadcrumb" data-s3-partial>
              <li>
                <a
                  href="/"
                  role="link"
                  aria-label="Breadcrumbs to help navigate the user"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/blog/"
                  role="link"
                  aria-label="Breadcrumbs to help navigate the user"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="partial_blog_index" data-s3-partial>
            <div className="index-item">
              <div className="date">
                <p className="day">12</p>
                <p className="month">Sep</p>
              </div>
              <div className="content">
                <a
                  href="/blog/botox-101/"
                  className="image"
                  title="View blog article"
                  aria-label="View blog article"
                >
                  <picture className="">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694547145-botox-cosmetic-near-me-png.webp?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694547145-botox-cosmetic-near-me-png.webp?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694547145-botox-cosmetic-near-me-png.webp?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694547145-botox-cosmetic-near-me-png.webp?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694547145-botox-cosmetic-near-me-png.webp?auto=format,compress&w=800"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694547145-botox-cosmetic-near-me-png.webp?auto=format,compress&w=800"
                      loading="lazy"
                      data-lazyload="img"
                      width="800"
                      height="NaN"
                      alt=""
                      draggable="false"
                    />
                  </picture>
                </a>
                <h2 className="title">
                  <a href="/blog/botox-101/" rel="bookmark">
                    Botox 101
                  </a>
                </h2>
                <p>
                  What Is Botox? Botox is a popular cosmetic treatment
                  administered to millions of people each year. Botox is the
                  brand name for a substance injected into the skin that can
                  prevent wrinkles by inhibiting muscle movement. Botox,
                  otherwise known as the cosmetic form of Botulinum toxi...
                </p>
                <a
                  className="btn"
                  href="/blog/botox-101/"
                  title="View full blog article"
                  aria-label="View full blog article"
                >
                  View More
                </a>
              </div>
            </div>
            <hr />
            <div className="index-item">
              <div className="date">
                <p className="day">12</p>
                <p className="month">Sep</p>
              </div>
              <div className="content">
                <a
                  href="/blog/10-benefits-of-dermal-fillers/"
                  className="image"
                  title="View blog article"
                  aria-label="View blog article"
                >
                  <picture className="">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694547076-content-img2-3-1536x1024-jpg.webp?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694547076-content-img2-3-1536x1024-jpg.webp?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694547076-content-img2-3-1536x1024-jpg.webp?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694547076-content-img2-3-1536x1024-jpg.webp?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694547076-content-img2-3-1536x1024-jpg.webp?auto=format,compress&w=800"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694547076-content-img2-3-1536x1024-jpg.webp?auto=format,compress&w=800"
                      loading="lazy"
                      data-lazyload="img"
                      width="800"
                      height="NaN"
                      alt=""
                      draggable="false"
                    />
                  </picture>
                </a>
                <h2 className="title">
                  <a href="/blog/10-benefits-of-dermal-fillers/" rel="bookmark">
                    10 Benefits of Dermal Fillers
                  </a>
                </h2>
                <p>
                  What Are Dermal Fillers? Dermal fillers are small injections
                  that enhance the appearance of the skin. These fillers will
                  restore the natural substances that keep skin looking young,
                  such as elastin, collagen, and hyaluronic acid. These
                  substances keep skin tight and smooth a...
                </p>
                <a
                  className="btn"
                  href="/blog/10-benefits-of-dermal-fillers/"
                  title="View full blog article"
                  aria-label="View full blog article"
                >
                  View More
                </a>
              </div>
            </div>
            <hr />
            <div className="index-item">
              <div className="date">
                <p className="day">12</p>
                <p className="month">Sep</p>
              </div>
              <div className="content">
                <h2 className="title">
                  <a href="/blog/facials-the-what-why-and-when/" rel="bookmark">
                    Facials: the What, Why and When
                  </a>
                </h2>
                <p>
                  At Goldfingers Aesthetics Lady Lake / Villages, we believe in
                  comprehensive, holistic facial careas well as customized
                  treatment plans. Read on to understand why we believe facials
                  to be akey component in many customized treatment plans. Why
                  get a professional facial? A really go...
                </p>
                <a
                  className="btn"
                  href="/blog/facials-the-what-why-and-when/"
                  title="View full blog article"
                  aria-label="View full blog article"
                >
                  View More
                </a>
              </div>
            </div>
            <hr />
            <div className="index-item">
              <div className="date">
                <p className="day">12</p>
                <p className="month">Sep</p>
              </div>
              <div className="content">
                <a
                  href="/blog/eleven-ways-to-maintain-a-youthful-appearance/"
                  className="image"
                  title="View blog article"
                  aria-label="View blog article"
                >
                  <picture className="">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694546995-img-3797-1536x2048-jpg.webp?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694546995-img-3797-1536x2048-jpg.webp?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694546995-img-3797-1536x2048-jpg.webp?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694546995-img-3797-1536x2048-jpg.webp?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694546995-img-3797-1536x2048-jpg.webp?auto=format,compress&w=800"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694546995-img-3797-1536x2048-jpg.webp?auto=format,compress&w=800"
                      loading="lazy"
                      data-lazyload="img"
                      width="800"
                      height="NaN"
                      alt=""
                      draggable="false"
                    />
                  </picture>
                </a>
                <h2 className="title">
                  <a
                    href="/blog/eleven-ways-to-maintain-a-youthful-appearance/"
                    rel="bookmark"
                  >
                    Eleven Ways to Maintain a Youthful Appearance
                  </a>
                </h2>
                <p>
                  1. Dermal FillersOur customers choose dermal fillers to
                  enhance their facial features or gain a more youthful
                  appearance. Dermal fillers are injections that plump up
                  wrinkles smooth lines, and restore volume to your face. There
                  are several types of dermal fillers. Our licensed a...
                </p>
                <a
                  className="btn"
                  href="/blog/eleven-ways-to-maintain-a-youthful-appearance/"
                  title="View full blog article"
                  aria-label="View full blog article"
                >
                  View More
                </a>
              </div>
            </div>
            <hr />
            <div className="index-item">
              <div className="date">
                <p className="day">12</p>
                <p className="month">Sep</p>
              </div>
              <div className="content">
                <a
                  href="/blog/the-importance-of-customized-aesthetic-treatment-plans-for-older-adults/"
                  className="image"
                  title="View blog article"
                  aria-label="View blog article"
                >
                  <picture className="">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694546942-content-img2-6-jpg.webp?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694546942-content-img2-6-jpg.webp?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694546942-content-img2-6-jpg.webp?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694546942-content-img2-6-jpg.webp?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694546942-content-img2-6-jpg.webp?auto=format,compress&w=800"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694546942-content-img2-6-jpg.webp?auto=format,compress&w=800"
                      loading="lazy"
                      data-lazyload="img"
                      width="800"
                      height="NaN"
                      alt=""
                      draggable="false"
                    />
                  </picture>
                </a>
                <h2 className="title">
                  <a
                    href="/blog/the-importance-of-customized-aesthetic-treatment-plans-for-older-adults/"
                    rel="bookmark"
                  >
                    The Importance of Customized Aesthetic Treatment Plans for
                    Older Adults
                  </a>
                </h2>
                <p>
                  Several factors determine whether, when, where, and to what
                  extent someone will exhibit signs of aging. Mild to
                  significant indications can appear in our late forties,
                  fifties, and sixties, in the forehead, eyes,neck, or some
                  other skin area. Each person is unique, and that is why...
                </p>
                <a
                  className="btn"
                  href="/blog/the-importance-of-customized-aesthetic-treatment-plans-for-older-adults/"
                  title="View full blog article"
                  aria-label="View full blog article"
                >
                  View More
                </a>
              </div>
            </div>
            <hr />
            <div className="index-item">
              <div className="date">
                <p className="day">12</p>
                <p className="month">Sep</p>
              </div>
              <div className="content">
                <h2 className="title">
                  <a
                    href="/blog/wondering-about-about-the-differences-between-botox-vs-dermal-fillers-read-this-a/"
                    rel="bookmark"
                  >
                    Wondering about about the differences between Botox vs.
                    Dermal Fillers read this article to find out more!
                  </a>
                </h2>
                <p>
                  If you're worried about the physical effects of aging, you
                  &rsquo;re not alone. Studies show that 30% of women
                  &nbsp;under the age of 35 are worried about aging. The most
                  notable among their concerns are wrinkles. The two most common
                  treatments for wrinkles are botox and...
                </p>
                <a
                  className="btn"
                  href="/blog/wondering-about-about-the-differences-between-botox-vs-dermal-fillers-read-this-a/"
                  title="View full blog article"
                  aria-label="View full blog article"
                >
                  View More
                </a>
              </div>
            </div>
            <hr />
            <div className="index-item">
              <div className="date">
                <p className="day">12</p>
                <p className="month">Sep</p>
              </div>
              <div className="content">
                <a
                  href="/blog/why-the-baby-boomers-are-putting-the-boom-in-aesthetics/"
                  className="image"
                  title="View blog article"
                  aria-label="View blog article"
                >
                  <picture className="">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694546526-ioh-sarah-thumbnail-female-rejuvenation-png.webp?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694546526-ioh-sarah-thumbnail-female-rejuvenation-png.webp?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694546526-ioh-sarah-thumbnail-female-rejuvenation-png.webp?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694546526-ioh-sarah-thumbnail-female-rejuvenation-png.webp?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694546526-ioh-sarah-thumbnail-female-rejuvenation-png.webp?auto=format,compress&w=800"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694546526-ioh-sarah-thumbnail-female-rejuvenation-png.webp?auto=format,compress&w=800"
                      loading="lazy"
                      data-lazyload="img"
                      width="800"
                      height="NaN"
                      alt=""
                      draggable="false"
                    />
                  </picture>
                </a>
                <h2 className="title">
                  <a
                    href="/blog/why-the-baby-boomers-are-putting-the-boom-in-aesthetics/"
                    rel="bookmark"
                  >
                    Why the Baby Boomers Are Putting the Boom in Aesthetics
                  </a>
                </h2>
                <p>
                  For the 20 million baby boomers currently using online dating
                  sites, the high stakesof the modern dating world can be
                  intimidating as they age. New statistics by theAmerican
                  Society of Plastic Surgeons shows that more Americans age 55
                  and olderare seeking cosmetic procedures to h...
                </p>
                <a
                  className="btn"
                  href="/blog/why-the-baby-boomers-are-putting-the-boom-in-aesthetics/"
                  title="View full blog article"
                  aria-label="View full blog article"
                >
                  View More
                </a>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
