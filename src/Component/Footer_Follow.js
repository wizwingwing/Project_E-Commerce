import React from 'react'
import Instagram from  '../imgs/instagram.svg'
import Facebook from  '../imgs/facebook.svg'
import Line from  '../imgs/line.svg'
import Twitter from  '../imgs/twitter.svg'

export default function Footer_Follow() {
    return (
        <div className="Footer_Follow Container">
            <div className="Footer_Follow Contain">
                <div className="footer-follow header">
                    <p>ติดตามได้ที่</p>
                    <div className="footer-follow icon">
                        <div className="follow icon-instagram">
                            <img src={Instagram} alt=""/>
                        </div>
                        <div className="follow icon-facebook">
                            <img src={Facebook} alt=""/>
                        </div>
                        <div className="follow icon-line">
                            <img src={Line} alt=""/>
                        </div>
                        <div className="follow icon-twitter">
                            <img src={Twitter} alt=""/>
                        </div>
                    </div>
                </div>

                    <div className="follow copyright">
                        <div className="copyright-1">
                            <p>Coppyright</p>
                        </div>
                        <div className="copyright-store">
                            <p>Tonnam_shop.co</p>
                        </div>
                    </div>

            </div>
        </div>
    
    )
}
