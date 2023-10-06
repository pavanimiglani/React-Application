import React from 'react'; 

    function MyComponent() {
        const element = <h1>Hello,JSX!</h1>
    const link = <a href="https://example.com">Visit Example</a>;

    const handleClick = () => alert('Hello,React!') 


    return (
        <div>
    <h1>Hello React!</h1>;
   { element }
   {link}
    <button onClick={handleClick}>Click Me</button>
    </div>
    );
}
export default MyComponent;



