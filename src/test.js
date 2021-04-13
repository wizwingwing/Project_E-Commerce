import React from 'react'

export default function Test() {

    let data = [
        {
            name:"รองเท้า",
            price: "100",
            discount: "10",
            description: "รายละเอียดที่1",
        },
        {
            name:"เสื้อ",
            price: "120",
            discount: "10",
            description: "รายละเอียดที่1",
        },
        {
            name:"กระเป๋า",
            price: "80",
            discount: "10",
            description: "รายละเอียดที่1",
        },{
            name:"กระโปรง",
            price: "300",
            discount: "10",
            description: "รายละเอียดที่1",
        },
        {
            name:"เสื้อ",
            price: "70",
            discount: "10",
            description: "รายละเอียดที่1",
        },
    ]

    return (
        <div style={{ display:"flex", justifyContent:"space-around" ,  flexWrap: "wrap" }}>
           {data.filter((item,index) => index === 0 ).map(item => item.name)[0]}
        </div>
    )
}
