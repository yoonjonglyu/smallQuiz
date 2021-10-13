import { atom } from 'recoil';

export const QuizTime = atom<number>({
    key: 'quizTime',
    default: 0
});
export const QuizList = atom<Array<{
    idx: number
    question: string
    correct_answer: string
    answers: Array<string>
    isAns?: boolean
}>>({
    key: 'quizList',
    default: [

    ]
});
export const CurrentQuiz = atom<{
    idx: number
    question: string
    correct_answer: string
    answers: Array<string>
} | undefined>({
    key: 'quiz',
    default: undefined
});
