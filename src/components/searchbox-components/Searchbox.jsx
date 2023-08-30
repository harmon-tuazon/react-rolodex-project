import './searchbox.style.css'

const Searchbox = ({className, search, onChangeHandler}) => {
  return (
    <>
        <input
            className={`search-box ${className}`}
            type = 'search'
            placeholder={search}
            onChange={onChangeHandler}
        />
    </>
  );
}

export default Searchbox;
