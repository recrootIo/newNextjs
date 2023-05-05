import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const CounterUpCom = ({ endValue = 0, sectionSelect, position }) => {
  const [showCount, setShowCountValue] = useState(false);
  const poss = position || 500;
  useEffect(() => {
    const rec = document.getElementById(sectionSelect);
    if (rec) {
      const currentPosition = rec.offsetTop - document.body.scrollTop;

      window.addEventListener("scroll", () => {
        const currentScrollPosition =
          window.pageYOffset || document.documentElement.scrollTop;
        if (currentScrollPosition + poss > currentPosition) {
          setShowCountValue(true);
        }
      });
    }
  }, [sectionSelect, showCount, poss]);
  return (
    <>{showCount ? <CountUp delay={0} duration={3} end={endValue} /> : 0}</>
  );
};

export default CounterUpCom;
