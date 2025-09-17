import React from "react";

const TrainingApplication: React.FC = () => {
  return (
    <main id="main">
      {/* Page Layout */}
      {/* Intro Module */}
      <div
        className="mod_intro container viewport option-1 wow fadeInUp"
        data-s3-module=""
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
            <center>
              <h1>Apply for Your Training Spot Today</h1>
            </center>
          </div>
          <div className="bullet-points">
            <center>
              <p>
                <span style={{ fontWeight: 400 }}>
                  Begin your journey with the #1 aesthetics training program in
                  Florida. Fill out the form below to apply for hands-on
                  instruction, expert guidance, and AMI certification.
                </span>
              </p>
            </center>
          </div>
        </div>
      </div>
      {/* Contact Form Module */}
      <div className="mod_contact_form" data-s3-module="">
        <div className="wrapper">
          <div className="row">
            <h2 data-api-key="title">Apply Now</h2>
            <div className="partial_form" data-s3-partial="">
              <form
                id="form_training"
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
                        id="training_subject"
                        value="Training Sign Up Form"
                      />
                    </div>
                  </div>
                  <div className="field-row col1 hidden-row">
                    <div className="field hidden">
                      <input
                        type="hidden"
                        name="redirect"
                        id="training_redirect"
                        value="/contact/thank-you/"
                      />
                    </div>
                  </div>
                  <div className="field-row col1">
                    <div className="field text">
                      <label htmlFor="training_first_name">First Name*</label>
                      <small>This field is required.</small>
                      <input
                        type="text"
                        size={50}
                        name="first_name"
                        id="training_first_name"
                        value=""
                        required
                        aria-required="true"
                        placeholder="First Name*"
                      />
                    </div>
                  </div>
                  <div className="field-row col1">
                    <div className="field text">
                      <label htmlFor="training_last_name">Last Name*</label>
                      <small>This field is required.</small>
                      <input
                        type="text"
                        size={50}
                        name="last_name"
                        id="training_last_name"
                        value=""
                        required
                        aria-required="true"
                        placeholder="Last Name*"
                      />
                    </div>
                  </div>
                  <div className="field-row col1">
                    <div className="field tel">
                      <label htmlFor="training_phone">Phone*</label>
                      <small>This field is required.</small>
                      <input
                        type="tel"
                        size={50}
                        name="phone"
                        id="training_phone"
                        value=""
                        required
                        aria-required="true"
                        placeholder="Phone*"
                      />
                    </div>
                  </div>
                  <div className="field-row col1">
                    <div className="field email">
                      <label htmlFor="training_email">Email*</label>
                      <small>This field is required.</small>
                      <input
                        type="email"
                        size={50}
                        name="email"
                        id="training_email"
                        value=""
                        required
                        aria-required="true"
                        placeholder="Email*"
                      />
                    </div>
                  </div>
                  <div className="field-row col1">
                    <div className="field text">
                      <label htmlFor="training_preferred_training_month">
                        Preferred Training Month
                      </label>
                      <input
                        type="text"
                        size={50}
                        name="preferred_training_month"
                        id="training_preferred_training_month"
                        value=""
                        placeholder="Preferred Training Month"
                      />
                    </div>
                  </div>
                  <div className="field-row col1">
                    <div className="field select">
                      <label htmlFor="training_preferred_training_program">
                        Preferred Training Program*
                      </label>
                      <small>This field is required.</small>
                      <select
                        name="preferred_training_program"
                        id="training_preferred_training_program"
                        required
                        aria-required="true"
                      >
                        <option value="" selected disabled>
                          Preferred Training Program*
                        </option>
                        <option value="Foundational">Foundational</option>
                        <option value="Comprehensive">Comprehensive</option>
                      </select>
                    </div>
                  </div>
                  <div className="field-row col1">
                    <div className="field textarea">
                      <label htmlFor="training_questions_or_comments">
                        Questions or Comments
                      </label>
                      <textarea
                        rows={6}
                        cols={48}
                        defaultValue=""
                        name="questions_or_comments"
                        id="training_questions_or_comments"
                        placeholder="Questions or Comments"
                      ></textarea>
                    </div>
                  </div>
                  <div className="field-row col1">
                    <div className="field checkbox opt-in follow-up">
                      <div className="field-item checkbox-item">
                        <input
                          type="checkbox"
                          id="training_optin_for_sms_texting"
                          name="optin_for_sms_texting"
                          value="Yes"
                        />
                        <label htmlFor="training_optin_for_sms_texting">
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
                          id="training_by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text"
                          name="by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text"
                          value="Yes"
                          required
                          aria-required="true"
                        />
                        <label htmlFor="training_by_completing_this_form_you_are_giving_us_permission_to_followup_by_phone_email_or_text">
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
                    id="training_recaptchaV3"
                    name="g-recaptcha-response-v3"
                    type="hidden"
                  />
                  <div id="training_recaptchaV2" data-recaptcha=""></div>
                  <div id="training_recaptcha" data-recaptcha-error="">
                    <small>This field is required.</small>
                  </div>
                </div>
                <input
                  type="hidden"
                  name="form_id"
                  id="form_id"
                  value="training"
                />
                <input name="human_check" type="hidden" />
                <div className="submit-holder">
                  <div
                    className="btn validate disabled"
                    id="validate_training"
                    tabIndex={0}
                  >
                    Submit
                  </div>
                  <button
                    type="submit"
                    id="submit_training"
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
        <picture className="background">
          <source
            media="(max-width:420px)"
            srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=420, https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=630 2x"
          />
          <source
            media="(max-width:800px)"
            srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=800, https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=1200 2x"
          />
          <source
            media="(max-width:1400px)"
            srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=1400, https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2100 2x"
          />
          <source
            srcSet="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-srcset="https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2200"
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            data-lazyload-src="https://www.datocms-assets.com/105497/1694100116-contact-page-bgd.jpg?auto=format,compress&w=2200"
            loading="lazy"
            data-lazyload="img"
            width={2200}
            height={1160}
            alt="Image of a bridge with an overlay"
            draggable="false"
            data-api-key="image"
          />
        </picture>
      </div>
      {/* /Page Layout */}
    </main>
  );
};

export default TrainingApplication;
