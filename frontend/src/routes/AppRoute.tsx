import {Routes, Route} from "react-router-dom";
import LoginPage from "../pages/LoginPage.tsx";
import HomePage from "../pages/HomePage.tsx";


export default AppRoute

function AppRoute() {
    // 화면 이동을 위한 route 페이지  화면이 많아질 경우 인증이 필요한 페이지들과 분리하여 관리
    return<>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
         </>
}