import React from 'react'
import backpack from '../imgs/backpack.svg'
import dress from '../imgs/dress.svg'
import hight_heel from '../imgs/hight_heel.svg'
import man from '../imgs/man.svg'
import shoes from '../imgs/shoes.svg'
import T_shirt from '../imgs/T_shirt.svg'
import Wallet_women from '../imgs/Wallet_women.svg'
import woman from '../imgs/woman.svg'


export default function Category() {
    return (
        <div className ="Category-Container">
            <div className="Category-header">
                <p>หมวดหมู่</p>    
            </div>
            <div className="Category-contain">
                <div className="Category-body">
                    <div className="category-body-icon">
                        <div className="dress">
                            <img src={dress} alt=""/>
                        </div>
                        <div className="woman">
                            <img src={woman} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="Category-body">
                    <div className="category-body-icon">
                        <div className="Wallet_women">
                            <img src={Wallet_women} alt=""/>
                        </div>
                        <div className="woman">
                            <img src={woman} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="Category-body">
                    <div className="category-body-icon">
                        <div className="hight_heel">
                            <img src={hight_heel} alt=""/>
                        </div>
                        <div className="woman">
                            <img src={woman} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="Category-body">
                    <div className="category-body-icon">
                        <div className="T_shirt">
                            <img src={T_shirt} alt=""/>
                        </div>
                        <div className="man">
                            <img src={man} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="Category-body">
                    <div className="category-body-icon">
                        <div className="backpack">
                            <img src={backpack} alt=""/>
                        </div>
                        <div className="man">
                            <img src={man} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="Category-body">
                    <div className="category-body-icon">
                        <div className="shoes">
                            <img src={shoes} alt=""/>
                        </div>
                        <div className="man">
                            <img src={man} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
