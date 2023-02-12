import { useEffect, useState } from "react";
import { HiArrowTrendingUp, HiArrowTrendingDown } from "react-icons/hi2";
import { LongBadge, ShortBadge } from "../../../components/badge";
import { GiFire } from "react-icons/gi";

const Favorite = ([]) => {
  const [data, setdata] = useEffect(null);

  useEffect(() => {
    fetch = `https://bapi.ubitex.io/v1.0/static/crypto/getGainerLoserFavorite`
      .then((response) => response.json())
      .then((data) => setdata(data));

    return (
      <>
       
      </>
    );
  });
};

export default Favorite;
