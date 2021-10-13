import { useRecoilState } from 'recoil';

import { WrongList } from '../../store/wrong';

export function wrongNote() {
    const [wrongList, setWrongList] = useRecoilState(WrongList);

    const clearWrong = () => {
        setWrongList([]);
    }
    const addWrong = (wrong: {
        question: string
        correct_answer: string
    }) => {
        if (!wrongList.find((exm) => exm.question === wrong.question)) {
            setWrongList([
                ...wrongList,
                wrong
            ]);
        }
    }

    return {
        wrongList,
        clearWrong,
        addWrong
    };
}