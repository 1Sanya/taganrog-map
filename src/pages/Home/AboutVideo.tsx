import React, { FC, useEffect } from "react";
import s from "./Home.module.scss";
import blackBg from "./../../assets/photo/black.jpg";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const AboutVideo: FC = () => {
  const { bgVideo } = useTypedSelector((state) => state.homeReducer);
  const { fetchMainVideoAC } = useActions();

  useEffect(() => {
    fetchMainVideoAC();
  }, []);

  return (
    <>
      <video className={s.video} poster={blackBg} autoPlay loop muted>
        {bgVideo && <source src={bgVideo} />}
      </video>
      <div className={s.mainWrapper}>
        <div className={s.titlesWrapper}>
          <div className={s.title}>
            Красоты
            <br /> Таганрога
          </div>
          <div className={s.subtitle}>
            Архитектура,
            <br /> природа
            <br /> и онлайн-музеи
          </div>
        </div>
        <div className={s.runningStringWrapper}>
          <div className={s.runningString}>Можно открыть на картах Можно открыть на картах</div>
        </div>
      </div>
      <div className={s.arrow}>Там интересно</div>
    </>
  );
};

export default AboutVideo;
