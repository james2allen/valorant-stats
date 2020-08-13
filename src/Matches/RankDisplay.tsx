/** Imports */
import React from "react";

import Iron1 from "../images/ranks/iron_1.png";
import Iron2 from "../images/ranks/iron_2.png";
import Iron3 from "../images/ranks/iron_3.png";
import Bronze1 from "../images/ranks/bronze_1.png";
import Bronze2 from "../images/ranks/bronze_2.png";
import Bronze3 from "../images/ranks/bronze_3.png";
import Silver1 from "../images/ranks/silver_1.png";
import Silver2 from "../images/ranks/silver_2.png";
import Silver3 from "../images/ranks/silver_3.png";
import Gold1 from "../images/ranks/gold_1.png";
import Gold2 from "../images/ranks/gold_2.png";
import Gold3 from "../images/ranks/gold_3.png";
import Platinum1 from "../images/ranks/platinum_1.png";
import Platinum2 from "../images/ranks/platinum_2.png";
import Platinum3 from "../images/ranks/platinum_3.png";
import Diamond1 from "../images/ranks/diamond_1.png";
import Diamond2 from "../images/ranks/diamond_2.png";
import Diamond3 from "../images/ranks/diamond_3.png";
import Immortal1 from "../images/ranks/immortal_1.png";
import Immortal2 from "../images/ranks/immortal_2.png";
import Immortal3 from "../images/ranks/immortal_3.png";
import Radiant from "../images/ranks/radiant.png";

interface RankDisplayProps {
  rank: string;
  size?: number;
}

interface RanksLookup {
  [index: string]: string;
}

const ranks: RanksLookup = {
  iron_1: Iron1,
  iron_2: Iron2,
  iron_3: Iron3,
  bronze_1: Bronze1,
  bronze_2: Bronze2,
  bronze_3: Bronze3,
  silver_1: Silver1,
  silver_2: Silver2,
  silver_3: Silver3,
  gold_1: Gold1,
  gold_2: Gold2,
  gold_3: Gold3,
  platinum_1: Platinum1,
  platinum_2: Platinum2,
  platinum_3: Platinum3,
  diamond_1: Diamond1,
  diamond_2: Diamond2,
  diamond_3: Diamond3,
  immortal_1: Immortal1,
  immortal_2: Immortal2,
  immortal_3: Immortal3,
  radiant: Radiant,
};

function RankDisplay(props: RankDisplayProps) {
  return (
    <img
      className='rank-display'
      src={ranks.gold_2}
      style={{ width: props.size }}></img>
  );
}

export default RankDisplay;
