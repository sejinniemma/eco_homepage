import React, { useEffect, useState } from 'react';
import styles from './slide_img.module.css';
import image from '../img/1.jpeg';
import image4 from '../img/1-2.jpeg';
import image1 from '../img/1-1.jpeg';
import image5 from '../img/5.jpeg';
import image2 from '../img/2.jpeg';
import image3 from '../img/3.jpeg';

const SlideImage = ({ name }) => {
  // store your index and time in state
  const [slideIndex, setSlideIndex] = useState(1);

  const decoColorPick = name === 'canada' ? 'deco_canada' : 'deco';
  const imgPick = name === 'canada' ? image5 : image;
  const imgPick2 = name === 'canada' ? image1 : image2;
  const imgPick3 = name === 'canada' ? image4 : image3;

  // change slides in effect
  useEffect(() => {
    showSlide();
  }, [slideIndex]);

  function currentSlide(idx) {
    setSlideIndex(idx);
  }

  function plusSlides(n) {
    setSlideIndex(slideIndex + n);
  }

  function showSlide() {
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByTagName('span');
    for (let i = 0; i < slides.length; i++) slides[i].style.display = 'none';

    if (slideIndex > slides.length) {
      setSlideIndex(1);
    } else if (slideIndex < 1) {
      setSlideIndex(slides.length);
    } else {
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' ' + styles.active, '');
      }
      slides[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].className += ' ' + styles.active;
    }
  }

  return (
    <div className={styles.img_container}>
      <div className={decoColorPick}>
        <div className={styles.slideshowContainer}>
          <div className={styles.slideshowContainer}>
            <div className={`mySlides ${styles.mySlides} ${styles.fade}`}>
              <img src={imgPick} width='400px' height='500px' alt='1'></img>
            </div>

            <div className={`mySlides ${styles.mySlides} ${styles.fade}`}>
              <img src={imgPick2} width='400px' height='500px' alt='2'></img>
            </div>

            <div className={`mySlides ${styles.mySlides} ${styles.fade}`}>
              <img src={imgPick3} width='400px' height='500px' alt='3'></img>
            </div>

            <a className={styles.prev} onClick={() => plusSlides(-1)}>
              &#10094;
            </a>
            <a className={styles.next} onClick={() => plusSlides(1)}>
              &#10095;
            </a>
          </div>

          <div className={styles.dotContainer}>
            <span className={styles.dot} onClick={() => currentSlide(1)}></span>
            <span className={styles.dot} onClick={() => currentSlide(2)}></span>
            <span className={styles.dot} onClick={() => currentSlide(3)}></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideImage;
