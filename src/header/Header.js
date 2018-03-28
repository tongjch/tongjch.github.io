import React,{Component} from 'react';
import {  Link } from "react-router-dom";
require("../static/css/header.css")

class Header extends Component {
    
    render () {
        return (
            <div className="header-container">
                <div className="header-center-container">
                    <div className="header-author">BenBen Blog</div>
                    <div className="header-menu-container">
                        <ul className="header-menu">
                            <li className="header-menu-item">
                                <Link to="/home">
                                    <i className="fa fa-home fa-fw"></i>
                                    &nbsp;首页
                                </Link>
                            </li>
                            <li className="header-menu-item">
                                <Link to="/tags">
                                    <i className="fa fa-tags fa-fw"></i>
                                    &nbsp;标签
                                </Link>
                            </li>
                            <li className="header-menu-item">
                                <Link to="/types">
                                    <i className="fa fa-th fa-fw"></i>
                                    &nbsp;分类
                                </Link>
                            </li>
                            <li className="header-menu-item">
                                <Link to="/archives">
                                    <i className="fa fa-archive fa-fw"></i>
                                    &nbsp;归档
                                </Link>
                            </li>
                            <li className="header-menu-item">
                                <Link to="/search">
                                    <i className="fa fa-search fa-fw"></i>
                                    &nbsp;搜索
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header