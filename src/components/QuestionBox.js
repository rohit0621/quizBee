import React, { useState } from "react";

const QuestionBox = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState(options);
  return (
    <div className="questionBox">
      <div className="question">
        <h4>{question}</h4>
        {answer
          /* use .sort(() => 0.5 - Math.random()) after answer to shuffle array elements */
          .map((text, index) => (
            <button
              className="answerBtn"
              key={index}
              onClick={() => {
                setAnswer([text]);
                answer.length > 1 &&
                  /* multiple click on single option wont change no of response in state*/
                  selected(
                    text
                  ); /** props from child to parent not possible : so use function instead */
              }}
            >
              {text}
            </button>
          ))}
      </div>
    </div>
  );
};
export default QuestionBox;
