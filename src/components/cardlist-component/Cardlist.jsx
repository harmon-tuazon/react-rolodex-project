import Card from '../card-component/Card';
import './cardlist.styles.css'


const Cardlist = ({userList}) => {
  return (
    <div className='card-list'>
        {userList.map(user => {
            return <Card key={user.id} user={user}/>
        })};
    </div>
  );
}

export default Cardlist;