import React from 'react'


export default function Card_flashsale() {
    return (
        <div className="Card_flashsale Container">
            <div className="card-flash item">
            <div className="Card-flash contain">
                <div className="Card header">
                    <img src="https://via.placeholder.com/407x244px" className="Product" alt=""/>
                </div>
                <div className="Card body">
                    <p className="text-head">ชื่อสินค้า</p>
                    <span className="price">฿3,000</span>

                    <div className="Sale-body">
                        <p  className="sale">฿6,000</p>
                        <span className="sale-percent">50%</span> 
                    </div>

                    <div className="Button-Detail">
                        <button>รายละเอียด</button>
                    </div>
                </div>
            </div>

            <div className="Card-flash contain">
                <div className="Card header">
                    <img src="https://via.placeholder.com/407x244px" className="Product" alt=""/>
                </div>
                <div className="Card body">
                    <p className="text-head">ชื่อสินค้า</p>
                    <span className="price">฿3,000</span>

                    <div className="Sale-body">
                        <p  className="sale">฿6,000</p>
                        <span className="sale-percent">50%</span> 
                    </div>

                    <div className="Button-Detail">
                        <button>รายละเอียด</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
