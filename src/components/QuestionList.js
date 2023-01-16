import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({questions, onDeleteQuestion}) {
  console.log(questions)

  const displayQuestions = questions.map(question=><QuestionItem key={question.id}  question={question} onDeleteQuestion={onDeleteQuestion} />)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}
        {displayQuestions}
      </ul>
    </section>
  );
}

export default QuestionList;
