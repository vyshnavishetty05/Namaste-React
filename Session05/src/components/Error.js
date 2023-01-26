import { useRouteError } from "react-router-dom";
//above hook catches all routing error, and allows us to show errors to user properly
const Error = ()=>{
    const errmsg = useRouteError();
    console.log(errmsg);
    return(
        <div>
            <h1>OOps!!!</h1>
            <h2>Something went wrong!!</h2>
            {/* we can do destructuring as well */}
            <h3>{errmsg.status+ ": "+ errmsg.statusText}</h3>
        </div>
    );
}
export default Error;