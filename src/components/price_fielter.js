import React from "react"
import Ascending from "../components/asc"
import Descending from "../components/desc"

var fielter = "" 
var element_data = ""
export default class PriceFielter extends React.Component {

    constructor(props){
        super(props);
        this.state={
            order:'asc'
        }
    }
    
    abc = (data) =>{
    element_data = data.target
  fielter = data.target.value
       this.setState({
           order:fielter
       }) 
    }

    render(){
            
    // if(this.state.order === 'asc'){

    //     //deleteElement()
        
    //     return(
    //         <div>
    //         <div>
    //         <div name ="select">
    //        <select onChange={this.abc} name="helloo">
    //             <option name = "asce" value="asc" selected>Ascending Order</option>
    //             <option name = "desc" value="desc">Descending Order</option>
    //         </select>
    //     </div>
    //             <Ascending/>
    //         </div>
    //         {/* <div>
    //         <select onChange={this.abc}>
    //             <option name = "asce" value="ASC">Ascending Order</option>
    //             <option name = "desc" value="DESC">Descending Order</option>
    //         </select>
    //     </div> */}
    //     </div>        
    //         )
    // }
    //  else if(this.state.order === 'desc') {
    //     return(
    //     <div>
    //             <div name ="select">
    //        <select onChange={this.abc} name="helloo">
    //             <option name = "asce" value="asc">Ascending Order</option>
    //             <option name = "desc" value="desc" selected>Descending Order</option>
    //         </select>
    //     </div>    
    //     <Descending/>
    //     </div>
    //     )
    
    // }


    return(
        <div>
        <div>
            <select onChange={this.abc}>
                    <option name = "asce" value="asc">Ascending Order</option>
                    <option name = "desc" value="desc" >Descending Order</option>
            </select>
        </div>

{this.state.order =='asc'?<Ascending/>:<Descending/>}
</div>)

















    }
}

