"use client";
import { useEffect, useState } from "react";
import styles from "./CountdownTimer.module.css";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} | null;

export default function CountdownTimer() {

  const getEndTime = () => {
    const saved = localStorage.getItem("timerEnd");

    if (saved) return parseInt(saved);

    const newEnd = Date.now() + 20 * 60 * 1000;
    localStorage.setItem("timerEnd", newEnd.toString());
    return newEnd;
  };

  const calculateTimeLeft = (): TimeLeft => {
    const difference = getEndTime() - Date.now();
    if (difference <= 0) return null;

    return {
      days: 0,
      hours: 0,
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(null);
  
  useEffect(() => {
    setIsMounted(true);
  
    setTimeLeft(calculateTimeLeft());
  
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  
    return () => clearInterval(timer);
  }, []);
  
  if (!isMounted) {
    return (
      <div className={styles.timer}>
        <div className={styles.block}>
          <div className={styles.value}>00</div>
          <div className={styles.label}>днів</div>
        </div>
  
        <div className={styles.separator}>:</div>
  
        <div className={styles.block}>
          <div className={styles.value}>00</div>
          <div className={styles.label}>годин</div>
        </div>
  
        <div className={styles.separator}>:</div>
  
        <div className={styles.block}>
          <div className={styles.value}>00</div>
          <div className={styles.label}>хвилин</div>
        </div>
  
        <div className={styles.separator}>:</div>
  
        <div className={styles.block}>
          <div className={styles.value}>00</div>
          <div className={styles.label}>секунд</div>
        </div>
      </div>
    );
  }

  if (!timeLeft) return null;

  const format = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className={styles.timer}>
      <div className={styles.block}>
        <div className={styles.value}>{format(timeLeft.days)}</div>
        <div className={styles.label}>днів</div>
      </div>

      <div className={styles.separator}>:</div>

      <div className={styles.block}>
        <div className={styles.value}>{format(timeLeft.hours)}</div>
        <div className={styles.label}>годин</div>
      </div>

      <div className={styles.separator}>:</div>

      <div className={styles.block}>
        <div className={styles.value}>{format(timeLeft.minutes)}</div>
        <div className={styles.label}>хвилин</div>
      </div>

      <div className={styles.separator}>:</div>

      <div className={styles.block}>
        <div className={styles.value}>{format(timeLeft.seconds)}</div>
        <div className={styles.label}>секунд</div>
      </div>
    </div>
  );
}