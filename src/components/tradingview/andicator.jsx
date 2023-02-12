// TradingViewWidget.js

import React, { useEffect, useRef } from "react";

let tvScriptLoadingPromise;

export default function TradingViewWidget({ Symbol, color }) {
  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_064f6") &&
        "TradingView" in window
      ) {
        new window.TradingView.MediumWidget({
          symbols: [[`${Symbol}|1M`]],
          chartOnly: false,
          width: "100%",
          height: "100%",
          locale: "en",
          // colorTheme: theme,
          autosize: false,
          showVolume: false,
          hideDateRanges: false,
          hideMarketStatus: false,
          hideSymbolLogo: true,
          scalePosition: "right",
          scaleMode: "Percentage",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          fontSize: "10",
          noTimeScale: false,
          valuesTracking: "1",
          changeMode: "price-and-percent",
          chartType: "area",
          lineColor: "rgba(255, 152, 0, 1)",
          topColor: "rgba(255, 152, 0, 0.3)",
          bottomColor: "rgba(255, 152, 0, 0)",
          backgroundColor: "rgba(0, 0, 255, 0)",
          widgetFontColor: color,
          lineWidth: 3,
          container_id: "tradingview_064f6",
        });
      }
    }
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div id="tradingview_064f6" />
    </div>
  );
}





// <div class="tradingview-widget-container">
//   <div class="tradingview-widget-container__widget"></div>
//   <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/BTCUSDT/technicals/" rel="noopener" target="_blank"><span class="blue-text">BTCUSDT analysis</span></a> by TradingView</div>
//   <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js" async>
//   {
//   "interval": "4h",
//   "width": "100%",
//   "isTransparent": true,
//   "height": "100%",
//   "symbol": "BINANCE:BTCUSDT",
//   "showIntervalTabs": true,
//   "locale": "en",
//   "colorTheme": "light"
// }
//   </script>
// </div>
// <!-- TradingView Widget END -->