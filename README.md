# Small Quiz
> 4가지 보기에서 답을 고르는 간단한 객관식 퀴즈.

## 목적
> TDD, recoil, storybook & webpack 최신화 등
> 1. 리액트 필수, 테스트 필수, 테스트는 스토리북, jest로 하고 간단하게 타입 스크립트를 달자.  
> 2. 상태관리를 컨텍스트 api로 할까? 아니면 리덕스 툴킷으로 할까? 아니면 리코일을 도입해볼까?  
> 3. api 호출은 평범하게 axios로 하면 될거 같다.  
> 4. 세션 종료시 컨텍스트가 유지 되어야 한다는 요청 사항은 없다.  
> 5. 안그래도 TDD를 연습 할 필요성을 느꼈는데 여기다 적용해보자.
> 6. 화면 구성 : 인트로(퀴즈풀기), 퀴즈, 중간결과, 최종결과, 오답노트
> 7. 소요 시간, 문제 답변 정보를 전역으로 가지고 있어야 한다.  
> 8. api 호출시 문제 정보가 지속적으로 변화하는데 각 문제를 어떻게 식별할 것인가? 이건 세션 유지 문제와 동일시 된다.

## 링크
- 레이아웃, api store까지 연결 끝난 시점의 스토리북
[스토리북 링크](https://61668cae40b29f003ae9539c-cqpeymurom.chromatic.com/)

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