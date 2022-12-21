//wrapping element in 2
// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

const page = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

// console.log(page) == gives object
// {type: "div", key: null, ref: null, props: {children: [{type: "h1", key: null, ref: null, props: {className: "header", children: "This is JSX"}, _owner: null, _store: {}}, {type: "p", key: null, ref: null, props: {children: "This is a paragraph"}, _owner: null, _store: {}}]}, _owner: null, _store: {}}
ReactDOM.render(
    page,
    document.getElementById("root")
)

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

// const navbar = (
//     <nav>
//         <h1>Bob's Bistro</h1>
//         <ul>
//             <li>Menu</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//         <p1>Reservations available</p1>
//     </nav>
// )
// document.getElementById("root").append(navbar)

//[object Object] is the output
//why? it's creating a JSX object and not an element hence is rendering is needed

//document.getElementById("root").append(JSON.stringify(navbar))

// {"type":"nav","key":null,"ref":null,"props":{"children":[{"type":"h1","key":null,"ref":null,"props":{"children":"Bob's Bistro"},"_owner":null,"_store":{}},{"type":"ul","key":null,"ref":null,"props":{"children":[{"type":"li","key":null,"ref":null,"props":{"children":"Menu"},"_owner":null,"_store":{}},{"type":"li","key":null,"ref":null,"props":{"children":"About"},"_owner":null,"_store":{}},{"type":"li","key":null,"ref":null,"props":{"children":"Contact"},"_owner":null,"_store":{}}]},"_owner":null,"_store":{}},{"type":"p1","key":null,"ref":null,"props":{"children":"Reservations available"},"_owner":null,"_store":{}}]},"_owner":null,"_store":{}}