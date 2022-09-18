import MonsterCard from "./monster-card/monster-card.component";
import './card-list.style.css'

const CardList = ({monsters}) => {
  return (
    <div className="card-list">
      {monsters.map(({id, name, email}) => {
        return (
          <div key={id}>
            <MonsterCard name={name} id={id} email={email} />
          </div>
        );
      })}
    </div>
  )
}

export default CardList;