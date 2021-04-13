import React from 'react'
import Cart from '../imgs/cart.svg'
import Heart from '../imgs/heart.svg'

export default function All_product() {
    return (
        <div className="All_product Container">
            <div className="all-product header">
                <p>สินค้าทั้งหมด</p>
            </div>
            <div className="all-product body">
                <div className="outer-box-product">
                    <div className="box-product header">
                        <p>ชื่อสินค้า</p>
                    </div>
                    <div className="image-product">
                        <img src="https://via.placeholder.com/363x366px" alt=""/>
                    </div>
                    <div className="box-body">
                        <div className="box-product price">
                            <p>฿200</p>
                        </div>
                        <div className="icon-card">
                            <img src={Cart} alt=""/>
                        </div>
                        <div className="icon-heart">
                            <img src={Heart} alt=""/>
                        </div>
                    </div>
                </div>

                <div className="outer-box-product">
                    <div className="box-product header">
                        <p>ชื่อสินค้า</p>
                    </div>
                    <div className="image-product">
                        <img src="https://via.placeholder.com/363x366px" alt=""/>
                    </div>
                    <div className="box-body">
                        <div className="box-product price">
                            <p>฿200</p>
                        </div>
                        <div className="icon-card">
                            <img src={Cart} alt=""/>
                        </div>
                        <div className="icon-heart">
                            <img src={Heart} alt=""/>
                        </div>
                    </div>
                </div>

                <div className="outer-box-product">
                    <div className="box-product header">
                        <p>ชื่อสินค้า</p>
                    </div>
                    <div className="image-product">
                        <img src="https://via.placeholder.com/363x366px" alt=""/>
                    </div>
                    <div className="box-body">
                        <div className="box-product price">
                            <p>฿200</p>
                        </div>
                        <div className="icon-card">
                            <img src={Cart} alt=""/>
                        </div>
                        <div className="icon-heart">
                            <img src={Heart} alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            

            <div className="btn-all-product">
                <button>ดูสินค้าทั้งหมด</button>
            </div>
        </div>
    )
}
