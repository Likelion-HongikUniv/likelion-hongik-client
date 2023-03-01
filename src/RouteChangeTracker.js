/* src/RouteChangeTracker.js */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const RouteChangeTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  // localhost로 실행시 추적 방지
  useEffect(() => {
    if (!window.location.href.includes("localhost")) {
      ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID);
      setInitialized(true);
    }
  }, []);
  // 초기화 완료 되었다면 location 변화 추적하고 pageview 이벤트 발생.
  useEffect(() => {
    if (initialized) {
      ReactGA.set({ page: location.pathname });
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [initialized, location]);

  // 개발용
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID, {
      debug: true,
    });
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  return <></>;
};

export default RouteChangeTracker;
