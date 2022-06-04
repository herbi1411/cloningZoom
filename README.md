# ZOOM

Zoom Clone using NodeJS, WebRTC and Websockets. 

___
## Babel

- JS 컴파일러
- 새로운 JS문법을 쓰고자 하는데 브라우저가 레거시일 경우 해석을 못하므로, 이전 버전의 JS문법을 지원하는 코드를 만들어줌

## Nodemon

- 파일 변경시 자동으로 서버를 다시 띄움

## PUG

- HTML 템플릿엔진
- HTML 태그를 더 간소화 해서 작성할 수 있음

## MVP CSS

- 모든 기본속성의 css를 장식해줌

___

## #1.2 WebSockets in NodeJS
- ws 모듈을 통해 nodeJS에서 web-socket을 사용할 수 있다.
- 하지만 프로젝트에서는 ws모듈에 채팅 기능이 구현된 응용 모듈을 사용할 것이다.
- http모듈을 통해 http, ws 프로토콜을 사용하는 두 서버를 하나에 돌릴 수 있다.

## #1.3 WebSocket Events
- WS도 eventListener 사용방법과 유사하게 쓸 수 있다.
- Listen가능한 Event들이 정해져있다.

## #1.4 WebSocket Messages
- BE, FE에 각각 socket listener 함수를 만들어서 연결하기

## #1.6 Chat Completed
- Client MessageForm 생성
- Client에서 메시지를 보내면 Server에서 메시지 그대로 다시 보내기
- sockets배열을 만들어서 연결된 소켓들에게 메시지 브로드캐스팅 하기