import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container blogs'>

            <div className="blog-container">
                <p>Q<sub>1. </sub>What is context API? What is the purpose of it?</p>
                <p><b>A:</b> Context API is a powerful react feature that allow us to share state across the whole application globally without having <b>‘Props Drilling’</b> issue. Before, if we need to share data from parent to child component, a possible way was to pass the data using props. When the targeted component has a long distance from parent component, it creates code redundancy issue. In that case, <b>Context API</b> helps us to solve this problem in a smart way.  React introduced <b>React.createContext()</b> component and a <b>Provider</b> to wrap those components that need to share data without acknowledged the other components.</p>

                
            </div>

            <div className="blog-container">
                <p>Q<sub>2. </sub>What is Semantic tag? </p>
                <p><b>A: </b> Semantic tags or semantic elements is something that has an actual meaning which is more understandable for human being. Semantic tag is mostly introduced in HTML5 version to write more human readable codes. Some of the most common semantic tags are <b>header, footer, nav, article</b> etc. This tags are actually helps to get a prior knowledge that what is the section about. On the other hand, there are some non-semantic tag like <b>div, dir</b> etc. that doesn't hold any particular meaning.</p>
            </div>

            <div className="blog-container">
            <p>Q<sub>3. </sub>What is inline and inline-block elements?</p>
            <p><b>A: </b> Inline elements are occupied a width that it is required. Inline elements are not start with new line and we cannot set height, width etc. in inline elements. To solve this problem, we can make a inline elements as a block elements by using <b>display: inline-block</b> command. Block elements usually take the full width of the parent component and allow to set height, width etc. By using inline-block property, we can impose block elements property in a inline elements without losing it’s own identity .</p>
            </div>
        </div>
    );
};

export default Blogs;