import React from 'react'
import flashLogo from '../imgs/flash-logo.svg'
import Time_flashsale from './Time_flashsale'

export default function Flashsale() {
    return (
        <div className="flashsale contianer">

            <div className="flash-sale header">
                <div className="flash-sale header1">
                    <h3>Flash</h3>
                </div>
                
                <div className="flash-sale header2">
                    <img className="flash-logo1" src={flashLogo} alt=""/>
                    <h2>SALE</h2>
                    <img className="flash-logo2" src={flashLogo} alt=""/>
                </div>
            </div>

            <div className="flash-sale body">
                <div className="flash-sale body1">
                    <p className="text-blue">ขณะนี้ลดราคาอยู่</p>
                </div>

                <div className="flash-sale body2">
                    <p className="text-white">จะสิ้นสุดใน</p>
                </div> 

                <div className="Time-flash">
                <Time_flashsale/>
                </div>
            </div>
        </div>
    )
}
