"use client";

import styles from "../app/home.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import CountdownTimer from "../components/timer";

import "swiper/css";
import "swiper/css/navigation";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className={styles.header}>

          <div className={styles.mainText}>
            КОЛИ ЇЖА СТАЄ КРИКОМ
          </div>

          <div className={styles.lowerText}>
            <div className={styles.lowerTextLowwer}> Як не пропустити перші тривожні дзвіночки РХП у власної дитини</div>
          </div>

          <div>
            <CountdownTimer/>
          </div>

          <div className={styles.price}>
            <span className={styles.oldPrice}>2490 грн</span>
            <span className={styles.newPrice}>490 грн</span>
          </div>

          <div className={styles.ctaWrapper}>
          <button
            className={styles.ctaButton}
            onClick={() => window.location.href = "https://secure.wayforpay.com/button/b16d9646a6244"}
          >
            Отримати міні-курс за 490 грн
          </button>
        </div>
        </div>

        <div className={styles.whatHappensContainer}>
          <div className={styles.leftBlock}>
            <p className={styles.title}>Якщо ви помічаєте, що:</p>

            <ul className={styles.list}>
              <li>дитина різко обмежує їжу</li>
              <li>зациклена на вазі або “правильному” харчуванні</li>
              <li>зривається, переїдає або приховує їжу</li>
              <li>уникає спільних прийомів їжі</li>
              <li>різко змінюється настрій після їжі</li>
            </ul>
          </div>

          <div className={styles.arrow}>→</div>

          <div className={styles.rightBlock}>
            <span className={styles.rightBlockText}>Це може бути не “перехідний вік”</span>
            <span className={styles.rightBlockText}>І не “просто характер”</span>
            <span className={styles.rightBlockText}>І не “маніпуляція”</span>

            <p className={styles.finalText}>
              Іноді їжа стає єдиною мовою, якою дитина говорить про свій біль
            </p>
          </div>
        </div>

        <div className={styles.photosContainer}>
          <div className={styles.photoWrapper}>
            <img src="/IMG_2221.png" className={styles.photo1} />
          </div>
        </div>

        <div className={styles.ctaWrapper}>
          <button
            className={styles.ctaButton}
            onClick={() => window.location.href = "https://secure.wayforpay.com/button/b16d9646a6244"}
          >
            Отримати міні-курс за 490 грн
          </button>
        </div>



        <section className={styles.sliderSection}>

          <h2 className={styles.sliderTitle}>
            Цей міні-курс для вас, якщо:
          </h2>

          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
          >
            <SwiperSlide>
              <div className={styles.slide}>
                Ви тривожитесь, але не розумієте — це вже проблема чи ще ні
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.slide}>
                Боїтесь сказати щось не те і погіршити ситуацію
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.slide}>
                Хочете допомогти, але не знаєте як
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.slide}>
                Втомились від боротьби навколо їжі
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.slide}>
                Потребуєте чіткої структури дій
              </div>
            </SwiperSlide>

          </Swiper>

        </section> 
      </div>

      <div className={styles.willLearn}>
        <div className={styles.willLearnContainer}>
          <p className={styles.willLearnContainerTitle}>Ви дізнаєтесь:</p>

          <ul className={styles.willLearnContainerList}>
            <li>Чому РХП мають один із найвищих рівнів смертності серед психічних розладів</li>
            <li>Що відбувається з тілом при анорексії та булімії</li>
            <li>Чому контроль і тиск погіршують ситуацію</li>
            <li>Які фрази НЕ можна говорити дитині</li>
            <li>Як реагувати без агресії та паніки</li>
          </ul>

        </div>
      </div>

      <div className="container">
        <div className={styles.fitSection}>
          <h2 className={styles.fitTitle}>Кому підійде?</h2>

          <div className={styles.fitGrid}>
            <div className={styles.fitCard}>Батькам дітей 8–17 років</div>
            <div className={styles.fitCard}>Тим, хто вже бачить тривожні сигнали</div>
            <div className={styles.fitCard}>Тим, хто хоче діяти на ранній стадії</div>
            <div className={styles.fitCard}>Тим, хто хоче зрозуміти, а не контролювати</div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaContainer}>
            
            <p className={styles.ctaText}>
              Якщо ви читаєте це — значить, вам вже не байдуже
            </p>

            <p className={styles.ctaSubText}>
              Не чекайте, поки стане гірше
            </p>

            <button
              className={styles.ctaButton}
              onClick={() => window.location.href = "https://secure.wayforpay.com/button/b16d9646a6244"}
            >
              Отримати міні-курс за 490 грн
            </button>


          </div>
        </div>
      </div>


    </>
  );
}
