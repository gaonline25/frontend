import React from "react";

const MedicalSpa = () => {
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
              </ul>
              <h1>Medical Spa</h1>
            </div>
          </div>
          <div className="media">
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="https://www.datocms-assets.com/105497/1694008998-medical-spa-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008998-medical-spa-banner.jpg?auto=format,compress&w=630 2x"
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008998-medical-spa-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008998-medical-spa-banner.jpg?auto=format,compress&w=630 2x"
              />
              <source
                media="(max-width:800px)"
                srcSet="https://www.datocms-assets.com/105497/1694008998-medical-spa-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008998-medical-spa-banner.jpg?auto=format,compress&w=1200 2x"
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008998-medical-spa-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008998-medical-spa-banner.jpg?auto=format,compress&w=1200 2x"
              />
              <source
                media="(max-width:1400px)"
                srcSet="https://www.datocms-assets.com/105497/1694008998-medical-spa-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694008998-medical-spa-banner.jpg?auto=format,compress&w=2100 2x"
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008998-medical-spa-banner.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694008998-medical-spa-banner.jpg?auto=format,compress&w=2100 2x"
              />
              <source
                srcSet="https://www.datocms-assets.com/105497/1694008998-medical-spa-banner.jpg?auto=format,compress&w=1919"
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008998-medical-spa-banner.jpg?auto=format,compress&w=1919"
              />
              <img
                src="https://www.datocms-assets.com/105497/1694008998-medical-spa-banner.jpg?auto=format,compress&w=1919"
                width="1919"
                height="1206"
                alt="Golfinger examination room"
                draggable="false"
              />
            </picture>
          </div>
        </div>
      </div>
      {/* Page Index List Module */}
      <div className="mod_index_list option-1 container" data-s3-module>
        <div className="row ">
          <div className="inner">
            <a
              href="/medical-spa/injectables/"
              className="item"
              title="Opens Injectables page"
              aria-label="Opens Injectables page"
            >
              <span>Injectables</span>
            </a>
            <a
              href="/medical-spa/botox/"
              className="item"
              title="Opens BOTOX page"
              aria-label="Opens BOTOX page"
            >
              <span>BOTOX</span>
            </a>
            <a
              href="/medical-spa/dysport/"
              className="item"
              title="Opens Dysport page"
              aria-label="Opens Dysport page"
            >
              <span>Dysport</span>
            </a>
            <a
              href="/medical-spa/dermal-fillers/"
              className="item"
              title="Opens Dermal Fillers page"
              aria-label="Opens Dermal Fillers page"
            >
              <span>Dermal Fillers</span>
            </a>
            <a
              href="/medical-spa/juvederm/"
              className="item"
              title="Opens JUVÉDERM page"
              aria-label="Opens JUVÉDERM page"
            >
              <span>JUVÉDERM</span>
            </a>
            <a
              href="/medical-spa/juvederm-volux/"
              className="item"
              title="Opens Juvederm Volux page"
              aria-label="Opens Juvederm Volux page"
            >
              <span>Juvederm Volux</span>
            </a>
            <a
              href="/medical-spa/restylane/"
              className="item"
              title="Opens Restylane page"
              aria-label="Opens Restylane page"
            >
              <span>Restylane</span>
            </a>
            <a
              href="/medical-spa/restylane-contour/"
              className="item"
              title="Opens Restylane Contour page"
              aria-label="Opens Restylane Contour page"
            >
              <span>Restylane Contour</span>
            </a>
            <a
              href="/medical-spa/cheek-fillers/"
              className="item"
              title="Opens Cheek Fillers page"
              aria-label="Opens Cheek Fillers page"
            >
              <span>Cheek Fillers</span>
            </a>
            <a
              href="/medical-spa/lines-and-wrinkles/"
              className="item"
              title="Opens Lines & Wrinkles page"
              aria-label="Opens Lines & Wrinkles page"
            >
              <span>Lines & Wrinkles</span>
            </a>
            <a
              href="/medical-spa/lips/"
              className="item"
              title="Opens Lip Fillers page"
              aria-label="Opens Lip Fillers page"
            >
              <span>Lip Fillers</span>
            </a>
            <a
              href="/medical-spa/chin/"
              className="item"
              title="Opens Chin Fillers page"
              aria-label="Opens Chin Fillers page"
            >
              <span>Chin Fillers</span>
            </a>
            <a
              href="/medical-spa/hands/"
              className="item"
              title="Opens Hand Rejuvenation page"
              aria-label="Opens Hand Rejuvenation page"
            >
              <span>Hand Rejuvenation</span>
            </a>
            <a
              href="/medical-spa/liquid-facelift/"
              className="item"
              title="Opens Liquid (Non-Surgical) Facelift page"
              aria-label="Opens Liquid (Non-Surgical) Facelift page"
            >
              <span>Liquid (Non-Surgical) Facelift</span>
            </a>
            <a
              href="/medical-spa/liquid-non-surgical-rhinoplasty/"
              className="item"
              title="Opens Liquid (Non-Surgical) Rhinoplasty page"
              aria-label="Opens Liquid (Non-Surgical) Rhinoplasty page"
            >
              <span>Liquid (Non-Surgical) Rhinoplasty</span>
            </a>
            <a
              href="/medical-spa/skinvive/"
              className="item"
              title="Opens SkinVive page"
              aria-label="Opens SkinVive page"
            >
              <span>SkinVive</span>
            </a>
            <a
              href="/medical-spa/spa-services/"
              className="item"
              title="Opens Spa Services page"
              aria-label="Opens Spa Services page"
            >
              <span>Spa Services</span>
            </a>
            <a
              href="/medical-spa/lash-extensions/"
              className="item"
              title="Opens Lash Extensions page"
              aria-label="Opens Lash Extensions page"
            >
              <span>Lash Extensions</span>
            </a>
            <a
              href="/medical-spa/mens-services/"
              className="item"
              title="Opens Men's Services page"
              aria-label="Opens Men's Services page"
            >
              <span>Men's Services</span>
            </a>
            <a
              href="/medical-spa/micro-channeling/"
              className="item"
              title="Opens Micro-Channeling page"
              aria-label="Opens Micro-Channeling page"
            >
              <span>Micro-Channeling</span>
            </a>
            <a
              href="/medical-spa/permanent-makeup/"
              className="item"
              title="Opens Permanent Makeup page"
              aria-label="Opens Permanent Makeup page"
            >
              <span>Permanent Makeup</span>
            </a>
            <a
              href="/medical-spa/diamondglow/"
              className="item"
              title="Opens DiamondGlow page"
              aria-label="Opens DiamondGlow page"
            >
              <span>DiamondGlow</span>
            </a>
            <a
              href="/medical-spa/skin-medica/"
              className="item"
              title="Opens SkinMedica page"
              aria-label="Opens SkinMedica page"
            >
              <span>SkinMedica</span>
            </a>
            <a
              href="/medical-spa/skincare-services/"
              className="item"
              title="Opens Skincare Services page"
              aria-label="Opens Skincare Services page"
            >
              <span>Skincare Services</span>
            </a>
            <a
              href="/medical-spa/weightloss/"
              className="item"
              title="Opens Weight Loss page"
              aria-label="Opens Weight Loss page"
            >
              <span>Weight Loss</span>
            </a>
            <a
              href="/medical-spa/semaglutide-injections/"
              className="item"
              title="Opens Semaglutide Injections page"
              aria-label="Opens Semaglutide Injections page"
            >
              <span>Semaglutide Injections</span>
            </a>
          </div>
        </div>
      </div>
      {/* Intro Module */}
      <div
        className="mod_intro container viewport option-1 wide wow fadeInUp"
        data-s3-module
      >
        <div className="row ">
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
              Welcome to:{" "}
              <span className="small">Goldfingers Aesthetics Medical Spa</span>
            </h2>
            <p>
              At the Goldfingers Aesthetics Medical Spa, our commitment to
              excellence, clinical expertise, and passion for aesthetics come
              together to provide an exceptional experience. Visit us to
              discover a world of possibilities in medical spa treatments that
              help you look and feel your best.
            </p>
          </div>
        </div>
      </div>
      {/* Banner Module */}
      <div
        className="mod_banner dark  hide-divider viewport background-3"
        data-s3-module
      >
        <div className="row wow fadeInUp">
          <div className="content" data-api-key="top_content">
            <h2 className="text-center">
              Why Choose Goldfingers Aesthetics{" "}
              <span className="block-desktop">
                As Your Trusted Medical Spa?
              </span>
            </h2>
            <p>
              Choose Goldfingers Aesthetics Medical Spa for an unparalleled
              experience in aesthetics, wellness, and true rejuvenation. At our
              practice, we stand out as your trusted partner in achieving your
              aesthetic and wellness goals. We're committed to providing
              personalized solutions that enhance natural beauty and help you
              feel your best. Here are some reasons to choose Goldfingers as
              your trusted medical spa:
            </p>
            <ul className="columns">
              <li>
                <strong>Expertise You Can Trust:</strong>
                With over 25 years of aesthetic experience, our medical
                practitioners bring a wealth of knowledge to every treatment,
                ensuring your safety and satisfaction.
              </li>
              <li>
                <strong>Top 1% in the Nation:</strong>
                We pride ourselves on being recognized as among the top 1% in
                the nation for BOTOX and Juv &eacute;derm treatments, a
                testament to our commitment to delivering exceptional results.
              </li>
              <li>
                <strong>Florida &rsquo;s Largest Aesthetics Center:</strong>
                As the largest aesthetics center network in Florida, we have the
                resources, expertise, and facilities to provide you with a
                comprehensive range of cutting-edge treatments.
              </li>
              <li>
                <strong>Over 24 Locations:</strong>
                With a widespread network of 24 locations and growing, we make
                it convenient for you to access our expertise and enjoy our
                exceptional services.
              </li>
              <li>
                <strong>Expert Facial Contouring Aesthetic Injectors:</strong>
                Our skilled and Allergan-trained injectors are experts in facial
                contouring, ensuring your treatments are administered with
                precision and artistry.
              </li>
              <li>
                <strong>Personalized Care:</strong>
                We understand that every individual is unique. Our practitioners
                take the time to understand your goals and tailor treatments to
                your specific needs, ensuring natural-looking results.
              </li>
              <li>
                <strong>Comprehensive Treatment Menu:</strong>
                From BOTOX and dermal fillers to advanced treatments like
                micro-channeling and semaglutide, we offer diverse treatments to
                address various concerns and deliver holistic wellness.
              </li>
              <li>
                <strong>A Commitment to Wellness:</strong>
                Our offerings extend beyond aesthetics. Including semaglutide
                and advanced skincare products reflects our dedication to
                promoting your overall well-being.
              </li>
              <li>
                <strong>Exceptional Patient Experience:</strong>
                At Goldfingers Aesthetics Medical Spa, your comfort and
                satisfaction are paramount. Our team creates a welcoming and
                soothing environment where you can relax and rejuvenate.
              </li>
            </ul>
          </div>
        </div>
        <picture className="background">
          <source
            media="(max-width:420px)"
            srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257040-banner-bgd-3.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693257040-banner-bgd-3.jpg?auto=format,compress&w=1200 2x"
          />
          <source
            media="(max-width:800px)"
            srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257040-banner-bgd-3.jpg?auto=format,compress&w=800&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257040-banner-bgd-3.jpg?auto=format,compress&w=1200&q=85&sharp=5 2x"
          />
          <source
            media="(max-width:1400px)"
            srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257040-banner-bgd-3.jpg?auto=format,compress&w=1400&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257040-banner-bgd-3.jpg?auto=format,compress&w=2100&q=85&sharp=5 2x"
          />
          <source
            srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257040-banner-bgd-3.jpg?auto=format,compress&w=2200&q=85&sharp=5"
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-src="https://www.datocms-assets.com/105497/1693257040-banner-bgd-3.jpg?auto=format,compress&w=2200&q=85&sharp=5"
            loading="lazy"
            data-lazyload="img"
            width="2200"
            height="802"
            alt="Banner media"
            draggable="false"
          />
        </picture>
      </div>
      {/* Box Grid Module */}
      <div
        className="mod_box_grid viewport   seven-boxes container option-1 default  no-bg wider "
        data-s3-module
      >
        <div className="row">
          <div className="boxes wider">
            <div className="box wow fadeInUp">
              <h3>
                <a href="https://goldfingersaesthetics.tresiocms.com/medical-spa/botox/">
                  BOTOX
                </a>
                : Effortless Facial Rejuvenation
              </h3>
              <p>
                Our experienced injectors are masters of BOTOX treatments,
                utilizing their precise skills to diminish the appearance of
                fine lines and wrinkles. With a keen understanding of facial
                anatomy, they strategically administer BOTOX to provide subtle
                and stunning results. Whether you &rsquo;re seeking to smooth
                away forehead lines, frown lines, or crow &rsquo;s feet, our
                practitioners can help you achieve a refreshed and youthful
                look.
              </p>
            </div>
            <div className="box wow fadeInUp">
              <h3>
                <a href="https://goldfingersaesthetics.tresiocms.com/medical-spa/dermal-fillers/">
                  Dermal Fillers
                </a>
                : Restore And Enhance
              </h3>
              <p>
                We also offer a variety of dermal fillers to address different
                aesthetic concerns. Our skilled practitioners tailor treatments
                to your unique features, from erasing lines and wrinkles to
                enhancing facial contours. The result? Beautiful and natural
                results, whether you're interested in replenishing lost volume,
                defining jawlines, or plumping lips.
              </p>
            </div>
            <div className="box wow fadeInUp">
              <h3>
                <a href="https://goldfingersaesthetics.tresiocms.com/medical-spa/hands/">
                  Hand Rejuvenation
                </a>
                : Youthful Hands, Revitalized Confidence
              </h3>
              <p>
                Our hand rejuvenation treatments are designed to resolve the
                telltale signs of aging on your hands, such as volume loss and
                prominent veins. Using advanced techniques and carefully
                selected dermal fillers, we can restore youthful fullness to
                your hands and minimize the appearance of veins, helping you
                feel confident from fingertips to wrists.
              </p>
            </div>
            <div className="box wow fadeInUp">
              <h3>
                <a href="https://goldfingersaesthetics.tresiocms.com/medical-spa/face-lift/">
                  Non-Surgical Facelift
                </a>
                : Lift, Tighten, And Refresh
              </h3>
              <p>
                Experience the transformative effects of a non-surgical
                facelift, a treatment designed to lift and tighten sagging skin.
                Our practitioners utilize a combination of advanced injectables
                and techniques to create a more youthful and lifted appearance,
                rejuvenating your features without the need for surgery.
              </p>
            </div>
            <div className="box wow fadeInUp">
              <h3>
                <a href="https://goldfingersaesthetics.tresiocms.com/medical-spa/mens-services/">
                  Men &rsquo;s Services
                </a>
                : Tailored Aesthetics For Men
              </h3>
              <p>
                At Goldfingers Aesthetics, our experts understand the unique
                aesthetic needs of men. Our specialized treatments for men range
                from BOTOX and dermal fillers to address wrinkles and volume
                loss to masculine facial contouring, ensuring a refreshed and
                rejuvenated look that aligns with your individuality.
              </p>
            </div>
            <div className="box wow fadeInUp">
              <h3>
                <a href="https://goldfingersaesthetics.tresiocms.com/medical-spa/permanent-makeup/">
                  Permanent Makeup
                </a>
                : Effortless Elegance
              </h3>
              <p>
                It &rsquo;s easy to enhance your natural beauty with our
                permanent makeup services! Our practitioners skillfully apply
                permanent makeup to define and accentuate your features, from
                perfectly shaped eyebrows to subtle lip color that lasts,
                providing you with effortless elegance day in and day out.
              </p>
            </div>
            <div className="box wow fadeInUp">
              <h3>
                <a href="https://goldfingersaesthetics.tresiocms.com/medical-spa/micro-channeling/">
                  Micro-Channeling
                </a>
                : Rejuvenate And Renew
              </h3>
              <p>
                Our micro-channeling treatment offers transformative benefits
                for your skin, stimulating collagen production and enhancing
                skin texture. We use specialized devices to create controlled
                micro-injuries, triggering the body's natural healing response
                and revealing smoother, more radiant skin. This minimally
                invasive treatment is an excellent option for anyone looking to
                improve their skin's appearance.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Column Module */}
      <div className="mod_column viewport container has-media" data-s3-module>
        <div className="row pt-0 mb-30 media-right" data-api-key="content">
          <div className="item">
            <h2>
              <a href="https://goldfingersaesthetics.tresiocms.com/medical-spa/semaglutide-injections/">
                Semaglutide Injections{" "}
              </a>
              For Sustained Weight Loss
            </h2>
            <p>
              At Goldfingers Aesthetics, our medical professionals offer
              semaglutide, a groundbreaking injectable treatment designed to
              support weight management and overall wellness. Our expert
              practitioners guide you through this innovative approach to
              health, providing you with a comprehensive solution for your
              well-being journey.
            </p>
          </div>
          <picture className="media">
            <source
              media="(max-width:420px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025421-accent-7.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694025421-accent-7.jpg?auto=format,compress&w=630 2x"
            />
            <source
              media="(max-width:800px)"
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025421-accent-7.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694025421-accent-7.jpg?auto=format,compress&w=1200 2x"
            />
            <source
              srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-srcset="https://www.datocms-assets.com/105497/1694025421-accent-7.jpg?auto=format,compress&w=904"
            />
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              data-lazyload-src="https://www.datocms-assets.com/105497/1694025421-accent-7.jpg?auto=format,compress&w=904"
              loading="lazy"
              data-lazyload="img"
              width="904"
              height="1062"
              alt="aerial view of florida"
              draggable="false"
            />
          </picture>
        </div>
      </div>
      {/* Banner Module */}
      <div
        className="mod_banner dark  hide-divider viewport background-10"
        data-s3-module
      >
        <div className="row wow fadeInUp">
          <div className="content" data-api-key="top_content">
            <div className="columns-two vertical-align">
              <a href="https://goldfingersaesthetics.tresiocms.com/medical-spa/skin-medica/"></a>
              <div>
                <a href="https://goldfingersaesthetics.tresiocms.com/medical-spa/skin-medica/"></a>
                <h2>
                  <span className="small">
                    <a href="https://goldfingersaesthetics.tresiocms.com/medical-spa/skin-medica/">
                      Advanced Skincare Products
                    </a>
                    :
                  </span>
                  Elevate Your Skincare Routine
                </h2>
              </div>
              <div>
                <p>
                  We offer a range of advanced skincare products that complement
                  our treatments and extend your self-care beyond the spa. We
                  &rsquo;ll recommend tailored skincare regimens that address
                  your unique needs, helping you maintain and enhance the
                  results of your treatments.
                </p>
              </div>
            </div>
          </div>
        </div>
        <picture className="background">
          <source
            media="(max-width:420px)"
            srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257079-banner-bgd-10.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693257079-banner-bgd-10.jpg?auto=format,compress&w=1200 2x"
          />
          <source
            media="(max-width:800px)"
            srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257079-banner-bgd-10.jpg?auto=format,compress&w=800&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257079-banner-bgd-10.jpg?auto=format,compress&w=1200&q=85&sharp=5 2x"
          />
          <source
            media="(max-width:1400px)"
            srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257079-banner-bgd-10.jpg?auto=format,compress&w=1400&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257079-banner-bgd-10.jpg?auto=format,compress&w=2100&q=85&sharp=5 2x"
          />
          <source
            srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257079-banner-bgd-10.jpg?auto=format,compress&w=2200&q=85&sharp=5"
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-src="https://www.datocms-assets.com/105497/1693257079-banner-bgd-10.jpg?auto=format,compress&w=2200&q=85&sharp=5"
            loading="lazy"
            data-lazyload="img"
            width="2200"
            height="802"
            alt="Banner media"
            draggable="false"
          />
        </picture>
      </div>
      {/* Page Index Module */}
      <div className="mod_index container" data-s3-module>
        <div className="row subcontent ">
          <div className="inner">
            <div className="item">
              <a
                className="media-btn"
                href="/medical-spa/injectables/"
                title="Opens Injectables page"
                aria-label="Opens Injectables page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="534"
                      alt="Kristi Coody injecting a patient with filler"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Injectables</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/medical-spa/injectables/"
                  className="title"
                  title="Opens Injectables page"
                  aria-label="Opens Injectables page"
                >
                  <h2>Injectables</h2>
                </a>
              </div>
            </div>
            <div className="item">
              <a
                className="media-btn"
                href="/medical-spa/botox/"
                title="Opens BOTOX page"
                aria-label="Opens BOTOX page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="534"
                      alt="Kristi Coody injecting a patient with filler"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>BOTOX</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/medical-spa/botox/"
                  className="title"
                  title="Opens BOTOX page"
                  aria-label="Opens BOTOX page"
                >
                  <h2>BOTOX</h2>
                </a>
              </div>
            </div>
            <div className="item">
              <a
                className="media-btn"
                href="/medical-spa/dysport/"
                title="Opens Dysport page"
                aria-label="Opens Dysport page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008911-dysport-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008911-dysport-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008911-dysport-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008911-dysport-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008911-dysport-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694008911-dysport-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="534"
                      alt="woman holding mirror to her face while doctor points to her forehead"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Dysport</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/medical-spa/dysport/"
                  className="title"
                  title="Opens Dysport page"
                  aria-label="Opens Dysport page"
                >
                  <h2>Dysport</h2>
                </a>
              </div>
            </div>
            <div className="item">
              <a
                className="media-btn"
                href="/medical-spa/dermal-fillers/"
                title="Opens Dermal Fillers page"
                aria-label="Opens Dermal Fillers page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008905-dermal-fillers-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008905-dermal-fillers-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008905-dermal-fillers-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008905-dermal-fillers-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008905-dermal-fillers-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694008905-dermal-fillers-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="534"
                      alt="Doctor working with patient"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Dermal Fillers</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/medical-spa/dermal-fillers/"
                  className="title"
                  title="Opens Dermal Fillers page"
                  aria-label="Opens Dermal Fillers page"
                >
                  <h2>Dermal Fillers</h2>
                </a>
              </div>
            </div>
            <div className="item">
              <a
                className="media-btn"
                href="/medical-spa/juvederm/"
                title="Opens JUVÉDERM page"
                aria-label="Opens JUVÉDERM page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008950-juvederm-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008950-juvederm-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008950-juvederm-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008950-juvederm-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008950-juvederm-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694008950-juvederm-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="534"
                      alt="Doctor applying dermal fillers to patient"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>JUVÉDERM</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/medical-spa/juvederm/"
                  className="title"
                  title="Opens JUVÉDERM page"
                  aria-label="Opens JUVÉDERM page"
                >
                  <h2>JUVÉDERM</h2>
                </a>
              </div>
            </div>
            <div className="item">
              <a
                className="media-btn"
                href="/medical-spa/juvederm-volux/"
                title="Opens Juvederm Volux page"
                aria-label="Opens Juvederm Volux page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008956-juvederm-volux-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008956-juvederm-volux-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008956-juvederm-volux-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008956-juvederm-volux-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008956-juvederm-volux-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694008956-juvederm-volux-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="534"
                      alt="doctor working with patient in chair"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Juvederm Volux</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/medical-spa/juvederm-volux/"
                  className="title"
                  title="Opens Juvederm Volux page"
                  aria-label="Opens Juvederm Volux page"
                >
                  <h2>Juvederm Volux</h2>
                </a>
              </div>
            </div>
            <div className="item">
              <a
                className="media-btn"
                href="/medical-spa/restylane/"
                title="Opens Restylane page"
                aria-label="Opens Restylane page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009066-restylane-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009066-restylane-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009066-restylane-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009066-restylane-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009066-restylane-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694009066-restylane-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="534"
                      alt="Woman receiving facial injection"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Restylane</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/medical-spa/restylane/"
                  className="title"
                  title="Opens Restylane page"
                  aria-label="Opens Restylane page"
                >
                  <h2>Restylane</h2>
                </a>
              </div>
            </div>
            <div className="item">
              <a
                className="media-btn"
                href="/medical-spa/restylane-contour/"
                title="Opens Restylane Contour page"
                aria-label="Opens Restylane Contour page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009073-retylane-contour-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009073-retylane-contour-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009073-retylane-contour-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009073-retylane-contour-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009073-retylane-contour-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694009073-retylane-contour-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="534"
                      alt="Brunette woman face"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Restylane Contour</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/medical-spa/restylane-contour/"
                  className="title"
                  title="Opens Restylane Contour page"
                  aria-label="Opens Restylane Contour page"
                >
                  <h2>Restylane Contour</h2>
                </a>
              </div>
            </div>
            <div className="item">
              <a
                className="media-btn"
                href="/medical-spa/cheek-fillers/"
                title="Opens Cheek Fillers page"
                aria-label="Opens Cheek Fillers page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008892-cheek-fillers-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008892-cheek-fillers-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008892-cheek-fillers-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008892-cheek-fillers-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008892-cheek-fillers-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694008892-cheek-fillers-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="534"
                      alt="Dr Young with patient"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Cheek Fillers</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/medical-spa/cheek-fillers/"
                  className="title"
                  title="Opens Cheek Fillers page"
                  aria-label="Opens Cheek Fillers page"
                >
                  <h2>Cheek Fillers</h2>
                </a>
              </div>
            </div>
            <div className="item">
              <a
                className="media-btn"
                href="/medical-spa/lines-and-wrinkles/"
                title="Opens Lines & Wrinkles page"
                aria-label="Opens Lines & Wrinkles page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008972-lines-and-wrinkles-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008972-lines-and-wrinkles-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008972-lines-and-wrinkles-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008972-lines-and-wrinkles-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008972-lines-and-wrinkles-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694008972-lines-and-wrinkles-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="535"
                      alt="Dr Young with working with patient"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Lines & Wrinkles</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/medical-spa/lines-and-wrinkles/"
                  className="title"
                  title="Opens Lines & Wrinkles page"
                  aria-label="Opens Lines & Wrinkles page"
                >
                  <h2>Lines & Wrinkles</h2>
                </a>
              </div>
            </div>
            <div className="item">
              <a
                className="media-btn"
                href="/medical-spa/lips/"
                title="Opens Lip Fillers page"
                aria-label="Opens Lip Fillers page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008979-lip-fillers-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008979-lip-fillers-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008979-lip-fillers-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008979-lip-fillers-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008979-lip-fillers-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694008979-lip-fillers-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="535"
                      alt="Doctor going over file with patient"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Lip Fillers</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/medical-spa/lips/"
                  className="title"
                  title="Opens Lip Fillers page"
                  aria-label="Opens Lip Fillers page"
                >
                  <h2>Lip Fillers</h2>
                </a>
              </div>
            </div>
            <div className="item">
              <a
                className="media-btn"
                href="/medical-spa/chin/"
                title="Opens Chin Fillers page"
                aria-label="Opens Chin Fillers page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008898-chin-fillers-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008898-chin-fillers-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008898-chin-fillers-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008898-chin-fillers-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008898-chin-fillers-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694008898-chin-fillers-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="534"
                      alt="Doctor showing patient chin in mirror"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Chin Fillers</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/medical-spa/chin/"
                  className="title"
                  title="Opens Chin Fillers page"
                  aria-label="Opens Chin Fillers page"
                >
                  <h2>Chin Fillers</h2>
                </a>
              </div>
            </div>
            <div className="item">
              <a
                className="media-btn"
                href="/medical-spa/hands/"
                title="Opens Hand Rejuvenation page"
                aria-label="Opens Hand Rejuvenation page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008937-hand-rejuvenation-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008937-hand-rejuvenation-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008937-hand-rejuvenation-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008937-hand-rejuvenation-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008937-hand-rejuvenation-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694008937-hand-rejuvenation-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="534"
                      alt="Doctor going over chart with patient"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Hand Rejuvenation</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/medical-spa/hands/"
                  className="title"
                  title="Opens Hand Rejuvenation page"
                  aria-label="Opens Hand Rejuvenation page"
                >
                  <h2>Hand Rejuvenation</h2>
                </a>
              </div>
            </div>
            <div className="item">
              <a
                className="media-btn"
                href="/medical-spa/liquid-facelift/"
                title="Opens Liquid (Non-Surgical) Facelift page"
                aria-label="Opens Liquid (Non-Surgical) Facelift page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009031-non-surgical-facelift-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009031-non-surgical-facelift-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009031-non-surgical-facelift-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009031-non-surgical-facelift-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009031-non-surgical-facelift-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694009031-non-surgical-facelift-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="534"
                      alt="Dr. Crowley giving consultation"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Liquid (Non-Surgical) Facelift</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/medical-spa/liquid-facelift/"
                  className="title"
                  title="Opens Liquid (Non-Surgical) Facelift page"
                  aria-label="Opens Liquid (Non-Surgical) Facelift page"
                >
                  <h2>Liquid (Non-Surgical) Facelift</h2>
                </a>
              </div>
            </div>
            <div className="item">
              <a
                className="media-btn"
                href="/medical-spa/liquid-non-surgical-rhinoplasty/"
                title="Opens Liquid (Non-Surgical) Rhinoplasty page"
                aria-label="Opens Liquid (Non-Surgical) Rhinoplasty page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1701215651-istock-1135487713.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1701215651-istock-1135487713.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1701215651-istock-1135487713.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1701215651-istock-1135487713.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1701215651-istock-1135487713.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1701215651-istock-1135487713.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="567"
                      alt="Woman's side profile"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Liquid (Non-Surgical) Rhinoplasty</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/medical-spa/liquid-non-surgical-rhinoplasty/"
                  className="title"
                  title="Opens Liquid (Non-Surgical) Rhinoplasty page"
                  aria-label="Opens Liquid (Non-Surgical) Rhinoplasty page"
                >
                  <h2>Liquid (Non-Surgical) Rhinoplasty</h2>
                </a>
              </div>
            </div>
            <div className="item">
              <a
                className="media-btn"
                href="/medical-spa/skinvive/"
                title="Opens SkinVive page"
                aria-label="Opens SkinVive page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1693236214-4.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1693236214-4.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1693236214-4.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693236214-4.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1693236214-4.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1693236214-4.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="558"
                      alt="close up of woman looking at camera"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>SkinVive</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/medical-spa/skinvive/"
                  className="title"
                  title="Opens SkinVive page"
                  aria-label="Opens SkinVive page"
                >
                  <h2>SkinVive</h2>
                </a>
              </div>
            </div>
            <div className="item">
              <a
                className="media-btn"
                href="/medical-spa/spa-services/"
                title="Opens Spa Services page"
                aria-label="Opens Spa Services page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694008844-botox-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="534"
                      alt="Kristi Coody injecting a patient with filler"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Spa Services</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/medical-spa/spa-services/"
                  className="title"
                  title="Opens Spa Services page"
                  aria-label="Opens Spa Services page"
                >
                  <h2>Spa Services</h2>
                </a>
              </div>
            </div>
            <div className="item">
              <a
                className="media-btn"
                href="/medical-spa/lash-extensions/"
                title="Opens Lash Extensions page"
                aria-label="Opens Lash Extensions page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694008965-lash-extensions-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="534"
                      alt="Womans eyelashes being brushed"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Lash Extensions</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/medical-spa/lash-extensions/"
                  className="title"
                  title="Opens Lash Extensions page"
                  aria-label="Opens Lash Extensions page"
                >
                  <h2>Lash Extensions</h2>
                </a>
              </div>
            </div>
            <div className="item">
              <a
                className="media-btn"
                href="/medical-spa/mens-services/"
                title="Opens Men's Services page"
                aria-label="Opens Men's Services page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694009005-mens-services-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="534"
                      alt="Brunette man smiling"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Men's Services</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/medical-spa/mens-services/"
                  className="title"
                  title="Opens Men's Services page"
                  aria-label="Opens Men's Services page"
                >
                  <h2>Men's Services</h2>
                </a>
              </div>
            </div>
            <div className="item">
              <a
                className="media-btn"
                href="/medical-spa/micro-channeling/"
                title="Opens Micro-Channeling page"
                aria-label="Opens Micro-Channeling page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694009011-micro-channeling-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="534"
                      alt="Woman getting facial services"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Micro-Channeling</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/medical-spa/micro-channeling/"
                  className="title"
                  title="Opens Micro-Channeling page"
                  aria-label="Opens Micro-Channeling page"
                >
                  <h2>Micro-Channeling</h2>
                </a>
              </div>
            </div>
            <div className="item">
              <a
                className="media-btn"
                href="/medical-spa/permanent-makeup/"
                title="Opens Permanent Makeup page"
                aria-label="Opens Permanent Makeup page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694009040-permanent-makeup-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="534"
                      alt="Blonde woman with makeup"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Permanent Makeup</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/medical-spa/permanent-makeup/"
                  className="title"
                  title="Opens Permanent Makeup page"
                  aria-label="Opens Permanent Makeup page"
                >
                  <h2>Permanent Makeup</h2>
                </a>
              </div>
            </div>
            <div className="item">
              <a
                className="media-btn"
                href="/medical-spa/diamondglow/"
                title="Opens DiamondGlow page"
                aria-label="Opens DiamondGlow page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1700499903-istock-1406728194.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1700499903-istock-1406728194.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1700499903-istock-1406728194.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1700499903-istock-1406728194.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1700499903-istock-1406728194.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1700499903-istock-1406728194.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="436"
                      alt="Woman touching her face and smiling"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>DiamondGlow</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/medical-spa/diamondglow/"
                  className="title"
                  title="Opens DiamondGlow page"
                  aria-label="Opens DiamondGlow page"
                >
                  <h2>DiamondGlow</h2>
                </a>
              </div>
            </div>
            <div className="item">
              <a
                className="media-btn"
                href="/medical-spa/skin-medica/"
                title="Opens SkinMedica page"
                aria-label="Opens SkinMedica page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694009088-skin-medica-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="534"
                      alt="Woman applying face cream"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>SkinMedica</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/medical-spa/skin-medica/"
                  className="title"
                  title="Opens SkinMedica page"
                  aria-label="Opens SkinMedica page"
                >
                  <h2>SkinMedica</h2>
                </a>
              </div>
            </div>
            <div className="item">
              <a
                className="media-btn"
                href="/medical-spa/skincare-services/"
                title="Opens Skincare Services page"
                aria-label="Opens Skincare Services page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694009094-skincare-services-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="534"
                      alt="Woman receiving facial treatment"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Skincare Services</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/medical-spa/skincare-services/"
                  className="title"
                  title="Opens Skincare Services page"
                  aria-label="Opens Skincare Services page"
                >
                  <h2>Skincare Services</h2>
                </a>
              </div>
            </div>
            <div className="item">
              <a
                className="media-btn"
                href="/medical-spa/weightloss/"
                title="Opens Weight Loss page"
                aria-label="Opens Weight Loss page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009151-weight-loss-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009151-weight-loss-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009151-weight-loss-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009151-weight-loss-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009151-weight-loss-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694009151-weight-loss-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="534"
                      alt="Blond woman smiling from couch"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Weight Loss</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/medical-spa/weightloss/"
                  className="title"
                  title="Opens Weight Loss page"
                  aria-label="Opens Weight Loss page"
                >
                  <h2>Weight Loss</h2>
                </a>
              </div>
            </div>
            <div className="item">
              <a
                className="media-btn"
                href="/medical-spa/semaglutide-injections/"
                title="Opens Semaglutide Injections page"
                aria-label="Opens Semaglutide Injections page"
              >
                <div className="media">
                  <picture className="background">
                    <source
                      media="(max-width:420px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009081-semaglutide-injections-banner.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694009081-semaglutide-injections-banner.jpg?auto=format,compress&w=630 2x"
                    />
                    <source
                      media="(max-width:800px)"
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009081-semaglutide-injections-banner.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694009081-semaglutide-injections-banner.jpg?auto=format,compress&w=1200 2x"
                    />
                    <source
                      srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-srcset="https://www.datocms-assets.com/105497/1694009081-semaglutide-injections-banner.jpg?auto=format,compress&w=850"
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                      data-lazyload-src="https://www.datocms-assets.com/105497/1694009081-semaglutide-injections-banner.jpg?auto=format,compress&w=850"
                      loading="lazy"
                      data-lazyload="img"
                      width="850"
                      height="534"
                      alt="Brunette woman smiling over shoulder"
                      draggable="false"
                    />
                  </picture>
                  <div className="content">
                    <span>Semaglutide Injections</span>
                  </div>
                </div>
              </a>
              <div className="copy">
                <a
                  href="/medical-spa/semaglutide-injections/"
                  className="title"
                  title="Opens Semaglutide Injections page"
                  aria-label="Opens Semaglutide Injections page"
                >
                  <h2>Semaglutide Injections</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Layout */}
    </main>
  );
};

export default MedicalSpa;
