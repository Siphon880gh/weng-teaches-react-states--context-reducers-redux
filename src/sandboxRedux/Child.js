import "./Child.css";

function Child() {
    return (
        <div style={{margin:"20px auto", width:"fit-content", border:"1px solid black", padding:"5px"}}>
            <div style={{textAlign:"center"}}>Redux to manage user actions and their state changes</div>
            <div style={{display:"flex", gap:"10px", justifyContent:"center", margin:"10px"}}>
                <i className="fas fa-play" style={{cursor:"pointer"}}></i>
                <i className="fas fa-stop" style={{cursor:"pointer"}}></i>
                <i className="fas fa-pause" style={{cursor:"pointer"}}></i>
            </div>
            <div style={{width:"fit-content", margin:"0 auto"}}>Some very long song</div>
            <div style={{width:"fit-content", margin:"0 auto"}}><span>00:00</span></div>
        </div>
    )
}

export default Child;
