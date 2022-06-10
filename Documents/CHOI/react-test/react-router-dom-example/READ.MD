# 1. React Router

## React Router

-   리엑트에서 여러 개의 페이지로 이뤄진 애플리케이션을 쉽게 만드는데 도움을 주는 react-router-dom을 다룸.
-   설치 : npm install --save-dev react-router-dom
-   BrowserRouter를 임포트 하기 위해서, 다음과 같이 임포트함.<br>
    import { BrowserRouter, Route } from "react-router-dom"

-   Uncaught Error: A &lt;Route> is only ever to be used as the child of &lt;Routes> element, never rendered directly. Please wrap your &lt;Route> in a &lt;Routes>.
    <br>=> react-router-dom의 버전이 6.3.0이면 5.3.0으로 다운그레이드해야 정상 도착
    <br>npm install --save-dev react-router-dom@5.3.0

-   BrowserRouter는 리엑트 라우터의 도움을 받고 싶은 최상위 컴포넌트를 감싼다.
    <br> &lt;BrowserRouter>&lt;App/>&lt;/BrowserRouter>

-   Switch : Switch를 사용하게 되면, Route에 exect를 사용하지 않고도 같은 효과를 얻는다.
-   만약에 리엑트 라우터를 Switch가 감싸게되면, react-router-dom은 첫번째 매칭되는 컴포넌트가 발견시 나머지 컴포넌트는 버린다.
-   path가 루트인 Home컴포넌트의 경우 exact를 적용하지 않으면, 모든 페이지에서 매핑함.

Route는 URL이 변경되었을때 달라지게 구현함. Route의 path라는 props를 설정해야함.
다만 path가 "/"(루트)로 되어있으면 Home과 같이 표시됨.
exect 속성을 통해 path가 일치하는 경우에만 매칭함.

path props의 값이 "/"인 경우 exact props를 추가한다.

SPA(Single Page Application)은 페이지라 리로드되지 않고 동적으로 가져온 데이터는 비동기적으로 데이터를 가져와 렌더링

<pre>
root.render(
    {/* BrowserRouter는 리액트 라우터를 사용하는 최상위 컴포넌트를 감싸는 역할 */}
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>
);
</pre>

-   a태그를 Link로 대체가 가능함.
-   &lt;a href="/">&lt;/a>
-   &lt;Link to="/...">&lt;/Link>

-   Link태그 뿐만 아니라 NavLink로 대체가 가능함.
-   Link와 NavLink의 공통점은 실제 dom에서는 a태그로 표시되나, NavLink의 경우 a태그에 active클래스가 추가됨. => 클릭한 링크에서 포커스
-   &lt;NavLink to="/..">&lt;/NavLink>
