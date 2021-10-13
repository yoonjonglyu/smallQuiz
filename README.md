# Small Quiz
> 4가지 보기에서 답을 고르는 간단한 객관식 퀴즈.

## 목적
> TDD, recoil, storybook & webpack 최신화 등
> 1. 리액트 필수, 테스트 필수, 테스트는 스토리북, jest로 하고 간단하게 타입 스크립트를 달았다..  
> 2. 상태관리는 recoil  
> 3. api 호출은 평범하게 axios로 진행했다..  
> 4. 세션 종료시 컨텍스트가 유지 되어야 한다는 요청 사항이 없으므로 모든 데이터는 휘발성이다.  
> 5. 컴포넌트 위주로 TDD를 진행했다. 아토믹 프레젠테이션 컴포넌트의 경우 스토리북만 사용했다.
> 6. 스토어나 api등에 대한 테스트는 생략했고, branch는 devlop +@로 깃허브 플로우에 따라서 형상 관리했다.
> 6. 화면 구성 : 인트로(퀴즈풀기), 퀴즈, 중간결과, 최종결과, 오답노트

## 링크
- [스토리북 링크](https://61668cae40b29f003ae9539c-qktzfddwem.chromatic.com/)
- [깃페이지 링크](https://yoonjonglyu.github.io/smallQuiz/)

## DIR STRUCTURE
- build 
> webpack build utils
- build/addons
> webpack addons
- public
> static root
- src
> dev root

## LICENSE
- MIT

## AUTHOR
- ISA (yoonjonglyu)