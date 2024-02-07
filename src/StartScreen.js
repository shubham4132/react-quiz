function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz</h2>
      <h3>{numQuestions} question to test your React Mastery</h3>
      <button className="btn btn-ui"> Lets start</button>
    </div>
  );
}

export default StartScreen;
