import { Typography, Space } from "antd";
import { useContext } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

export default function AppLayout({ children }) {

    return (
        <div className="app">
            <div className="navbar">
                <Navbar />
            </div>
            <div className="main">
                { children }
            </div>
            <div className="footer">

            </div>
        </div>
    );
}