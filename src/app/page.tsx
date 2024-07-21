'use client';
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import { SymbolOverview } from "react-ts-tradingview-widgets";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className={styles.main}>
      <div id="test">
        {isClient && (
          <SymbolOverview
            colorTheme="dark"
            chartType="candlesticks"
            downColor="#800080"
            borderDownColor="#800080"
            wickDownColor="#800080"
            dateFormat="dd MMM 'yy"
          />
        )}
      </div>
    </main>
  );
}
