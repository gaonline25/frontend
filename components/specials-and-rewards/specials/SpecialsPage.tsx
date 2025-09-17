import React from "react";

const SpecialsPage: React.FC = () => {
  return (
    <main id="main">
      {/* Page Layout */}
      {/* Hero Module */}
      <div className="mod_hero banner less-padding mobile-stack" data-s3-module>
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
                    href="/specials-and-rewards/"
                    role="link"
                    aria-label="Breadcrumbs to help navigate the user"
                  >
                    Specials And Rewards
                  </a>
                </li>
                <li>
                  <a
                    href="/specials-and-rewards/specials/"
                    role="link"
                    aria-label="Breadcrumbs to help navigate the user"
                  >
                    Specials
                  </a>
                </li>
              </ul>
              <h1>Specials</h1>
            </div>
          </div>
          <div className="media">
            <picture className="background">
              <source
                media="(max-width:420px)"
                srcSet="https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=630 2x"
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=630 2x"
              />
              <source
                media="(max-width:800px)"
                srcSet="https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=1200 2x"
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=1200 2x"
              />
              <source
                media="(max-width:1400px)"
                srcSet="https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=2100 2x"
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=2100 2x"
              />
              <source
                srcSet="https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=1600"
                data-lazyload-srcset="https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=1600"
              />
              <img
                src="https://www.datocms-assets.com/105497/1706814483-specials-team.jpg?auto=format,compress&w=1600"
                width="1600"
                height="730"
                alt="team photo"
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
            <h2>Goldfingers Aesthetics Specials</h2>
            <p>
              At Goldfingers Aesthetics we want you to look and feel your best
              all the time. which is why we offer monthly specials on our
              medical spa services. &nbsp;We are the largest medical spa in
              Florida and offer the latest medical aesthetic services ranging
              from BOTOX &reg;&amp;Dysport &reg;, to dermal fillers like
              Restylane &reg;and Juvederm &reg;.{" "}
              <a href="/contact/">Book an appointment</a>
              with our medical aesthetics spa today. We would love to see you!
            </p>
          </div>
        </div>
      </div>

      {/* Banner Module */}
      <div
        className="mod_banner dark  hide-divider viewport background-1"
        data-s3-module
      >
        <div className="row wow fadeInUp">
          <div className="content" data-api-key="top_content">
            <div className="text-center">
              <h2>Price Match Guarantee for all Dermal Fillers!</h2>
              <p>(Valid for any quote on or before 30 days)</p>
            </div>
          </div>
        </div>
        <picture className="background">
          <source
            media="(max-width:420px)"
            srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=1200 2x"
          />
          <source
            media="(max-width:800px)"
            srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=800&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=1200&q=85&sharp=5 2x"
          />
          <source
            media="(max-width:1400px)"
            srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=1400&q=85&sharp=5, https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=2100&q=85&sharp=5 2x"
          />
          <source
            srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=2200&q=85&sharp=5"
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-src="https://www.datocms-assets.com/105497/1693257026-banner-bgd-1.jpg?auto=format,compress&w=2200&q=85&sharp=5"
            loading="lazy"
            data-lazyload="img"
            width="2200"
            height="802"
            alt="Banner media"
            draggable="false"
          />
        </picture>
      </div>

      {/* Column Module */}
      <div className="mod_column viewport container" data-s3-module>
        <div className="row text-center" data-api-key="content">
          <div className="item">
            <p>
              <img
                src="https://www.datocms-assets.com/105497/1756830299-unnamed-1.png"
                width="578"
                height="723"
              />
            </p>
          </div>
        </div>
      </div>

      {/* Column Module */}
      <div className="mod_column viewport container" data-s3-module>
        <div className="row text-center" data-api-key="content">
          <div className="item">
            <div className="mw-50">
              <p>
                <img
                  src="https://www.datocms-assets.com/105497/1738187926-become-a-vip-member-for-one-year-for-only-199-receive-the-following-specials-for-one-year-after-purchase-8-99-botox-cosmetic-25-additional-savings-off-any-special-pricing-of-dermal-fillers-1.png"
                  width="576"
                  height="791"
                />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Module */}
      <div className="mod_contact_form" data-s3-module>
        <div className="wrapper">
          <div className="row">
            <h2>Contact Us</h2>
            <div className="partial_form" data-s3-partial>
              <form
                id="form_contact"
                className="s3-form"
                method="post"
                action="/validate/"
                data-abide=""
                encType="multipart/form-data"
                noValidate
              >
                <div className="fields">
                  <div className="field-row col1 hidden-row">
                    <div className="field hidden">
                      <input
                        type="hidden"
                        name="subject"
                        id="contact_subject"
                        value="Contact Form"
                      />
                    </div>
                  </div>
                  <div className="field-row col1 hidden-row">
                    <div className="field hidden">
                      <input
                        type="hidden"
                        name="redirect"
                        id="contact_redirect"
                        value="/contact/thank-you/"
                      />
                    </div>
                  </div>
                  <div className="field-row col1">
                    <div className="field text">
                      <label htmlFor="contact_first_name">First Name*</label>
                      <small>This field is required.</small>
                      <input
                        type="text"
                        size={50}
                        name="first_name"
                        id="contact_first_name"
                        value=""
                        required
                        aria-required="true"
                        placeholder="First Name*"
                      />
                    </div>
                  </div>
                  <div className="field-row col1">
                    <div className="field text">
                      <label htmlFor="contact_last_name">Last Name*</label>
                      <small>This field is required.</small>
                      <input
                        type="text"
                        size={50}
                        name="last_name"
                        id="contact_last_name"
                        value=""
                        required
                        aria-required="true"
                        placeholder="Last Name*"
                      />
                    </div>
                  </div>
                  <div className="field-row col1">
                    <div className="field tel">
                      <label htmlFor="contact_phone">Phone*</label>
                      <small>This field is required.</small>
                      <input
                        type="tel"
                        size={50}
                        name="phone"
                        id="contact_phone"
                        value=""
                        required
                        aria-required="true"
                        placeholder="Phone*"
                      />
                    </div>
                  </div>
                  <div className="field-row col1">
                    <div className="field email">
                      <label htmlFor="contact_email">Email*</label>
                      <small>This field is required.</small>
                      <input
                        type="email"
                        size={50}
                        name="email"
                        id="contact_email"
                        value=""
                        required
                        aria-required="true"
                        placeholder="Email*"
                      />
                    </div>
                  </div>
                  <div className="field-row col1">
                    <div className="field select">
                      <label htmlFor="contact_location_id">Location*</label>
                      <small>This field is required.</small>
                      <select
                        name="location_id"
                        id="contact_location_id"
                        required
                        aria-required="true"
                      >
                        <option value="" selected disabled>
                          Location*
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="field-row col1 hidden-row">
                    <div className="field hidden">
                      <input
                        type="hidden"
                        name="location_name"
                        id="contact_location_name"
                        value=""
                      />
                    </div>
                  </div>
                  <div className="field-row col1">
                    <div className="field select">
                      <label htmlFor="contact_what_service_are_you_interested_in">
                        What Service Are You Interested In?*
                      </label>
                      <small>This field is required.</small>
                      <select
                        name="what_service_are_you_interested_in"
                        id="contact_what_service_are_you_interested_in"
                        required
                        aria-required="true"
                      >
                        <option value="" selected disabled>
                          What Service Are You Interested In?*
                        </option>
                        <option value="Liposuction">Liposuction</option>
                        <option value="BOTOX">BOTOX</option>
                        <option value="Plastic Surgery">Plastic Surgery</option>
                        <option value="Micro-channeling">
                          Micro-channeling
                        </option>
                        <option value="Med Spa">Med Spa</option>
                        <option value="Skin Care">Skin Care</option>
                        <option value="Dermal Fillers">Dermal Fillers</option>
                        <option value="Face Lift">Face Lift</option>
                        <option value="Weight Loss Injections">
                          Weight Loss Injections
                        </option>
                        <option value="I Have a Question">
                          I Have a Question
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="field-row col1">
                    <div className="field textarea">
                      <label htmlFor="contact_commentsquestions">
                        Comments/Questions
                      </label>
                      <textarea
                        rows={6}
                        cols={48}
                        defaultValue=""
                        name="commentsquestions"
                        id="contact_commentsquestions"
                        placeholder="Comments/Questions"
                      ></textarea>
                    </div>
                  </div>
                  <div className="field-row col1">
                    <div className="field checkbox opt-in follow-up">
                      <div className="field-item checkbox-item">
                        <input
                          type="checkbox"
                          id="contact_optin_for_sms_texting"
                          name="optin_for_sms_texting"
                          value="Yes"
                        />
                        <label htmlFor="contact_optin_for_sms_texting">
                          Opt-In For SMS Texting
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="field-row col1">
                    <div className="field checkbox follow-up">
                      <small>This field is required.</small>
                      <div className="field-item checkbox-item">
                        <input
                          type="checkbox"
                          id="contact_by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text"
                          name="by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text"
                          value="Yes"
                          required
                          aria-required="true"
                        />
                        <label htmlFor="contact_by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text">
                          By completing this form, you are giving us permission
                          to follow-up by phone, email or text.
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="field-row col1">
                    <div className="section-label follow-up">
                      <p>
                        Messaging frequency may vary. Message and data rates may
                        apply. You can opt out any time by texting STOP. For
                        assistance, text HELP or visit our website at{" "}
                        <a href="https://goldfingersaesthetics.com">
                          Goldfingers Aesthetics
                        </a>
                        . Visit{" "}
                        <a href="https://goldfingersaesthetics.com/privacy-policy">
                          Privacy Policy
                        </a>
                        and{" "}
                        <a href="https://www.goldfingersaesthetics.com/terms-and-conditions/">
                          Terms and Conditions
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <input
                    id="contact_recaptchaV3"
                    name="g-recaptcha-response-v3"
                    type="hidden"
                  />
                  <div id="contact_recaptchaV2" data-recaptcha></div>
                  <div id="contact_recaptcha" data-recaptcha-error>
                    <small>This field is required.</small>
                  </div>
                </div>
                <input
                  type="hidden"
                  name="form_id"
                  id="form_id"
                  value="contact"
                />
                <input name="human_check" type="hidden" />
                <div className="submit-holder">
                  <div
                    className="btn validate disabled"
                    id="validate_contact"
                    tabIndex={0}
                  >
                    Submit
                  </div>
                  <button
                    type="submit"
                    id="submit_contact"
                    value="submitted"
                    name="submit"
                    className="submit btn"
                    tabIndex={0}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Layout */}
    </main>
  );
};

export default SpecialsPage;
