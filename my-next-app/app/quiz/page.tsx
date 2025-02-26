'use client';

import { useState } from 'react';
import Spinner from '../components/spinner'; // Import the spinner component

const questions = [
  {
    question: 'Where did we go frequently before we got together?',
    options: ['Woodlands Waterfront', 'East Coast Park', 'Sentosa', 'Marina Bay Sands'],
    answer: 'Woodlands Waterfront'
  },
  {
    question: 'When did we get married?',
    options: ['31 May 2024', '01 June 2024', '01 May 2024', '30 May 2024'],
    answer: '31 May 2024'
  },
  {
    question: 'Do I like cooking?',
    options: ['Yes', 'No', 'Sometimes', 'Only on weekends'],
    answer: 'Yes'
  },
  {
    question: 'Do I like singing?',
    options: ['Yes', 'No', 'Only in the shower', 'I am not sure'],
    answer: 'Yes'
  },
  {
    question: 'What was the moment you realized you wanted to spend the rest of your life with me?',
    options: ['Since forever', 'When we traveled together', 'When we had our first fight', 'On our wedding day'],
    answer: 'Since forever'
  },
  {
    question: 'When we faced challenges together, what was the one thing you loved most about how we handled it?',
    options: ['Our resilience', 'Our communication', 'Our patience', 'Our humor'],
    answer: 'Our resilience'
  },
  {
    question: 'What’s the first song that reminds you of me?',
    options: ['Perfect by Ed Sheeran', 'A Thousand Years by Christina Perri', 'Shape of You by Ed Sheeran', 'All of Me by John Legend'],
    answer: 'Perfect by Ed Sheeran'
  },
  {
    question: 'Where did we go on our pre-honeymoon?',
    options: ['Taiwan', 'Bali', 'Hawaii', 'Japan'],
    answer: 'Taiwan'
  }
];

const QuizPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>(new Array(questions.length).fill(''));
  const [score, setScore] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [image, setImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false); // To show the spinner
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(new Array(questions.length).fill(false)); // Track answered questions

  const handleAnswerChange = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = value;
    setAnswers(newAnswers);
    setAnsweredQuestions((prev) => {
      const updated = [...prev];
      updated[currentQuestionIndex] = true;
      return updated;
    });
    console.log("Selected answer: ", value);
  };

  const handleNextQuestion = () => {
    const isCorrect = answers[currentQuestionIndex] === questions[currentQuestionIndex].answer;

    // Log selected answer and check if it's correct
    console.log('Selected Answer:', answers[currentQuestionIndex]);
    console.log('Correct Answer:', questions[currentQuestionIndex].answer);

    if (isCorrect) {
      setFeedback("Correct! 🎉");
      setImage('/success-image.jpg'); // Correct image path
    } else {
      setFeedback("Oops! That's incorrect.");
      setImage('/fail-image.jpg'); // Fail image path
    }

    setIsProcessing(true); // Show spinner while moving to next question

    // After a delay, move to the next question or finish the quiz
    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1); // Increment question index
        setFeedback(null); // Reset feedback for the next question
        setImage(null); // Reset image
        setIsProcessing(false); // Stop the spinner
      }, 1000); // Wait 1 second before showing the next question
    } else {
      setTimeout(() => checkAnswers(), 1000); // After last question, check answers
    }
  };

  const checkAnswers = () => {
    setIsProcessing(true); // Show spinner while processing results
    let totalScore = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].answer) {
        totalScore += 10; // Calculate score
      }
    });
    setTimeout(() => {
      setIsProcessing(false); // Hide spinner after processing
      setScore(totalScore); // Set the final score
      setFeedback(`You finished the quiz!`);
      alert(`Your final score: ${totalScore} / 80`); // Show final score
    }, 2000); // Adjust processing time here
  };

  const restartQuiz = () => {
    setAnswers(new Array(questions.length).fill(''));
    setScore(null);
    setFeedback(null);
    setImage(null);
    setIsProcessing(false); // Reset spinner state
    setCurrentQuestionIndex(0);
    setAnsweredQuestions(new Array(questions.length).fill(false)); // Reset answered questions
  };

  return (
    <div className="min-h-screen bg-blue-100 py-8">
      <h1 className="text-4xl text-center mb-8">Test Your Memory!</h1>
      <div className="max-w-2xl mx-auto space-y-6">
        {score === null ? (
          <>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="text-xl mb-2">{questions[currentQuestionIndex].question}</p>
              <div className="space-y-2">
                {questions[currentQuestionIndex].options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswerChange(option)}
                    className="w-full p-3 bg-blue-500 text-white rounded-lg"
                    disabled={answeredQuestions[currentQuestionIndex]}
                  >
                    {option}
                  </button>
                ))}
              </div>
              {feedback && <p className="text-lg text-gray-700 mt-2">{feedback}</p>}
              {image && <img src={image} alt="Feedback" className="w-32 h-32 mt-4 mx-auto" />}
            </div>
            <button
              onClick={handleNextQuestion}
              className="mt-4 p-3 bg-pink-500 text-white rounded-lg w-full text-xl"
              disabled={isProcessing || !answeredQuestions[currentQuestionIndex]}
            >
              {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          </>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-2xl font-semibold text-center">{feedback}</p>
            <p className="text-xl text-center mt-4">
              Your score: {score} / 80
            </p>
            {isProcessing ? <Spinner /> : <button onClick={restartQuiz} className="mt-4 p-3 bg-blue-500 text-white rounded-lg w-full text-xl">Restart Quiz</button>}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
