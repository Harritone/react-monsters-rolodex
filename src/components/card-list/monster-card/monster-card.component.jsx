import { Component } from "react";
import './monster-card.style.css'

class MonsterCard extends Component {
  render() {
    const {name, id, email} = this.props

    return(
      <div className="card-container">
        <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    )
  }
}

export default MonsterCard