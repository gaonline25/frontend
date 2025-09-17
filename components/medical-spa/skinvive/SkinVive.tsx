import React from "react";

const SkinVive: React.FC = () => {
  return (
    <main id="main">
      {/* Page Layout */}
      {/* Hero Module */}
      <div className="mod_hero banner mobile-stack" data-s3-module>
        <div className="wrapper">
          <picture className="background">
            <source
              media="(max-width:420px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=630 2x"
            />
            <source
              media="(max-width:800px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1200 2x"
            />
            <source
              media="(max-width:1400px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=2100 2x"
            />
            <source
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1994"
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-src="https://www.datocms-assets.com/105497/1694632205-banner-left-with-text.jpg?auto=format,compress&w=1994"
              loading="lazy"
              data-lazyload="img"
              width="1994"
              height="1206"
              alt="Background Texture"
              draggable="false"
            />
          </picture>
          <div className="row">
            <div className="inner">
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
                    href="/medical-spa/"
                    role="link"
                    aria-label="Breadcrumbs to help navigate the user"
                  >
                    Medical Spa
                  </a>
                </li>
                <li>
                  <a
                    href="/medical-spa/skinvive/"
                    role="link"
                    aria-label="Breadcrumbs to help navigate the user"
                  >
                    Skinvive
                  </a>
                </li>
              </ul>
              <h1>SkinVive</h1>
              <div className="text">
                <p>
                  <span style={{ fontWeight: 400 }}>
                    A new treatment from Juvederm, SkinVive is a new solution
                    for skin rejuvenation, empowering patients to address skin
                    texture concerns and boost self-confidence. Since its
                    inception, the cosmetic industry has championed SkinVive as
                    an effective skin treatment with reliable outcomes.
                  </span>
                </p>
                <p>
                  <a className="btn white" href="/contact/" role="button">
                    Book an Appointment
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="media">
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="https://www.datocms-assets.com/105497/1693236214-4.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1693236214-4.jpg?auto=format,compress&w=630 2x"
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1693236214-4.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1693236214-4.jpg?auto=format,compress&w=630 2x"
              />
              <source
                media="(max-width:800px)"
                srcSet="https://www.datocms-assets.com/105497/1693236214-4.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693236214-4.jpg?auto=format,compress&w=1200 2x"
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1693236214-4.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693236214-4.jpg?auto=format,compress&w=1200 2x"
              />
              <source
                srcSet="https://www.datocms-assets.com/105497/1693236214-4.jpg?auto=format,compress&w=1340"
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1693236214-4.jpg?auto=format,compress&w=1340"
              />
              <img
                src="https://www.datocms-assets.com/105497/1693236214-4.jpg?auto=format,compress&w=1340"
                width="1340"
                height="880"
                alt="close up of woman looking at camera"
                draggable="false"
              />
            </picture>
          </div>
        </div>
      </div>

      {/* Intro Module */}
      <div
        className="mod_intro container viewport option-1 wide wow fadeInUp"
        data-s3-module
      >
        <div className="row pb-0">
          <picture className="logo">
            <img
              src="https://www.datocms-assets.com/105497/1692813243-logo-module.svg"
              width={58}
              height={64}
              loading="lazy"
              alt="Goldfingers aesthetic logo"
              draggable="false"
              data-api-key="logo"
            />
          </picture>
          <div className="inner" data-api-key="content">
            <h2>
              <b>Revitalize your face with SkinVive</b>
            </h2>
            <p>
              <span style={{ fontWeight: 400 }}>
                SkinVive from Juvederm has quickly grown in popularity
                throughout the world of cosmetics, allowing patients to achieve
                their ideal look without requiring any surgical procedures. A
                specially formulated serum that can address a multitude of skin
                concerns, SkinVive has earned respect from experts throughout
                the industry for its non-invasive methods, quick recovery
                period, and outstanding results.
              </span>
            </p>
            <p>
              <span style={{ fontWeight: 400 }}>
                The team at Goldfingers Aesthetics and Plastic Surgery proudly
                offers this remarkable new treatment to help their patients in
                Orlando achieve their cosmetic goals.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Column Module */}
      <div className="mod_column viewport container has-media" data-s3-module>
        <div className="row mb-30 media-left" data-api-key="content">
          <div className="item">
            <h2>
              <b>What is SkinVive?</b>
            </h2>
            <p>
              <span style={{ fontWeight: 400 }}>
                SkinVive is a new microdroplet injectable that leaves the skin
                looking more radiant and moisturized. A new product from
                Juvederm, this innovative serum is infused with hyaluronic acid,
                which restores lost volume, improves wrinkles and fine lines,
                and revitalizes skin texture. Unlike other dermal fillers,
                SkinVive is a skin booster, meaning that it improves overall
                skin quality by hydrating it from within.&nbsp;
              </span>
            </p>
          </div>
          <picture className="media">
            <source
              media="(max-width:420px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset="https://www.datocms-assets.com/105497/1693236446-6.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1693236446-6.jpg?auto=format,compress&w=630 2x"
            />
            <source
              media="(max-width:800px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset="https://www.datocms-assets.com/105497/1693236446-6.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693236446-6.jpg?auto=format,compress&w=1200 2x"
            />
            <source
              media="(max-width:1400px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset="https://www.datocms-assets.com/105497/1693236446-6.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1693236446-6.jpg?auto=format,compress&w=2100 2x"
            />
            <source
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset="https://www.datocms-assets.com/105497/1693236446-6.jpg?auto=format,compress&w=1624"
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-src="https://www.datocms-assets.com/105497/1693236446-6.jpg?auto=format,compress&w=1624"
              loading="lazy"
              data-lazyload="img"
              width="1624"
              height="1880"
              alt="close up of pretty blonde woman"
              draggable="false"
            />
          </picture>
        </div>
      </div>

      {/* Banner Module */}
      <div
        className="mod_banner dark  hide-divider viewport background-2"
        data-s3-module
      >
        <div className="row wow fadeInUp">
          <div className="content" data-api-key="top_content">
            <h2>
              <b>What are the benefits of SkinVive?</b>
            </h2>
            <p>
              <span style={{ fontWeight: 400 }}>
                SkinVive comes with a wide array of benefits for patients with
                various issues. Some of the most notable advantages of SkinVive
                include:
              </span>
            </p>
            <ul>
              <li style={{ fontWeight: 400 }} aria-level="1">
                <span style={{ fontWeight: 400 }}>
                  Delivers subtle yet remarkable enhancements in skin texture
                  and volume, creating a naturally refreshed appearance
                </span>
              </li>
              <li style={{ fontWeight: 400 }} aria-level="1">
                <span style={{ fontWeight: 400 }}>
                  Serves as a surgery alternative, allowing patients to avoid
                  the associated risks
                </span>
              </li>
              <li style={{ fontWeight: 400 }} aria-level="1">
                <span style={{ fontWeight: 400 }}>
                  Requires no downtime, enabling patients to resume their
                  regular activities without delay
                </span>
              </li>
              <li style={{ fontWeight: 400 }} aria-level="1">
                <span style={{ fontWeight: 400 }}>
                  An adaptable treatment that can be tailored to address
                  individual concerns and issues
                </span>
              </li>
              <li style={{ fontWeight: 400 }} aria-level="1">
                <span style={{ fontWeight: 400 }}>
                  Produces long-lasting results that can last up to nine months
                </span>
              </li>
            </ul>
            <ul className="columns"></ul>
          </div>
        </div>
        <picture className="background">
          <source
            media="(max-width:420px)"
            srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&w=1200 2x"
          />
          <source
            media="(max-width:800px)"
            srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&w=800&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&w=1200&q=85&sharp=5 2x"
          />
          <source
            media="(max-width:1400px)"
            srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&w=1400&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&w=2100&q=85&sharp=5 2x"
          />
          <source
            srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&w=2200&q=85&sharp=5"
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-src="https://www.datocms-assets.com/105497/1693257034-banner-bgd-2.jpg?auto=format,compress&w=2200&q=85&sharp=5"
            loading="lazy"
            data-lazyload="img"
            width="2200"
            height="802"
            alt="Banner media"
            draggable="false"
          />
        </picture>
      </div>

      {/* Half Image Module */}
      <div
        className="mod_half_image  viewport half-image container wow fadeInLeft "
        data-s3-module
      >
        <div className="row half-image-row">
          <div className="media">
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009223-cheek-fillers.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009223-cheek-fillers.jpg?auto=format,compress&w=630 2x"
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009223-cheek-fillers.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009223-cheek-fillers.jpg?auto=format,compress&w=1200 2x"
              />
              <source
                media="(max-width:1400px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009223-cheek-fillers.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694009223-cheek-fillers.jpg?auto=format,compress&w=2100 2x"
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009223-cheek-fillers.jpg?auto=format,compress&w=1832"
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src="https://www.datocms-assets.com/105497/1694009223-cheek-fillers.jpg?auto=format,compress&w=1832"
                loading="lazy"
                data-lazyload="img"
                width="1832"
                height="1824"
                alt="Woman examining cheek"
                draggable="false"
                data-api-key="image"
              />
            </picture>
          </div>
          <div className="copy ">
            <div className="inner">
              <div className="content" data-api-key="content">
                <h2>
                  <b>Who is a candidate for SkinVive?</b>
                </h2>
                <p>
                  <span style={{ fontWeight: 400 }}>
                    Patients who are looking to improve their skin appearance
                    without having to undergo surgery can benefit greatly from
                    SkinVive. The treatment is best suited to patients who:
                  </span>
                </p>
                <ul>
                  <li style={{ fontWeight: 400 }} aria-level="1">
                    <span style={{ fontWeight: 400 }}>
                      Are struggling with mild to moderate signs of aging,
                      including fine lines, wrinkles, and volume loss
                    </span>
                  </li>
                  <li style={{ fontWeight: 400 }} aria-level="1">
                    <span style={{ fontWeight: 400 }}>
                      Are looking to achieve a youthful, rejuvenated aesthetic
                      without much downtime
                    </span>
                  </li>
                  <li style={{ fontWeight: 400 }} aria-level="1">
                    <span style={{ fontWeight: 400 }}>
                      Are in good physical and mental health and know what to
                      expect from the treatment
                    </span>
                  </li>
                </ul>
                <p>
                  <span style={{ fontWeight: 400 }}>
                    The only way patients can determine if SkinVive is right for
                    them is to consult with a board-certified practitioner who
                    has experience in performing SkinVive treatments. At
                    Goldfingers Aesthetics and Plastic Surgery, Doctors James
                    and My Pham Young have successfully aided many patients in
                    attaining their goals with SkinVive.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Box Grid Module */}
      <div
        className="mod_box_grid viewport three-boxes   container option-1 default  no-bg dark wider "
        data-s3-module
      >
        <div className="row">
          <div className="boxes wider">
            <div className="box wow fadeInUp">
              <h2>
                <b>What does the procedure entail?</b>
              </h2>
              <p>
                <span style={{ fontWeight: 400 }}>
                  SkinVive is a skin booster. While formulated with some of the
                  same ingredients as dermal fillers, these treatments take a
                  different approach to addressing skin issues. For example,
                  SkinVive&rsquo;s texture is more water-like, making it ideal
                  for addressing fine lines, dull skin, volume loss, and skin
                  laxity.&nbsp;
                </span>
              </p>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Depending on the goals of the patient, SkinVive can be
                  employed as an alternative to other cosmetic treatments, such
                  as chemical peels and microneedling. The non-invasive approach
                  of this treatment guarantees minimal downtime and virtually no
                  recovery phase, making it the ideal choice for patients
                  looking to achieve long-lasting and transformative results
                  quickly.
                </span>
              </p>
            </div>
            <div className="box wow fadeInUp">
              <h2>
                <b>Aftercare</b>
              </h2>
              <p>
                <span style={{ fontWeight: 400 }}>
                  While there is no real recovery process, there are some
                  guidelines that patients should follow after undergoing the
                  treatment. Following a SkinVive session, it is vital that
                  patients refrain from engaging in strenuous exercise, avoid
                  excessive heat and sunlight, and abstain from alcohol
                  consumption for the first 24 hours. Patients who fail to
                  follow these instructions may develop temporary redness,
                  swelling, or itching around the treatment sites.
                </span>
              </p>
            </div>
            <div className="box wow fadeInUp">
              <h2>
                <b>Are there any risks?</b>
              </h2>
              <p>
                <span style={{ fontWeight: 400 }}>
                  While SkinVive is known for being a safe and effective
                  treatment, patients should still be aware of the potential
                  side effects before going forward with it. Some of the most
                  common side effects include swelling, bruising, and redness.
                  When choosing a skilled practitioner to carry out your
                  treatment, these risks are greatly reduced. During the
                  consultation, Dr. Young allocates time to discuss these
                  potential risks and provide patients with instructions on how
                  to handle them if they occur.{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Office Module */}
      <div className="mod_office half-image container" data-s3-module>
        <div className="row half-image-row  ">
          <div className="media">
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1699984190-ga-wp-waiting-room-adj.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1699984190-ga-wp-waiting-room-adj.jpg?auto=format,compress&w=630 2x"
              />
              <source
                media="(max-width:800px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1699984190-ga-wp-waiting-room-adj.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1699984190-ga-wp-waiting-room-adj.jpg?auto=format,compress&w=1200 2x"
              />
              <source
                media="(max-width:1400px)"
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1699984190-ga-wp-waiting-room-adj.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1699984190-ga-wp-waiting-room-adj.jpg?auto=format,compress&w=2100 2x"
              />
              <source
                srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1699984190-ga-wp-waiting-room-adj.jpg?auto=format,compress&w=2016"
              />
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                data-lazyload-src="https://www.datocms-assets.com/105497/1699984190-ga-wp-waiting-room-adj.jpg?auto=format,compress&w=2016"
                loading="lazy"
                data-lazyload="img"
                width="2016"
                height="1512"
                alt=""
                draggable="false"
                data-api-key="background"
              />
            </picture>
          </div>
          <div className="copy ">
            <div className="inner">
              <h2>
                <b>
                  Why choose Goldfingers Aesthetics and Plastic Surgery and
                  Skincare?
                </b>
              </h2>
              <p>
                <span style={{ fontWeight: 400 }}>
                  As with any cosmetic treatment, choosing the right provider
                  for SkinVive is of the utmost importance. Those who choose
                  Goldfingers Aesthetics and Plastic Surgery and Skincare team
                  can rest assured that they are receiving some of the best
                  cosmetic care available in a top-class facility. Guided by
                  their dedication to aesthetic excellence and patient comfort,
                  Doctors James and My Pham Young diligently tailor treatment
                  plans that are aligned with your goals. Our expert
                  aestheticians carry out these injections with great care,
                  ensuring that you feel comfortable every step of the
                  way.&nbsp;
                </span>
              </p>
              <p></p>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Reach out to our office today to schedule a private
                  consultation and learn more about how SkinVive can help you.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Layout */}
    </main>
  );
};

export default SkinVive;
