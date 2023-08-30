import {useState, useEffect} from 'react';
import './App.css';
import Searchbox from '../components/searchbox-components/Searchbox.jsx'
import Cardlist from '../components/cardlist-component/Cardlist.jsx'
import Scroll from '../components/scroll-component/Scroll.jsx';

const App = () => {
  const [userState, setUserState] = useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(userState);

  
  useEffect(
    () => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => setUserState(user));
    },
    []);
  
  useEffect(
    () => {
      const filteredUserList = userState.filter((user) =>
       {return user.name.toLowerCase().includes(searchField)})

       setFilteredUsers(filteredUserList)
    },
    [searchField,userState])
  

  const onSearchChange = (event) => {
    setSearchField(event.target.value.toLowerCase());
  }

  return (
    <div>
      <h1 className='app-title'>Rolodex</h1>
      <Searchbox className="searchBox" placeholder="search" onChangeHandler={onSearchChange}/>
      <Scroll>
        <Cardlist userList={filteredUsers}/>
      </Scroll>
    </div>
  );
}

export default App;
