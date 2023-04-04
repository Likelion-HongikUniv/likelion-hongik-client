import ReactDOM from "react-dom/client";
import ReactGA from "react-ga4";
import App from "./App";
const trackingID = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID;
trackingID && ReactGA.initialize(trackingID);
ReactGA.send(window.location.pathname + window.location.search);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
