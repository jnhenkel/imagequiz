import quizzes from "../data/data";
import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from "react-router-dom";
import apiAccess from "../communication/APIAccess";

/* 
quizzes(27) {
    id
    name
    questions(6) {
        picture
        choices(3)
        answer
    }
}
*/

const Quiz = (props) => {
    const [questionCount, setQuestionCount] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [quiz, setQuiz] = useState(undefined);
    const {id} = useParams();
    

    let navigate = useNavigate();

    useEffect(() => {
        if (!quiz) {
            apiAccess.getQuiz(props.flowerName)
            .then(x => {
                console.log('x: ',x);
                setQuiz(x);
            })
            .catch(e => {
                console.log(e);
                alert('Get quiz had an error.');
            });
        }
    })

    //let flowerID;
    //for (let key in quizzes) {
    //    if (quizzes[key].name === props.flowerName) {
    //        flowerID = quizzes[key].id;
    //    }
    //}
    //let questions = quizzes[flowerID].questions[questionCount];
    if (quiz) {
    let questions = quiz.questions[questionCount];
    } else {
        let questions = quiz;
    }
    console.log('quiz: ',quiz);

    let handleSubmitQuiz = (event) => {
        setSubmitted(true);
        if (userAnswer === questions.answer) {
            handleChangeScore();
        }
    }
    let handleSubmitTryAgain = () => {

        setQuestionCount(questionCount + 1);
        setUserAnswer('');
        setSubmitted(false);
        if (questionCount >= 7) {
            alert('Out of quizzes. Click another picture to try again.');
            navigate('/index');
        } else {
            navigate('/quiz');
        }

    }
    let handleChangeScore = () => {
        setScore(score + 1);
    }
    let retakeQuiz = () => {
        setQuestionCount(0);
        setUserAnswer('');
        setSubmitted(false);
        setScore(0);
        navigate('/quiz');
    }
    return (
        <div className="container mt-5">
            {
                submitted ?
                    <>
                        <div className="card">
                            <img className="card-img-top quiz-img" src={questions.picture} />


                            <div className="card-body">

                                <div className="answer">
                                    The plant name is {questions.answer}
                                </div>
                                {userAnswer === questions.answer ?
                                    <>
                                        <div className="reply-positive">
                                            You are correct!

                                        </div>
                                        {questionCount >= 5 ?
                                            <div className="card-body">
                                                Thanks for playing! Your final score is {score}/6 <br /><br />
                                                <Button size='lg' onClick={() => navigate('/index')}>Home</Button>
                                                <Button id='retakeQuizBtn' size='lg' onClick={() => retakeQuiz()}>Retake Quiz</Button>
                                            </div>
                                            :
                                            <>
                                                <div className="try-another">
                                                    Your score is {score} <br />
                                                </div>
                                                <Button id='submitTryAgain' size='lg' variant='primary' onClick={() => handleSubmitTryAgain()}>Continue</Button>
                                            </>
                                        }
                                    </>
                                    :
                                    <>
                                        <div className="reply-negative">
                                            You are wrong...
                                        </div>
                                        {questionCount >= 5 ?
                                            <div className="card-body">
                                                Thanks for playing! Your final score is {score}/6 <br /><br />
                                                <Button size='lg' onClick={() => navigate('/index')}>Home</Button>
                                                <Button id='retakeQuizBtn' size='lg' onClick={() => retakeQuiz()}>Retake Quiz</Button>
                                            </div>
                                            :
                                            <>
                                                <div className="try-another">
                                                    Your score is {score} <br />
                                                </div>
                                                <Button id='submitTryAgain' size='lg' variant='primary' onClick={() => handleSubmitTryAgain()}>Continue</Button>
                                            </>
                                        }

                                    </>
                                }



                            </div>

                        </div>
                    </>
                    :
                    <div className="card">
                        <img className="card-img-top quiz-img" src={questions.picture} />
                        <div className="card-body">
                            <div className="question">
                                What is this plant name?
                            </div>
                            <div className="choices form-check">
                                <input type="radio" className="form-check-input" name="userChoice" value={questions.choices[0]} onChange={() => setUserAnswer(questions.choices[0])} id="userChoice1" />
                                <label className="form-check-label" htmlFor="userChoice1">{questions.choices[0]}</label>
                            </div>
                            <div className="choices form-check">
                                <input type="radio" className="form-check-input" name="userChoice" value={questions.choices[1]} onChange={() => setUserAnswer(questions.choices[1])} id="userChoice2" />
                                <label className="form-check-label" htmlFor="userChoice2">{questions.choices[1]}</label>
                            </div>
                            <div className="choices form-check">
                                <input type="radio" className="form-check-input" name="userChoice" value={questions.choices[2]} onChange={() => setUserAnswer(questions.choices[2])} id="userChoice3" />
                                <label className="form-check-label" htmlFor="userChoice3">{questions.choices[2]}</label>
                            </div>
                        </div>
                        <div className="card-title">
                            <Button id='submitQuiz' size='lg' variant='primary' onClick={handleSubmitQuiz}>Submit</Button>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Quiz;