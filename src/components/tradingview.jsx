// TradingViewWidget.js

import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget({Symbol, theme}) {
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_064f6') && 'TradingView' in window) {
          new window.TradingView.MediumWidget({
            symbols: [[`${Symbol}|1M`]],
            chartOnly: false,
            width: "100%",
            height: "100%",
            locale: "en",
            colorTheme: theme,
            autosize: false,
            showVolume: false,
            hideDateRanges: false,
            hideMarketStatus: false,
            hideSymbolLogo: true,
            scalePosition: "right",
            scaleMode: "Percentage",
            fontFamily: "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
            fontSize: "10",
            noTimeScale: false,
            valuesTracking: "1",
            changeMode: "price-and-percent",
            chartType: "area",
            lineColor: "rgba(255, 152, 0, 1)",
            topColor: "rgba(255, 152, 0, 0.3)",
            bottomColor: "rgba(255, 152, 0, 0)",
            lineWidth: 3,
            container_id: "tradingview_064f6"
          });
        }
      }
    },
    []
  );

  return (
    <div className='tradingview-widget-container'>
      <div id='tradingview_064f6' />
     
    </div>
  );
}
