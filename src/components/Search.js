import {useState} from 'react'
import {Input} from "antd";
import { PresetColorTypes } from 'antd/lib/_util/colors';

function Search(props){
    const[search, setSearch] = useState('')


    const handleSearchInput = e =>{
       setSearch(e.target.value)
       
       props.searchFood(e.target.value)
    }


    return (
        <div className="search-bar">
          <Input value={search} placeholder='Search' className="search-bar" type="text" onChange={handleSearchInput} />
        </div>
      );
}

export default Search