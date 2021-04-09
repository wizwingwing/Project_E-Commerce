import React from 'react'
import fire from '../imgs/fire.svg'
import Card_Newproduct from './Card_Newproduct'

export default function New_Product() {
    return (
        <div className="New_product Container">
            <div className="New_product Contain">
                <div className="New_product header1">
                    <span className="PD text-white">สินค้ามา</span>
                    <span className="PD text-black">ใหม่</span>
                </div>

                <div className="New_product header2">
                    <img src={fire} alt=""/>
                </div>

                <div className="card_newproduct">  
                    <Card_Newproduct/>
                </div>
            </div>

        </div>
    )
}
