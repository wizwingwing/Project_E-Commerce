import React from 'react'
import Cash_on_delivery from '../imgs/cash-on-delivery.svg'
import Visa from '../imgs/visa.svg'
import MasterCard from '../imgs/mastercard.svg'

export default function Footer() {
    return (
        <div className="footer Container">
            <div className="footer-header">
                <h1>Tonnam Shop</h1>
            </div>
            <div className="footer-body">
        
                <div className="footer-body box">
                    <span>หน้าแรก</span>
                    <span>สมัครสมาชิก</span>
                    <span>ลงชื่อเข้าใช้</span>
                    <span>ติดต่อเรา</span>
                </div>

                <div className="footer-body box">
                    <span>Flash Sale</span>
                    <span>สินค้ามาใหม่</span>
                    <span>หมวดหมู่</span>
                    <span>สินค้าทั้งหมด</span>
                </div>

                <div className="footer-body box-cash">
                    <div className="footer-body box-header">
                        <span>วิธีการชำระเงิน</span>
                    </div>
                    <div className="footer-body box-icon">
                        <div className="icon-cash-on-delivery">
                            <img src={Cash_on_delivery} alt=""/>
                        </div>
                        <div className="icon-visa">
                            <img src={Visa} alt=""/>
                        </div>
                        <div className="icon-mastercart">
                            <img src={MasterCard} alt=""/>
                        </div>
                    </div>
                </div>       
            </div>
        </div>
    )
}
