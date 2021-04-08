import React from 'react'
import {Link} from 'react-router-dom'
import Slide from './Slide'


export default function Navbar() {
    return (
    <div>
        <div className="navbar">
            <div className="Nav-logo">
                <Link to="/logo" className="link_nav LOGO"><h1>Tonnam Shop</h1></Link>
            </div>
            <div className="Nav">
                <Link to="/home"className="link_nav HOME">หน้าแรก</Link>
                <Link to="/login" className="link_nav LOGIN">ลงชื่อเข้าใช้</Link>
                <Link to="/about" className="link_nav ABOUT">เกี่ยวกับเรา</Link>
                <Link to="/contact" className="link_nav CONTACT">ติดต่อเรา</Link>
            </div>
        </div>
        <div className="slide">
            <Slide/>
        </div>
    </div>
    )
}
