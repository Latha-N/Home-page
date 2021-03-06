    import React, { useState } from 'react'
    import image10 from '../images/image10.jpg'
    import fig4 from '../images/fig4.JPG'

    const Part5 = () => {
        const [data,setData] = useState(['Top Lawyers In The Us. Search Top Lawyers In The Us, Information from Trusted Internet Sources. Explore the Best Info Now. 100+ Unique Results. Find All Info You Want. Quick Answers. Useful & Relevant. Find in Seconds. Services: Secure Search, No.1 Answers.','rajesh','girish','gagan','shivamma'])
        const [currentPage,setCurrentpage] = useState(1)
        const [itemsPerpage,setItemsPerpage] = useState(1)
        const pages = []
        for(let i=1; i<=Math.ceil(data.length/itemsPerpage); i++){
            pages.push(i)
        }

        const indexOfLastItem = currentPage*itemsPerpage
        const indexOfFirstPage = indexOfLastItem-itemsPerpage
        const currentitems = data.slice(indexOfFirstPage,indexOfLastItem)

        const handleClick = (e) =>{
            setCurrentpage(Number(e.target.id)) 
            //console.log('kkk') 
        }

        const renderpagesNumber = pages.map((number,i)=>{
            return (
                <li key={i} id={i} onClick={handleClick}>
                    {number}
                </li>
            )
        })

    return (
        <div className="part3 container-fluid">

            <div className="container">
            <h4 className="text-center pt-3">HOW IT WORKS</h4>
            <ul className="pageNumbers d-flex justify-content-center">
                    {renderpagesNumber}
                    </ul>

            <div className="row align-items-center">
                <div className="col-md-6">
                    <img src={fig4} className="image-p "/>
                </div>
                <div className="col-md-4">
                    <h3>Register</h3>
                   <span className="text-wrap"> {currentitems}</span>
                </div>
            </div>

            </div>


        </div>
    )
    }

    export default Part5
