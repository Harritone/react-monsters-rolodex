import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        const monsters = users.map(({ name, id }) => {
          return {
            id,
            name,
          };
        });
        this.setState(() => {
          return { monsters };
        });
      })
      .catch(() => {
        console.log('could not fetch monsters');
      });
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.trim().toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name
        .toLocaleLowerCase()
        .includes(searchField.toLocaleLowerCase());
    });

    return (
      <div className="App">
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
          className="search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
