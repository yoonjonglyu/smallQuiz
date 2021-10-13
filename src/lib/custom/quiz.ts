import { useRecoilState } from 'recoil';

import { QuizList, QuizTime, CurrentQuiz } from '../../store/quiz';
import quizApi from '../api/quizApi';

export function quizState() {
    const [quizList, setQuizList] = useRecoilState(QuizList);
    const [time, setTime] = useRecoilState(QuizTime);
    const [current, setCurrent] = useRecoilState(CurrentQuiz);

    const refreshQuizList = async () => {
        const data: any = await quizApi.getQuizList();
        const result = data.results.map((quiz: any, idx: number) => {
            quiz.incorrect_answers.push(quiz.correct_answer);
            return {
                idx: idx,
                question: quiz.question,
                correct_answer: quiz.correct_answer,
                answers: quiz.incorrect_answers
            }
        });
        setQuizList(result);
    }
    const updateTime = (value: number) => {
        setTime(Math.round(time + value / 1000));
    }
    const clearTime = () => {
        setTime(0);
    }
    const selectQuiz = (idx: number) => {
        setCurrent(quizList[idx]);
    }
    const checkAnser = (idx: number, flag: boolean) => {
        const state = Array.from(quizList);
        state[idx] = {
            ...state[idx],
            isAns: flag
        };
        setQuizList(state);
    }

    return {
        quizList,
        current,
        time,
        refreshQuizList,
        updateTime,
        selectQuiz,
        checkAnser,
        clearTime,
    };
}