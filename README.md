# BootCampWeek2-movieSite
2주차 개인과제

---
## 과제개요
TMDB 오픈 API를 이용하여 JS로 영화 리스트 조회 및 검색 UI구현


- (1) 필수요구사항
    - [1] jQuery 라이브러리 사용없이 **순수 바닐라 자바스크립트** 사용하기
        - JavaScript 문법 종합반에서 학습한 내용과 지난 예제문제를 참조해 보세요
    - [2] TMDB 오픈 API를 이용하여 인기영화 데이터 가져오기
    - [3] 영화정보 카드 리스트 UI 구현
    - TMDB에서 받아온 데이터를 브라우저 화면에 카드 형태의 데이터로 보여줍니다.
    - 카드에는 title(제목), overview(내용 요약), poster_path(포스터 이미지 경로), vote_average(평점) 이렇게 4가지 정보가 필수로 들어갑니다.
    - - 카드 클릭 시에는 클릭한 영화 id 를 나타내는 alert 창을 띄웁니다.
        
- [4] 영화 검색 UI 구현
    - API로 받아온 전체 영화들 중 영화 제목에 input 창에 입력한 문자값이 포함되는 영화들만 화면에 보이도록 합니다.
    - 입력 후 검색버튼 클릭 시 실행되도록 합니다.
- [5] 아래 기재된 Javascript 문법 요소를 이용하여 구현
    - 문법 리스트
        - const와 let만을 이용한 변수 선언 필수
            
            ```jsx
            const a = 'test 01';
            let b = 'test 02';
            
            var c = 'no way!'; //쓰지 말 것
            ```
            
        - 화살표 함수 : 아래 예시 중 1개 이상 사용
            - 일반 화살표 함수
                
                ```jsx
                let add = (x, y) => {
                  return x + y;
                }
                
                console.log(add(2, 3));   // 5
                ```
                
            - 한 줄로 된 화살표 함수
                
                ```jsx
                let add = (x, y) => x + y;
                
                console.log(add(2, 3));   // 5
                ```
                
            - 매개변수가 하나인 화살표 함수
                
                ```jsx
                let square = x => x * x;
                
                console.log(square(3));   // 9
                ```
                
        - 배열 메소드 : 하기 예시 중 2개 이상 사용
            - forEach
            - map
            - filter
            - reduce
            - find
        - DOM 제어하기 : 아래 api 목록 중 2개 이상 사용하기
            
            <aside>
            💡 1.  문서 객체 생성과 선택
            
            - `document.createElement(tagName)` : 새로운 HTML 요소를 생성합니다.
            - `document.getElementById(id)` : id 속성을 기준으로 요소를 선택합니다.
            - `document.getElementsByTagName(name)` : 태그 이름을 기준으로 요소를 선택합니다.
            - `document.getElementsByClassName(name)` : 클래스 이름을 기준으로 요소를 선택합니다.
            - `document.querySelector(selector)` : CSS 선택자를 이용하여 요소를 선택합니다.
            - `document.querySelectorAll(selector)` : CSS 선택자를 이용하여 모든 요소를 선택합니다.
            1. 문서 객체 조작
            - `element.innerHTML` : 해당 요소 내부의 HTML 코드를 변경합니다.
            - `element.textContent` : 해당 요소 내부의 텍스트를 변경합니다.
            - `element.setAttribute(attr, value)` : 해당 요소의 속성 값을 변경합니다.
            - `element.getAttribute(attr)` : 해당 요소의 속성 값을 가져옵니다.
            - `element.style.property` : 해당 요소의 스타일 값을 변경합니다.
            - `element.appendChild(child)` : 해당 요소의 하위 요소로 child를 추가합니다.
            - `element.removeChild(child)` : 해당 요소의 하위 요소 중 child를 삭제합니다.
            - `element.classList.add(class)` : 해당 요소의 클래스에 새로운 클래스를 추가합니다.
            - `element.classList.remove(class)` : 해당 요소의 클래스 중에서 특정 클래스를 제거합니다.
            - `element.classList.toggle(class)` : 해당 요소의 클래스 중에서 특정 클래스를 추가 또는 제거합니다.
            1. 이벤트 처리
            - `element.addEventListener(type, listener)` : 해당 요소에서 이벤트가 발생했을 때 호출할 함수를 등록합니다.
            - `element.removeEventListener(type, listener)` : 해당 요소에서 등록된 함수를 제거합니다.
            - `event.preventDefault()` : 이벤트가 발생했을 때 기본 동작을 취소합니다.
            - `event.stopPropagation()` : 이벤트의 버블링을 방지하기 위해 이벤트 전파를 중지합니다.
            1. 기타
            - `window.location.href` : 현재 페이지의 URL을 가져옵니다.
            - `window.alert(message)` : 경고 메시지를 출력합니다.
            - `window.confirm(message)` : 확인 메시지를 출력하고 사용자의 답변에 따라 Boolean 값을 반환합니다.
            </aside>
- (2) 선택요구사항
    - CSS
        - flex 사용하기
        - grid 사용하기
    - 웹사이트 랜딩 또는 새로고침 후 검색 입력란에 커서 자동 위치시키기
    - 대소문자 관계없이 검색 가능하게 하기
    - 키보드 enter키를 입력해도 검색버튼 클릭한 것과 동일하게 검색 실행시키기
    - 원하는 추가기능 무엇이라도 okay!
        - 여러분의 챌린지는 언제나 환영합니다. 필수 요구사항이 완료되었다면, 자유롭게 추가기능을 넣어주세요.
        - 단, 우선순위는 필수요구사항임을 명심해주세요!
