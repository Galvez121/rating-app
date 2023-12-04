import "./index.css";
import { useState } from "react";
import { ReactComponent as ThankYouIllustration } from "./illustration-thank-you.svg";

export default function App() {
  return (
    <div className="site-container">
      <Main />
    </div>
  );
}

function Main() {
  return (
    <main>
      <RatingPage />
    </main>
  );
}

function RatingPage() {
  // Rate functionality
  const [rate, setRate] = useState(0);

  // submit functionality
  const [submit, setSubmit] = useState(false);

  // Added state to store rate value
  const [rateValue, setRateValue] = useState(null);

  const handleRating = (selectRate) => {
    setRate(selectRate);
    setRateValue(selectRate);
  };

  const handleSubmit = () => {
    setSubmit(true);
  };

  // change the value submit
  const handleBackButton = () => {
    setSubmit(false);
  };

  return (
    <div>
      {!submit ? (
        <>
          <span className="star_logo">&#9733;</span>
          <h1>How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <ul className="rate_list">
            {[1, 2, 3, 4, 5].map((value) => (
              <li
                className={value <= rate ? "active" : ""}
                onClick={() => handleRating(value)}>
                {value}
              </li>
            ))}
          </ul>
          <button onClick={handleSubmit} className="submitButton">
            Submit
          </button>
        </>
      ) : (
        <ThanksPage onBack={handleBackButton} rateValue={rateValue} />
      )}
    </div>
  );
}

function ThanksPage({ onBack, rateValue }) {
  const handleBackButton = () => {
    onBack();
  };

  return (
    <div className="thank_you_layout">
      <span className="thanks_illustration">
        <ThankYouIllustration />
      </span>

      <span className="selected_message">
        You have selected {rateValue ? rateValue : "0"} out of 5
      </span>
      <span className="thanks_message">Thank you!</span>
      <p style={{ textAlign: "center" }}>
        {" "}
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
      <button className="submitButton" onClick={handleBackButton}>
        Back
      </button>
    </div>
  );
}
