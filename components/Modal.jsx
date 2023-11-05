import React from "react";
import Image from "next/image";

const Modal = (props) => {
  return (
    <div
      className={`modal ${props.show ? "show" : ""}`}
      onClick={props.onClose}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">My favorite things</h4>
        </div>
        <div className="modal-body">
          <div className="modal-body-favorite-photoes">
            <div className="image_box hover">
              <figure className="favorite_image">
                <Image
                  src="/assets/image_favorite_1.jpg"
                  alt="photos"
                  className="modal_image"
                  width={400}
                  height={400}
                />
                <figcaption className="favorite_image_hover">
                  <div className="txt_box">
                    <h1 className="favorite_h1">TENNIS</h1>
                    <p className="favorite_p">
                      One of my favorite sports. I have played tennis for more
                      than 10 years. I like watching tennis games, playing it
                      with my friends, and talking about it. It makes me happy
                      every time.
                    </p>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="modal-body-favorite-photoes">
            <div className="image_box hover">
              <figure className="favorite_image">
                <Image
                  src="/assets/image_favorite_2.jpg"
                  alt="photos"
                  className="modal_image"
                  width={400}
                  height={400}
                />
                <figcaption className="favorite_image_hover">
                  <div className="txt_box">
                    <h1 className="favorite_h1">PHOTOS</h1>
                    <p className="favorite_p">
                      I like taking photos at any places. Especially, I love
                      sea, sky, and people. While I take it, I always feel like
                      getting new mind and ideas. Also, that is helpful to think
                      about new things. This is one of my favorite moments.
                    </p>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="modal-body-favorite-photoes">
            <div className="image_box hover">
              <figure className="favorite_image">
                <Image
                  src="/assets/image_favorite_3.jpg"
                  alt="photos"
                  className="modal_image"
                  width={400}
                  height={400}
                />
                <figcaption className="favorite_image_hover">
                  <div className="txt_box">
                    <h1 className="favorite_h1">TRIATHON</h1>
                    <p className="favorite_p">
                      Triathlon is big challenging for me because that has three
                      types of sports. It is not easy things. But I like to get
                      through those tough situations. Out of season, I go
                      running in my free time.
                    </p>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={props.onClose} className="modal-button btn">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
