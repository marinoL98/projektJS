import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import COO from '../coo.png';

export class Treca extends Component{
  
  state={
    kg:"",

  }
  onSubmit= e =>{e.preventDefault();console.log("Forma je potvrđena",this.state.kg);}
  render()
{return(
      <div class="containertreca">
      <img src={COO}class="kakadu"></img>
      <h1>NARUDŽBA</h1>
      <br></br><br></br>
      <form>
      <label for="quantity">Hrana(Maksimalno 5kg)  </label>
      <input placeholder="Između 1 i 5" type="number" id="quantity" name="quantity" min="1" max="5"value={this.state.kg}
      onChange={e=>this.setState({kg: e.target.value})}>
      

      </input>
      </form>
      <h6>Uzeli ste {this.state.kg}kg hrane</h6>
       

      <form>
      <input type="checkbox" id="hrana1" name="hrana" value="1"></input>
      <label for="vehicle1"> Uključi Vitamine u Hranu</label><br></br>
      <input type="checkbox" id="hrana2" name="hrana" value="2"></input>
      <label for="vehicle2"> Uključi Sušeno Voće u Hranu</label>

  

</form>
<br></br><br></br><br></br>
<form action="dostava">
  <label for="dostava">Dostava:  </label>
  <select id="selekt" name="dostava">
    <option value="a">Standardna(3-4 dana) </option>
    <option value="b">Ekspresna(2 dana)</option>
    <option value="c">Ultrabrza(unutar 24 sata)</option>

    
  </select>
  <br></br><br></br><br></br><br></br>
  <input type="submit" value="NARUČI!"class="submit"></input>
</form>
<br></br>
<h2 class="cjenik">Cjenik</h2>
<br></br>
<b>Hrana: 10kn po KG</b><br></br>
<b>Vitamini: +5kn</b><br></br>
<b>Sušeno Voće: +5kn</b><br></br><br></br>
<b>Standardna Dostava: 0kn</b><br></br>
<b>Eskpresna Dostava: 10kn</b><br></br>
<b>Ultrabrza Dostava: 30kn</b>

  </div>
  );
}
}

export default Treca;