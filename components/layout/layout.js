import { Layout, Typography, Space } from "antd";
import { useContext } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import classes from "./layout.module.css";

export default function AppLayout({ children }) {

    return (
        <div className={classes.app}>
            <div className={classes.navbar}>
                <Navbar />
            </div>
            <div className={classes.main}>
                <Layout>
                    <div className="routes">
                        { children }
                    </div>
                </Layout>
                <div className={classes.footer}>
                    <Footer />
                </div>
            </div>

        </div>
    );
}