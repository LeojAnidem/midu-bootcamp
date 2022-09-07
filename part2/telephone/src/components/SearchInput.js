import '../styles/searchInput.css'

export const SearchInput = ({changer, val, placeholder}) => {
  const handleChange = (e) => changer(e.target.value)

  return (
    <div className="search-bg">
      <label htmlFor='searchInput'>
        <i className="search__icon">

        </i>
      </label>
      
      <input 
        className="search__input"
        id='searchInput'
        placeholder={placeholder}
        type='text' 
        onChange={handleChange} 
        value={val} 
      />
    </div>
  )
}