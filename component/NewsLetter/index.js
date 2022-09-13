import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const NewsLetter = () => {
  return (
    <section className="newsletter bg_light mt-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-4">
            <h3 className="mb-1">Subscribe to our newsletter</h3>
            <p className="mb-0">
              You may unsubscribe at anu moment. Please Find Our Contact info.
            </p>
          </div>
          <div className="col-5">
            <div class="input-group mb-0">
              <input
                type="email"
                className="form-control"
                id="newsletter"
                name="newsletter"
              />
              <button class="btn subscribe-button" type="button">
                Subscribe
              </button>
            </div>
          </div>
          <div className="col-3">
            <div class="social-media-list">
              <div className="social-media-link">
                <FaFacebook />
              </div>
              <div className="social-media-link">
                <FaTwitter />
              </div>
              <div className="social-media-link">
                <FaInstagram />
              </div>
              <div className="social-media-link">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
