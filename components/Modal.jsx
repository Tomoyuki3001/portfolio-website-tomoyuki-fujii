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
          <div className="modal-body-favorite-photoes py-2">
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
                      than 10 years. I also like watching the games. My favorite
                      player is Denis Shapovalov.
                    </p>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="modal-body-favorite-photoes py-2">
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
                      getting new mind and ideas.
                    </p>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="modal-body-favorite-photoes py-2">
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
                      types of sports, but I like to get through those tough
                      situations.
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
