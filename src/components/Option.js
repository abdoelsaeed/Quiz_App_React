function Option({ question, dispatch, answer }) {
  const isAnswered = answer !== null;
  function handleSubmit(index) {
    dispatch({ type: "newAnswer", payload: index });
  }
  return (
    <div className="options">
      {question.options.map((option, i) => (
        <button
          className={`btn btn-option ${i === answer ? "answer" : ""} ${
            isAnswered?  i === question.correctOption ? "correct" : "wrong":""
          }`}
          key={option}
          onClick={() => handleSubmit(i)}
          disabled={isAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Option;
