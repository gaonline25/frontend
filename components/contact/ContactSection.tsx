import React from "react";

const ContactSection: React.FC = () => {
  return (
    <main id="main">
      {/* Page Layout */}
      {/* Contact Module */}
      <div className="mod_contact banner stack phone-background" data-s3-module>
        <div className="row">
          <section className="info">
            <h1>Contact Us</h1>
            <div className="phone">
              <a className="tel ppc-href" href="tel:+14073334300">
                <span className="ppc-number">(407) 333-4300</span>
              </a>
            </div>
            <a className="btn" href="/specials-and-rewards/specials/">
              Specials
            </a>
          </section>
          <section className="content">
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
          </section>
        </div>
        <picture className="background desktop">
          <source
            media="(max-width:420px)"
            srcSet="https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=630 2x"
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=630 2x"
          />
          <source
            media="(max-width:800px)"
            srcSet="https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=1200 2x"
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=1200 2x"
          />
          <source
            media="(max-width:1400px)"
            srcSet="https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2100 2x"
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2100 2x"
          />
          <source
            srcSet="https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2200"
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2200"
          />
          <img
            src="https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2200"
            width="2200"
            height="1160"
            alt="Image of a bridge with an overlay"
            draggable="false"
          />
        </picture>
        <picture className="background phone">
          <source
            media="(max-width:420px)"
            srcSet="https://www.datocms-assets.com/105497/1694100140-mobile-contact-page-bgd.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694100140-mobile-contact-page-bgd.jpg?auto=format,compress&w=630 2x"
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1694100140-mobile-contact-page-bgd.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694100140-mobile-contact-page-bgd.jpg?auto=format,compress&w=630 2x"
          />
          <source
            media="(max-width:800px)"
            srcSet="https://www.datocms-assets.com/105497/1694100140-mobile-contact-page-bgd.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694100140-mobile-contact-page-bgd.jpg?auto=format,compress&w=1200 2x"
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1694100140-mobile-contact-page-bgd.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694100140-mobile-contact-page-bgd.jpg?auto=format,compress&w=1200 2x"
          />
          <source
            srcSet="https://www.datocms-assets.com/105497/1694100140-mobile-contact-page-bgd.jpg?auto=format,compress&w=860"
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1694100140-mobile-contact-page-bgd.jpg?auto=format,compress&w=860"
          />
          <img
            src="https://www.datocms-assets.com/105497/1694100140-mobile-contact-page-bgd.jpg?auto=format,compress&w=860"
            width="860"
            height="1864"
            alt="Image of a bridge with an overlay"
            draggable="false"
          />
        </picture>
      </div>
      {/* Locations Banner Module */}
      <div className="mod_locations_banner container viewport" data-s3-module>
        <div className="row wow fadeIn has-phone-list" data-wow-duration="2s">
          <div className="inner">
            <div className="content" data-api-key="content">
              <h2>
                <span className="small">Our Locations </span>
                Find the Goldfingers Aesthetics Location Closest to You
              </h2>
              <div className="phone-list">
                <div className="inner-list">
                  <p>Clearwater</p>
                  <a
                    className="tel ppc-href"
                    href="tel:+17273789338"
                    aria-label="Call Goldfingers Aesthetics on the phone"
                    role="link"
                  >
                    <span className="ppc-number">(727) 378-9338</span>
                  </a>
                </div>
                <div className="inner-list">
                  <p>Clermont</p>
                  <a
                    className="tel ppc-href"
                    href="tel:+14074618193"
                    aria-label="Call Goldfingers Aesthetics on the phone"
                    role="link"
                  >
                    <span className="ppc-number">(407) 461-8193</span>
                  </a>
                </div>
                <div className="inner-list">
                  <p>Daytona Beach</p>
                  <a
                    className="tel ppc-href"
                    href="tel:+14077569062"
                    aria-label="Call Goldfingers Aesthetics on the phone"
                    role="link"
                  >
                    <span className="ppc-number">(407) 756-9062</span>
                  </a>
                </div>
                <div className="inner-list">
                  <p>Lady Lake / The Villages</p>
                  <a
                    className="tel ppc-href"
                    href="tel:+13527070707"
                    aria-label="Call Goldfingers Aesthetics on the phone"
                    role="link"
                  >
                    <span className="ppc-number">(352) 707-0707</span>
                  </a>
                </div>
                <div className="inner-list">
                  <p>Lake Mary</p>
                  <a
                    className="tel ppc-href"
                    href="tel:+14074053388"
                    aria-label="Call Goldfingers Aesthetics on the phone"
                    role="link"
                  >
                    <span className="ppc-number">(407) 405-3388</span>
                  </a>
                </div>
                <div className="inner-list">
                  <p>Lake Nona</p>
                  <a
                    className="tel ppc-href"
                    href="tel:+14075906274"
                    aria-label="Call Goldfingers Aesthetics on the phone"
                    role="link"
                  >
                    <span className="ppc-number">(407) 590-6274</span>
                  </a>
                </div>
                <div className="inner-list">
                  <p>Longwood</p>
                  <a
                    className="tel ppc-href"
                    href="tel:+14074923169"
                    aria-label="Call Goldfingers Aesthetics on the phone"
                    role="link"
                  >
                    <span className="ppc-number">(407) 492-3169</span>
                  </a>
                </div>
                <div className="inner-list">
                  <p>Mount Dora</p>
                  <a
                    className="tel ppc-href"
                    href="tel:+13527070707"
                    aria-label="Call Goldfingers Aesthetics on the phone"
                    role="link"
                  >
                    <span className="ppc-number">(352) 707-0707</span>
                  </a>
                </div>
                <div className="inner-list">
                  <p>New Smyrna Beach</p>
                  <a
                    className="tel ppc-href"
                    href="tel:+14075475891"
                    aria-label="Call Goldfingers Aesthetics on the phone"
                    role="link"
                  >
                    <span className="ppc-number">(407) 547-5891</span>
                  </a>
                </div>
                <div className="inner-list">
                  <p>Ocala</p>
                  <a
                    className="tel ppc-href"
                    href="tel:+13527070707"
                    aria-label="Call Goldfingers Aesthetics on the phone"
                    role="link"
                  >
                    <span className="ppc-number">(352) 707-0707</span>
                  </a>
                </div>
                <div className="inner-list">
                  <p>Orlando / Dr. Phillips</p>
                  <a
                    className="tel ppc-href"
                    href="tel:+14078214983"
                    aria-label="Call Goldfingers Aesthetics on the phone"
                    role="link"
                  >
                    <span className="ppc-number">(407) 821-4983</span>
                  </a>
                </div>
                <div className="inner-list">
                  <p>Port Orange</p>
                  <a
                    className="tel ppc-href"
                    href="tel:+13868010024"
                    aria-label="Call Goldfingers Aesthetics on the phone"
                    role="link"
                  >
                    <span className="ppc-number">(386) 801-0024</span>
                  </a>
                </div>
                <div className="inner-list">
                  <p>Sarasota</p>
                  <a
                    className="tel ppc-href"
                    href="tel:+19415992392"
                    aria-label="Call Goldfingers Aesthetics on the phone"
                    role="link"
                  >
                    <span className="ppc-number">941-599-2392</span>
                  </a>
                </div>
                <div className="inner-list">
                  <p>Downtown Tampa</p>
                  <a
                    className="tel ppc-href"
                    href="tel:+18134353474"
                    aria-label="Call Goldfingers Aesthetics on the phone"
                    role="link"
                  >
                    <span className="ppc-number">(813) 435-3474</span>
                  </a>
                </div>
                <div className="inner-list">
                  <p>St Petersburg</p>
                  <a
                    className="tel ppc-href"
                    href="tel:+17273105120"
                    aria-label="Call Goldfingers Aesthetics on the phone"
                    role="link"
                  >
                    <span className="ppc-number">(727) 310-5120</span>
                  </a>
                </div>
                <div className="inner-list">
                  <p>Tampa (Northdale)</p>
                  <a
                    className="tel ppc-href"
                    href="tel:+18134351585"
                    aria-label="Call Goldfingers Aesthetics on the phone"
                    role="link"
                  >
                    <span className="ppc-number">(813) 435-1585</span>
                  </a>
                </div>
                <div className="inner-list">
                  <p>Downtown Orlando</p>
                  <a
                    className="tel ppc-href"
                    href="tel:+14075054901"
                    aria-label="Call Goldfingers Aesthetics on the phone"
                    role="link"
                  >
                    <span className="ppc-number">(407) 505-4901</span>
                  </a>
                </div>
                <div className="inner-list">
                  <p>Wesley Chapel</p>
                  <a
                    className="tel ppc-href"
                    href="tel:+18132303778"
                    aria-label="Call Goldfingers Aesthetics on the phone"
                    role="link"
                  >
                    <span className="ppc-number">(813) 230-3778</span>
                  </a>
                </div>
                <div className="inner-list">
                  <p>Winter Garden</p>
                  <a
                    className="tel ppc-href"
                    href="tel:+14074031232"
                    aria-label="Call Goldfingers Aesthetics on the phone"
                    role="link"
                  >
                    <span className="ppc-number">407-403-1232</span>
                  </a>
                </div>
                <div className="inner-list">
                  <p>Winter Park</p>
                  <a
                    className="tel ppc-href"
                    href="tel:+14074624405"
                    aria-label="Call Goldfingers Aesthetics on the phone"
                    role="link"
                  >
                    <span className="ppc-number">(407) 462-4405</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="locations">
              <span className="location" style={{ left: "53%", top: "45%" }}>
                <a
                  className="pin-link"
                  aria-label="Clearwater pin on a map"
                  href="/clearwater/"
                >
                  <span className="pin"></span>
                </a>
                <span className="tip">
                  <span className="info">
                    <h3>Clearwater</h3>
                    <hr />
                    <span className="address">
                      <p>
                        2745 Fl-580<span className="block">Suite 101, </span>
                        Clearwater, FL 33761
                      </p>
                    </span>
                    <a
                      className="tel ppc-href"
                      href="tel:+17273789338"
                      aria-label="Call Goldfingers Aesthetics on the phone"
                      role="link"
                    >
                      <span className="ppc-number">(727) 378-9338</span>
                    </a>
                  </span>
                </span>
              </span>
              <span className="location" style={{ left: "83%", top: "32%" }}>
                <a
                  className="pin-link"
                  aria-label="Clermont pin on a map"
                  href="/clermont/"
                >
                  <span className="pin"></span>
                </a>
                <span className="tip">
                  <span className="info">
                    <h3>Clermont</h3>
                    <hr />
                    <span className="address">
                      <p>
                        861 Oakley Seaver Dr.,{" "}
                        <span className="block">Suite B, </span>
                        Clermont, FL 34711
                      </p>
                    </span>
                    <a
                      className="tel ppc-href"
                      href="tel:+14074618193"
                      aria-label="Call Goldfingers Aesthetics on the phone"
                      role="link"
                    >
                      <span className="ppc-number">(407) 461-8193</span>
                    </a>
                  </span>
                </span>
              </span>
              <span className="location" style={{ left: "99%", top: "17%" }}>
                <a
                  className="pin-link"
                  aria-label="Daytona Beach pin on a map"
                  href="/daytona-beach/"
                >
                  <span className="pin"></span>
                </a>
                <span className="tip">
                  <span className="info">
                    <h3>Daytona Beach</h3>
                    <hr />
                    <span className="address">
                      <p>
                        244 Seabreeze Blvd,{" "}
                        <span className="block">Daytona Beach, FL 32118</span>
                      </p>
                    </span>
                    <a
                      className="tel ppc-href"
                      href="tel:+14077569062"
                      aria-label="Call Goldfingers Aesthetics on the phone"
                      role="link"
                    >
                      <span className="ppc-number">(407) 756-9062</span>
                    </a>
                  </span>
                </span>
              </span>
              <span className="location" style={{ left: "75%", top: "24%" }}>
                <a
                  className="pin-link"
                  aria-label="Lady Lake / The Villages pin on a map"
                  href="/the-villages/"
                >
                  <span className="pin"></span>
                </a>
                <span className="tip">
                  <span className="info">
                    <h3>Lady Lake / The Villages</h3>
                    <hr />
                    <span className="address">
                      <p>
                        8550 N. East 138th Lane,{" "}
                        <span className="block">Bldg 600, </span>
                        Lady Lake, FL 32159
                      </p>
                    </span>
                    <a
                      className="tel ppc-href"
                      href="tel:+13527070707"
                      aria-label="Call Goldfingers Aesthetics on the phone"
                      role="link"
                    >
                      <span className="ppc-number">(352) 707-0707</span>
                    </a>
                  </span>
                </span>
              </span>
              <span className="location" style={{ left: "93%", top: "28%" }}>
                <a
                  className="pin-link"
                  aria-label="Lake Mary pin on a map"
                  href="/lake-mary/"
                >
                  <span className="pin"></span>
                </a>
                <span className="tip">
                  <span className="info">
                    <h3>Lake Mary</h3>
                    <hr />
                    <span className="address">
                      <p>
                        115 International Pkwy{" "}
                        <span className="block">Lake Mary, FL 32746</span>
                      </p>
                    </span>
                    <a
                      className="tel ppc-href"
                      href="tel:+14074053388"
                      aria-label="Call Goldfingers Aesthetics on the phone"
                      role="link"
                    >
                      <span className="ppc-number">(407) 405-3388</span>
                    </a>
                  </span>
                </span>
              </span>
              <span className="location" style={{ left: "", top: "" }}>
                <a
                  className="pin-link"
                  aria-label="Lake Nona pin on a map"
                  href="/lake-nona/"
                >
                  <span className="pin"></span>
                </a>
                <span className="tip">
                  <span className="info">
                    <h3>Lake Nona</h3>
                    <hr />
                    <span className="address">
                      <p>6982 Lake Nona Blvd, Suite 110, Orlando FL 32827</p>
                    </span>
                    <a
                      className="tel ppc-href"
                      href="tel:+14075906274"
                      aria-label="Call Goldfingers Aesthetics on the phone"
                      role="link"
                    >
                      <span className="ppc-number">(407) 590-6274</span>
                    </a>
                  </span>
                </span>
              </span>
              <span className="location" style={{ left: "90%", top: "31%" }}>
                <a
                  className="pin-link"
                  aria-label="Longwood pin on a map"
                  href="/longwood/"
                >
                  <span className="pin"></span>
                </a>
                <span className="tip">
                  <span className="info">
                    <h3>Longwood</h3>
                    <hr />
                    <span className="address">
                      <p>
                        165 Wekiva Springs Road,{" "}
                        <span className="block">Suite C-135, </span>
                        Longwood, FL 32779
                      </p>
                    </span>
                    <a
                      className="tel ppc-href"
                      href="tel:+14074923169"
                      aria-label="Call Goldfingers Aesthetics on the phone"
                      role="link"
                    >
                      <span className="ppc-number">(407) 492-3169</span>
                    </a>
                  </span>
                </span>
              </span>
              <span className="location" style={{ left: "84%", top: "27%" }}>
                <a
                  className="pin-link"
                  aria-label="Mount Dora pin on a map"
                  href="/mount-dora/"
                >
                  <span className="pin"></span>
                </a>
                <span className="tip">
                  <span className="info">
                    <h3>Mount Dora</h3>
                    <hr />
                    <span className="address">
                      <p>
                        18770 US-441,{" "}
                        <span className="block">Mount Dora, FL 32757</span>
                      </p>
                    </span>
                    <a
                      className="tel ppc-href"
                      href="tel:+13527070707"
                      aria-label="Call Goldfingers Aesthetics on the phone"
                      role="link"
                    >
                      <span className="ppc-number">(352) 707-0707</span>
                    </a>
                  </span>
                </span>
              </span>
              <span className="location" style={{ left: "105%", top: "29%" }}>
                <a
                  className="pin-link"
                  aria-label="New Smyrna Beach pin on a map"
                  href="/new-smyrna-beach/"
                >
                  <span className="pin"></span>
                </a>
                <span className="tip">
                  <span className="info">
                    <h3>New Smyrna Beach</h3>
                    <hr />
                    <span className="address">
                      <p>
                        State Rd. 44 Unit 1976,{" "}
                        <span className="block">
                          New Smyrna Beach, FL 32168
                        </span>
                      </p>
                    </span>
                    <a
                      className="tel ppc-href"
                      href="tel:+14075475891"
                      aria-label="Call Goldfingers Aesthetics on the phone"
                      role="link"
                    >
                      <span className="ppc-number">(407) 547-5891</span>
                    </a>
                  </span>
                </span>
              </span>
              <span className="location" style={{ left: "72%", top: "19%" }}>
                <a
                  className="pin-link"
                  aria-label="Ocala pin on a map"
                  href="/ocala/"
                >
                  <span className="pin"></span>
                </a>
                <span className="tip">
                  <span className="info">
                    <h3>Ocala</h3>
                    <hr />
                    <span className="address">
                      <p>
                        303 SE 17 Street,{" "}
                        <span className="block">Unit 309, </span>
                        Ocala FL 34471
                      </p>
                    </span>
                    <a
                      className="tel ppc-href"
                      href="tel:+13527070707"
                      aria-label="Call Goldfingers Aesthetics on the phone"
                      role="link"
                    >
                      <span className="ppc-number">(352) 707-0707</span>
                    </a>
                  </span>
                </span>
              </span>
              <span className="location" style={{ left: "89%", top: "34%" }}>
                <a
                  className="pin-link"
                  aria-label="Orlando / Dr. Phillips pin on a map"
                  href="/orlando/"
                >
                  <span className="pin"></span>
                </a>
                <span className="tip">
                  <span className="info">
                    <h3>Orlando / Dr. Phillips</h3>
                    <hr />
                    <span className="address">
                      <p>
                        7653 Turkey Lake Rd.,{" "}
                        <span className="block">Orlando, FL 32819</span>
                      </p>
                    </span>
                    <a
                      className="tel ppc-href"
                      href="tel:+14078214983"
                      aria-label="Call Goldfingers Aesthetics on the phone"
                      role="link"
                    >
                      <span className="ppc-number">(407) 821-4983</span>
                    </a>
                  </span>
                </span>
              </span>
              <span className="location" style={{ left: "103%", top: "22%" }}>
                <a
                  className="pin-link"
                  aria-label="Port Orange pin on a map"
                  href="/port-orange/"
                >
                  <span className="pin"></span>
                </a>
                <span className="tip">
                  <span className="info">
                    <h3>Port Orange</h3>
                    <hr />
                    <span className="address">
                      <p>
                        851 Dunlawton Ave{" "}
                        <span className="block">Suite 103, </span>
                        Port Orange, FL 32127
                      </p>
                    </span>
                    <a
                      className="tel ppc-href"
                      href="tel:+13868010024"
                      aria-label="Call Goldfingers Aesthetics on the phone"
                      role="link"
                    >
                      <span className="ppc-number">(386) 801-0024</span>
                    </a>
                  </span>
                </span>
              </span>
              <span
                className="location"
                style={{ left: "62.3363%", top: "72.5422%" }}
              >
                <a
                  className="pin-link"
                  aria-label="Sarasota pin on a map"
                  href="/sarasota/"
                >
                  <span className="pin"></span>
                </a>
                <span className="tip">
                  <span className="info">
                    <h3>Sarasota</h3>
                    <hr />
                    <span className="address">
                      <p>
                        1407 First St <br />
                        Sarasota, FL 34236
                      </p>
                    </span>
                    <a
                      className="tel ppc-href"
                      href="tel:+19415992392"
                      aria-label="Call Goldfingers Aesthetics on the phone"
                      role="link"
                    >
                      <span className="ppc-number">941-599-2392</span>
                    </a>
                  </span>
                </span>
              </span>
              <span className="location" style={{ left: "61%", top: "43%" }}>
                <a
                  className="pin-link"
                  aria-label="Downtown Tampa pin on a map"
                  href="/downtown-tampa/"
                >
                  <span className="pin"></span>
                </a>
                <span className="tip">
                  <span className="info">
                    <h3>Downtown Tampa</h3>
                    <hr />
                    <span className="address">
                      <p>
                        <span className="block">
                          105 E Jackson St, Tampa, FL 33602
                          <br />
                        </span>
                      </p>
                    </span>
                    <a
                      className="tel ppc-href"
                      href="tel:+18134353474"
                      aria-label="Call Goldfingers Aesthetics on the phone"
                      role="link"
                    >
                      <span className="ppc-number">(813) 435-3474</span>
                    </a>
                  </span>
                </span>
              </span>
              <span
                className="location"
                style={{ left: "52.6608%", top: "48.7713%" }}
              >
                <a
                  className="pin-link"
                  aria-label="St Petersburg pin on a map"
                  href="/st-petersburg/"
                >
                  <span className="pin"></span>
                </a>
                <span className="tip">
                  <span className="info">
                    <h3>St Petersburg</h3>
                    <hr />
                    <span className="address">
                      <p>
                        <a
                          href="https://www.google.com/maps/place/Goldfingers+Aesthetics+St.+Petersburg/@27.7716841,-82.6570198,17z/data=!3m1!4b1!4m6!3m5!1s0x88c2e3a22bd61d09:0x1b60bfdb32964d67!8m2!3d27.7716841!4d-82.6570198!16s%2Fg%2F11y677nkdd?entry=ttu"
                          target="_blank"
                          rel="noopener"
                        >
                          1701 Central Ave N Ste 1739,{" "}
                        </a>
                        <br />
                        <a
                          href="https://www.google.com/maps/place/Goldfingers+Aesthetics+St.+Petersburg/@27.7716841,-82.6570198,17z/data=!3m1!4b1!4m6!3m5!1s0x88c2e3a22bd61d09:0x1b60bfdb32964d67!8m2!3d27.7716841!4d-82.6570198!16s%2Fg%2F11y677nkdd?entry=ttu"
                          target="_blank"
                          rel="noopener"
                        >
                          St. Petersburg, FL 33713
                        </a>
                      </p>
                    </span>
                    <a
                      className="tel ppc-href"
                      href="tel:+17273105120"
                      aria-label="Call Goldfingers Aesthetics on the phone"
                      role="link"
                    >
                      <span className="ppc-number">(727) 310-5120</span>
                    </a>
                  </span>
                </span>
              </span>
              <span className="location" style={{ left: "61%", top: "43%" }}>
                <a
                  className="pin-link"
                  aria-label="Tampa (Northdale) pin on a map"
                  href="/tampa/"
                >
                  <span className="pin"></span>
                </a>
                <span className="tip">
                  <span className="info">
                    <h3>Tampa (Northdale)</h3>
                    <hr />
                    <span className="address">
                      <p>
                        3861 Northdale Blvd.,{" "}
                        <span className="block">Tampa, FL 33624</span>
                      </p>
                    </span>
                    <a
                      className="tel ppc-href"
                      href="tel:+18134351585"
                      aria-label="Call Goldfingers Aesthetics on the phone"
                      role="link"
                    >
                      <span className="ppc-number">(813) 435-1585</span>
                    </a>
                  </span>
                </span>
              </span>
              <span className="location" style={{ left: "", top: "" }}>
                <a
                  className="pin-link"
                  aria-label="Downtown Orlando pin on a map"
                  href="/downtown-orlando/"
                >
                  <span className="pin"></span>
                </a>
                <span className="tip">
                  <span className="info">
                    <h3>Downtown Orlando</h3>
                    <hr />
                    <span className="address">
                      <p>
                        101 Lake Avenue.{" "}
                        <span className="block">Suite 1. </span>
                        Orlando 32801
                      </p>
                    </span>
                    <a
                      className="tel ppc-href"
                      href="tel:+14075054901"
                      aria-label="Call Goldfingers Aesthetics on the phone"
                      role="link"
                    >
                      <span className="ppc-number">(407) 505-4901</span>
                    </a>
                  </span>
                </span>
              </span>
              <span className="location" style={{ left: "", top: "" }}>
                <a
                  className="pin-link"
                  aria-label="Wesley Chapel pin on a map"
                  href="/wesley-chapel/"
                >
                  <span className="pin"></span>
                </a>
                <span className="tip">
                  <span className="info">
                    <h3>Wesley Chapel</h3>
                    <hr />
                    <span className="address">
                      <p>
                        27440 Cashford Cir Ste 102
                        <br />
                        Wesley Chapel, FL 33544
                      </p>
                    </span>
                    <a
                      className="tel ppc-href"
                      href="tel:+18132303778"
                      aria-label="Call Goldfingers Aesthetics on the phone"
                      role="link"
                    >
                      <span className="ppc-number">(813) 230-3778</span>
                    </a>
                  </span>
                </span>
              </span>
              <span className="location" style={{ left: "", top: "" }}>
                <a
                  className="pin-link"
                  aria-label="Winter Garden pin on a map"
                  href="/winter-garden/"
                >
                  <span className="pin"></span>
                </a>
                <span className="tip">
                  <span className="info">
                    <h3>Winter Garden</h3>
                    <hr />
                    <span className="address">
                      <div>
                        1101 S Park Ave #500<span>&nbsp;</span>
                        <span className="il">Winter Garden</span>, FL 34787
                      </div>
                    </span>
                    <a
                      className="tel ppc-href"
                      href="tel:+14074031232"
                      aria-label="Call Goldfingers Aesthetics on the phone"
                      role="link"
                    >
                      <span className="ppc-number">407-403-1232</span>
                    </a>
                  </span>
                </span>
              </span>
              <span className="location" style={{ left: "87%", top: "29%" }}>
                <a
                  className="pin-link"
                  aria-label="Winter Park pin on a map"
                  href="/winter-park/"
                >
                  <span className="pin"></span>
                </a>
                <span className="tip">
                  <span className="info">
                    <h3>Winter Park</h3>
                    <hr />
                    <span className="address">
                      <p>
                        400 W Fairbanks Ave,{" "}
                        <span className="block">Winter Park, FL 32789</span>
                      </p>
                    </span>
                    <a
                      className="tel ppc-href"
                      href="tel:+14074624405"
                      aria-label="Call Goldfingers Aesthetics on the phone"
                      role="link"
                    >
                      <span className="ppc-number">(407) 462-4405</span>
                    </a>
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <picture className="background">
          <source
            media="(max-width:420px)"
            srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=1200 2x"
          />
          <source
            media="(max-width:800px)"
            srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=800&q=100, https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=1200&q=100 2x"
          />
          <source
            media="(max-width:1400px)"
            srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=1400&q=100, https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=2100&q=100 2x"
          />
          <source
            srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=2200&q=100"
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-src="https://www.datocms-assets.com/105497/1693509356-10.jpg?auto=format,compress&w=2200&q=100"
            loading="lazy"
            data-lazyload="img"
            width="2200"
            height="1208"
            alt="map of florida"
            draggable="false"
          />
        </picture>
      </div>
      {/* /Page Layout */}
    </main>
  );
};

export default ContactSection;
