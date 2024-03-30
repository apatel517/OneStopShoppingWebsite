import React from 'react'

const title = "Our Most Popular Tags";

const tagsList = [
    {
        link: "#",
        text: "Sneakers",
    },
    {
        link: "#",
        text: "Boots",
    },
    {
        link: "#",
        text: "Tracksuits",
    },
    {
        link: "#",
        text: "Training Apparel",
    },
    {
        link: "#",
        text: "Athletic Wear",
    },
    {
        link: "#",
        text: "Athletic Shoes",
    },
    {
        link: "#",
        text: "Backpacks",
    },
    {
        link: "#",
        text: "Shaker Bottles",
    },
    {
        link: "#",
        text: "Water Bottles",
    },
];


const Tags = () => {
    return (
        
        <div className="widget widget-tags">
            <div className="widget-header">
               <h5 className='title'> {title}</h5>
            </div>
            <ul className='widget-wrapper'>
                {
                    tagsList.map((val, i) => (
                        <li key={i}>
                            <a href={`val.link`}>
                                { val.text}
                            </a>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
}

export default Tags