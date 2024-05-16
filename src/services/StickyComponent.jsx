import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";

const content = [
  {
    title: "Short-Term Load Forecasting",
    description:
      "Short-term load forecasting models predict electricity demand within a short time frame, typically ranging from a few hours to a few days. These models utilize machine learning algorithms such as recurrent neural networks (RNNs), long short-term memory (LSTM) networks, and support vector machines (SVMs) to analyze historical load data along with weather forecasts, time of day, day of week, holidays, and other relevant factors. By learning patterns and trends from past data, these models can accurately predict electricity demand in the near future, helping utilities optimize resource allocation and grid stability.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Short-Term Load Forecasting
      </div>
    ),
  },
  {
    title: "Medium-Term Load Forecasting",
    description:
      "Medium-term load forecasting models predict electricity demand over a longer time horizon, usually ranging from several days to several weeks or months. These models often employ more sophisticated techniques such as ensemble methods, autoregressive integrated moving average (ARIMA), and hybrid models combining statistical methods with machine learning algorithms. They take into account factors like seasonal variations, economic indicators, population growth, and industrial activities to forecast electricity demand accurately over medium-term horizons. Medium-term load forecasting helps utilities in long-term planning, capacity expansion, and energy trading decisions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))] flex items-center justify-center text-white">
        Medium-Term Load Forecasting
      </div>
    ),
  }
];

function StickyScrollRevealDemo() {
  return (
    <>
      <StickyScroll content={content} />
    </>
  );
}

export default StickyScrollRevealDemo;
