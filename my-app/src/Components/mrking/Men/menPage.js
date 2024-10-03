import "./menPage.css"

export default function menPage(){
    return(
        <div className="" style={{ backgroundColor:"#f1f1ef",borderColor:"#f1f1ef",borderWidth:"50px 20px",margin:"0 auto",minWidth:"300px",maxWidth:"1300px"}}>
            <div className="m-auto" style={{backgroundColor:"white",width: "100%",height:"500px"}}>
                <h1 className="p-10 text-7xl font-semibold" style={{color:"#6e7051"}}>Men</h1>
                <div className="filterNSort">
                    <div className="filter"></div>
                    <div className="sort"></div>
                </div>
            </div>
        </div>
    )
}