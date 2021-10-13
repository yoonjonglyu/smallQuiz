import axios from './apiConfig';

class QuizApi {
    apiUrl: string
    constructor() {
        this.apiUrl = '?amount=10&category=20&difficulty=medium&type=multiple';
    }
    async getQuizList() {
        try {
            const response = await axios.get(this.apiUrl);
            if (response.status !== 200) throw Error('퀴즈 목록을 불러오지 못했습니다.');
            const { data } = response;
            return data;
        } catch (e) {
            console.error(e);
            return [];
        }
    }
}

export default new QuizApi();