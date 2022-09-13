import React from "react";
import ServiceCard from "./Service_Card";

const ExtraService = () => {
  return (
    <section className="extra-service bg_light">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="p-3">
              <div className="d-flex justify-content-center mb-1">
                <svg
                  className=""
                  width="50"
                  height="38"
                  viewBox="0 0 50 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M49.8941 17.341L46.1107 9.22149C45.925 8.82296 45.5251 8.5681 45.0854 8.5681H34.6011C33.9765 8.5681 33.4699 9.07455 33.4699 9.69932C33.4699 10.3241 33.9765 10.8305 34.6011 10.8305H44.3645L47.7376 18.0693V29.3319H46.5212C45.9739 25.7187 42.8473 22.9405 39.0837 22.9405C35.3201 22.9405 32.1936 25.7187 31.6463 29.3319H18.3537C18.2321 28.5291 17.9817 27.7686 17.6267 27.0695H31.2076C31.8322 27.0695 32.3388 26.563 32.3388 25.9382V1.13122C32.3388 0.506448 31.8322 0 31.2076 0H1.13122C0.506561 0 0 0.506448 0 1.13122V25.9384C0 26.5631 0.506561 27.0696 1.13122 27.0696H4.206C3.85102 27.7687 3.60045 28.5292 3.47896 29.332H1.13122C0.506561 29.332 0 29.8385 0 30.4632C0 31.088 0.506561 31.5945 1.13122 31.5945H3.47885C4.02613 35.2077 7.15271 37.9859 10.9163 37.9859C14.6799 37.9859 17.8064 35.2077 18.3537 31.5945H31.6463C32.1936 35.2077 35.3201 37.9859 39.0837 37.9859C42.8473 37.9859 45.9739 35.2077 46.5212 31.5945H48.8688C49.4934 31.5945 50 31.088 50 30.4632V17.8188C50 17.6537 49.9639 17.4906 49.8941 17.341ZM2.26244 2.26244H30.0762V24.8071H15.8678C14.5436 23.6465 12.8113 22.9406 10.9163 22.9406C9.02127 22.9406 7.28903 23.6465 5.96482 24.8071H2.26244V2.26244ZM10.9163 35.7233C8.01572 35.7233 5.65611 33.3636 5.65611 30.4631C5.65611 27.5627 8.01572 25.2029 10.9163 25.2029C13.8169 25.2029 16.1765 27.5627 16.1765 30.4631C16.1765 33.3636 13.8169 35.7233 10.9163 35.7233ZM39.0837 35.7233C36.1831 35.7233 33.8235 33.3636 33.8235 30.4631C33.8235 27.5627 36.1831 25.2029 39.0837 25.2029C41.9837 25.2029 44.3431 27.5619 44.3439 30.4617C44.3439 30.4621 44.3438 30.4627 44.3438 30.4631C44.3438 30.4636 44.3439 30.4641 44.3439 30.4646C44.3431 33.3645 41.9837 35.7233 39.0837 35.7233Z"
                    fill="#111111"
                  />
                </svg>
              </div>
              <h3 className="mb-2">Fast Shipping</h3>
              <p className="mb-0">
                Free, fast, reliable delivery on over order $99.00
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="p-3">
              <div className="d-flex justify-content-center mb-1">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M48.8355 26.3379H48.7101C48.2731 24.3755 46.7255 22.8277 44.7631 22.3908V19.7631C44.7631 8.86572 35.8973 0 24.9999 0C14.1025 0 5.23682 8.86572 5.23682 19.7631V22.3908C3.27438 22.8278 1.72664 24.3755 1.28976 26.3379H1.16442C0.539651 26.3379 0.0332031 26.8445 0.0332031 27.4691C0.0332031 28.0938 0.539651 28.6003 1.16442 28.6003H1.28976C1.73795 30.6135 3.35504 32.1903 5.38954 32.5792C5.86001 34.5755 7.65504 36.0664 9.79293 36.0664C12.288 36.0664 14.3178 34.0365 14.3178 31.5415V23.3967C14.3178 20.9017 12.288 18.8719 9.79293 18.8719C8.95764 18.8719 8.17494 19.1003 7.50266 19.4967C7.64576 9.96923 15.4391 2.26244 24.9999 2.26244C34.5547 2.26244 42.3444 9.9595 42.497 19.4786C41.8317 19.0936 41.0606 18.8719 40.2382 18.8719C37.7432 18.8719 35.7133 20.9017 35.7133 23.3967V31.5415C35.7133 34.0365 37.7432 36.0664 40.2382 36.0664C42.3782 36.0664 44.1747 34.5726 44.6429 32.5733C45.3476 32.4339 46.0012 32.152 46.573 31.7587V36.755C46.573 38.8801 45.5398 40.8986 43.6635 42.4387C41.7225 44.032 39.1401 44.9095 36.392 44.9095H29.0496C28.8141 43.1394 28.0038 42.0814 26.8182 42.0814H22.5761C20.3929 42.0814 18.6168 43.8576 18.6168 46.0407C18.6168 48.2239 20.3929 50 22.5761 50H26.8182C28.0039 50 28.8142 48.9421 29.0496 47.1719H36.392C43.2533 47.1719 48.8355 42.4989 48.8355 36.755V28.6003C49.4602 28.6003 49.9667 28.0938 49.9667 27.4691C49.9667 26.8445 49.4602 26.3379 48.8355 26.3379ZM7.53049 23.3967C7.53049 22.1493 8.54542 21.1344 9.79293 21.1344C11.0404 21.1344 12.0554 22.1493 12.0554 23.3967V31.5415C12.0554 32.789 11.0404 33.804 9.79293 33.804C8.54542 33.804 7.53049 32.789 7.53049 31.5415C7.53049 30.9169 7.02404 30.4103 6.39927 30.4103C6.39395 30.4103 6.38886 30.411 6.38366 30.4111C6.37834 30.4111 6.37325 30.4103 6.36804 30.4103C4.74633 30.4103 3.42687 29.091 3.42687 27.4691C3.42687 26.2361 4.18976 25.1786 5.26804 24.7422V27.6829C5.26804 28.3076 5.77449 28.8141 6.39927 28.8141C7.02404 28.8141 7.53049 28.3076 7.53049 27.6829V23.3967ZM26.5766 47.7376H22.576C21.6403 47.7376 20.8791 46.9764 20.8791 46.0407C20.8791 45.1051 21.6403 44.3439 22.576 44.3439H26.5766C26.6953 44.5886 26.8582 45.1664 26.8582 46.0407C26.8582 46.915 26.6953 47.4929 26.5766 47.7376ZM43.6318 30.4103C43.0071 30.4103 42.5006 30.9169 42.5006 31.5415C42.5006 32.789 41.4857 33.804 40.2382 33.804C38.9907 33.804 37.9757 32.789 37.9757 31.5415V23.3967C37.9757 22.1493 38.9907 21.1344 40.2382 21.1344C41.4857 21.1344 42.5006 22.1493 42.5006 23.3967V27.6829C42.5006 28.3076 43.0071 28.8141 43.6318 28.8141C44.2566 28.8141 44.7631 28.3076 44.7631 27.6829V24.7545C45.8249 25.1986 46.573 26.2481 46.573 27.4691C46.573 29.091 45.2536 30.4103 43.6318 30.4103Z"
                    fill="#111111"
                  />
                </svg>
              </div>
              <h3 className="mb-2">24 * 7 Support</h3>
              <p className="mb-0">
                Feel free to call us & get best support service
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="p-3">
              <div className="d-flex justify-content-center mb-1">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39 6C39 2.691 36.309 0 33 0H29C26.914 0 25.076 1.071 24 2.69C22.924 1.07 21.086 0 19 0H15C11.691 0 9 2.691 9 6C9 7.538 9.586 8.937 10.54 10H0V22H2V48H19H21H27H29H46V22H48V10H37.46C38.414 8.937 39 7.538 39 6ZM29 2H33C35.206 2 37 3.794 37 6C37 8.206 35.206 10 33 10H29H27H25V6C25 3.794 26.794 2 29 2ZM11 6C11 3.794 12.794 2 15 2H19C21.206 2 23 3.794 23 6V10H21H19H15C12.794 10 11 8.206 11 6ZM2 12H15H19V20H2V12ZM19 46H4V22H19V46ZM27 46H21V22V20V12H23H25H27V20V22V46ZM44 46H29V22H44V46ZM46 20H29V12H33H46V20Z"
                    fill="#111111"
                  />
                </svg>
              </div>
              <h3 className="mb-2">Easy Money Baxk</h3>
              <p className="mb-0">
                Refer a friend our web & get a surprise gifts
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className="p-3">
              <div className="d-flex justify-content-center mb-1">
                <svg
                  width="44"
                  height="46"
                  viewBox="0 0 44 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40.8672 25.5312V19.8125C40.8652 18.8082 40.4652 17.8456 39.7552 17.1355C39.045 16.4253 38.0824 16.0255 37.0781 16.0234H34.9375L37.5469 13.4219C37.6896 13.2721 37.7705 13.074 37.7734 12.8672C37.7741 12.7644 37.7543 12.6624 37.7155 12.5672C37.6766 12.472 37.6193 12.3855 37.5469 12.3125L27.4453 2.2109C27.3727 2.13767 27.2862 2.07955 27.1911 2.03989C27.0959 2.00022 26.9937 1.9798 26.8906 1.9798C26.7875 1.9798 26.6854 2.00022 26.5902 2.03989C26.495 2.07955 26.4086 2.13767 26.3359 2.2109L24.4531 4.09371L17.1016 0.421834C16.9127 0.335178 16.6985 0.321271 16.5 0.382771C16.3055 0.451967 16.144 0.591271 16.0469 0.773396L8.44531 16.0234H3.75781C2.75895 16.0337 1.80438 16.4372 1.10098 17.1464C0.39757 17.8557 0.002 18.8136 0 19.8125V41.8672C0.0020625 42.8715 0.40193 43.834 1.11207 44.5441C1.82221 45.2543 2.78477 45.6541 3.78906 45.6562H37.0781C38.0824 45.6541 39.045 45.2543 39.7552 44.5441C40.4652 43.834 40.8652 42.8715 40.8672 41.8672V34.8359C41.6176 34.8097 42.3286 34.494 42.8515 33.9552C43.3743 33.4164 43.6683 32.6961 43.6719 31.9453V28.4297C43.6723 27.6769 43.3798 26.9535 42.8563 26.4126C42.3329 25.8716 41.6195 25.5555 40.8672 25.5312ZM26.8906 3.86715L35.8906 12.8437L32.7656 15.9687H29.8906L30.6719 15.2344C30.7451 15.1617 30.8032 15.0753 30.8429 14.9801C30.8826 14.8849 30.903 14.7828 30.903 14.6797C30.903 14.5765 30.8826 14.4744 30.8429 14.3792C30.8032 14.284 30.7451 14.1976 30.6719 14.125C30.499 13.9529 30.3618 13.7484 30.2681 13.5231C30.1745 13.2979 30.1263 13.0564 30.1263 12.8125C30.1263 12.5685 30.1745 12.327 30.2681 12.1018C30.3618 11.8765 30.499 11.672 30.6719 11.5C30.7451 11.4273 30.8032 11.3409 30.8429 11.2457C30.8826 11.1505 30.903 11.0484 30.903 10.9453C30.903 10.8422 30.8826 10.7401 30.8429 10.6448C30.8032 10.5496 30.7451 10.4632 30.6719 10.3906L29.2969 9.12498C29.1505 8.97943 28.9525 8.89779 28.7461 8.89779C28.5397 8.89779 28.3417 8.97943 28.1953 9.12498C28.0239 9.29764 27.8201 9.43467 27.5955 9.52818C27.3709 9.6217 27.13 9.66983 26.8867 9.66983C26.6434 9.66983 26.4026 9.6217 26.178 9.52818C25.9534 9.43467 25.7495 9.29764 25.5781 9.12498C25.5055 9.0517 25.4191 8.99358 25.3239 8.95397C25.2287 8.91428 25.1266 8.89389 25.0234 8.89389C24.9203 8.89389 24.8182 8.91428 24.723 8.95397C24.6278 8.99358 24.5414 9.0517 24.4688 9.12498L17.5781 16.0234H14.7344L26.8906 3.86715ZM19.8672 15.9687C20.3886 15.4572 21.0899 15.1707 21.8203 15.1707C22.5507 15.1707 23.252 15.4572 23.7734 15.9687L23.8359 16.0469H19.7812L19.8672 15.9687ZM25.75 16.0469C25.5434 15.6049 25.2604 15.203 24.9141 14.8594C24.1841 14.1412 23.224 13.704 22.2031 13.625L25.0859 10.7422C25.6275 11.0752 26.2509 11.2515 26.8867 11.2515C27.5226 11.2515 28.1459 11.0752 28.6875 10.7422L29.0391 11.0859C28.7091 11.6134 28.5308 12.2215 28.5234 12.8437C28.5237 13.4802 28.7053 14.1035 29.0469 14.6406L27.6875 16L25.75 16.0469ZM15.8516 12.6953L17.5703 9.24217C18.1641 9.38147 18.7845 9.3599 19.3672 9.17967L15.8516 12.6953ZM17.1016 2.17183L23.2891 5.25777L21.7891 6.75779L21.0938 6.39842C21.0016 6.35154 20.9009 6.3235 20.7978 6.31584C20.6947 6.30819 20.5911 6.32108 20.493 6.35381C20.3948 6.38654 20.3042 6.43834 20.2262 6.50639C20.1484 6.57436 20.0848 6.65717 20.0391 6.74998C19.9311 6.96717 19.7813 7.161 19.5984 7.3203C19.4153 7.47951 19.2027 7.60108 18.9727 7.67803C18.7426 7.75498 18.4996 7.78569 18.2577 7.76858C18.0156 7.75139 17.7795 7.6867 17.5625 7.57811C17.378 7.48545 17.1643 7.46959 16.9681 7.53397C16.772 7.59842 16.6093 7.73779 16.5156 7.92186L12.4531 16.0234H10.1953L17.1016 2.17183ZM37.0781 44.0937H3.78906C3.19917 44.0916 2.63404 43.8564 2.21692 43.4393C1.7998 43.0222 1.56456 42.457 1.5625 41.8672V19.8125C1.56456 19.2226 1.7998 18.6574 2.21692 18.2403C2.63404 17.8232 3.19917 17.588 3.78906 17.5859H37.0781C37.668 17.588 38.2331 17.8232 38.6502 18.2403C39.0674 18.6574 39.3027 19.2226 39.3047 19.8125V25.5234H33.4766C32.8549 25.5234 32.2588 25.7703 31.8193 26.2099C31.3798 26.6494 31.1328 27.2455 31.1328 27.8672V32.4844C31.1328 33.1059 31.3798 33.7021 31.8193 34.1416C32.2588 34.5812 32.8549 34.8281 33.4766 34.8281H39.3047V41.8594C39.3047 42.4506 39.0704 43.0177 38.653 43.4365C38.2357 43.8553 37.6694 44.0916 37.0781 44.0937ZM32.6953 29.3047H33.4062C33.623 29.3252 33.8244 29.4258 33.9709 29.5869C34.1174 29.748 34.1987 29.958 34.1987 30.1758C34.1987 30.3935 34.1174 30.6034 33.9709 30.7645C33.8244 30.9256 33.623 31.0263 33.4062 31.0469H32.6953V29.3047ZM42.0703 31.9297C42.0683 32.2833 41.9269 32.6219 41.6768 32.872C41.4266 33.1221 41.088 33.2635 40.7344 33.2656H33.4766C33.2893 33.268 33.1074 33.203 32.964 33.0826C32.8206 32.9622 32.7252 32.7942 32.6953 32.6094H33.3828C34.0044 32.5741 34.589 32.3023 35.0166 31.8498C35.4441 31.3973 35.6823 30.7983 35.6823 30.1758C35.6823 29.5532 35.4441 28.9542 35.0166 28.5016C34.589 28.0491 34.0044 27.7774 33.3828 27.7422H32.6953C32.7252 27.5572 32.8206 27.3894 32.964 27.2689C33.1074 27.1484 33.2893 27.0835 33.4766 27.0859H40.7734C41.1264 27.0859 41.465 27.2255 41.7153 27.4744C41.9656 27.7233 42.1073 28.0611 42.1094 28.414L42.0703 31.9297Z"
                    fill="black"
                  />
                </svg>
              </div>
              <h3 className="mb-2">Secure Payment</h3>
              <p className="mb-0">
                Safe, Faster & more secure way to pay online with us
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraService;
