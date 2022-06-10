import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
    BrowserRouter,
    Route,
    Switch,
    NavLink,
    useParams, // 파라미터 가져오기 /root/:id => params => id
} from "react-router-dom";

function Home() {
    return (
        <div>
            <h2>Home</h2>
            Home...
        </div>
    );
}

const items = [
    {
        id: 1,
        title: "HTML",
        description: "HTML is ...",
    },
    {
        id: 2,
        title: "CSS",
        description: "CSS is ...",
    },
    {
        id: 3,
        title: "Javascript",
        description: "Javascript is ...",
    },
];

function Topic() {
    var params = useParams();
    var topic_id = +params.id;
    var selected_topic = {
        title: "Sorry",
        description: "Not Found",
    };
    /* const routers = items.map(({ id, title, description }, index) => {
        const path = `/topics/${id}`;
        return (
            <Route key={`topic-router-${index}`} path={path}>
                <h2>{title}</h2>
                {description}
            </Route>
        );
    }); */
    // 선택한 항목에 대해서만 표시한다.
    for (var item of items) {
        if (item.id === topic_id) {
            selected_topic.title = item.title;
            selected_topic.description = item.description;
        }
    }
    const routers = (
        <div>
            <h2>{selected_topic.title}</h2>
            {selected_topic.description}
        </div>
    );

    return routers;
}

function Topics() {
    // 배열 요소를 가지고 NavLink태그 및 Route태그 동적으로 수정

    const navLinks = items.map(({ id, title }, index) => {
        const path = `/topics/${id}`;
        return (
            <li key={`topics-${index}`}>
                <NavLink to={path}>{title}</NavLink>
            </li>
        );
    });

    return (
        <div className="App-topics">
            <h2>Topics</h2>
            <ul>{navLinks}</ul>
            <Switch>
                {/* path="/topics/:id[param]" */}
                <Route path="/topics/:id">
                    <Topic />
                </Route>
            </Switch>
        </div>
    );
}

function Contect() {
    return (
        <div>
            <h2>Contect</h2>
            Contect...
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <h1>Hello React Rounter DOM</h1>

            {/* 
            Route는 URL이 변경되었을때 달라지게 구현함. Route의 path라는 props를 설정해야함.
            다만 path가 "/"(루트)로 되어있으면 Home과 같이 표시됨.
            exect 속성을 통해 path가 일치하는 경우에만 매칭함.

            SPA(Single Page Application)은 페이지라 리로드되지 않고 동적으로 가져온 데이터는 비동기적으로 데이터를 가져와 렌더링
            */}
            <ul className="ul-main">
                <li key="0">
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                </li>
                <li key="1">
                    <NavLink to="/topics">Topics</NavLink>
                </li>
                <li key="2">
                    <NavLink to="/contect">Contect</NavLink>
                </li>
            </ul>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/topics">
                    <Topics />
                </Route>
                <Route path="/contect">
                    <Contect />
                </Route>
                {/* Not Found의 경우 exact를 제외하여 작성한다. */}
                <Route path="/">Not Found</Route>
            </Switch>
        </div>
    );
}
// React 18부터 ReactDom.render는 지원하지 않는다.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </BrowserRouter>
);

reportWebVitals();
