import {useState} from "react"
import Select from 'react-select'
import Settings from './Settings'

export default function Canals(){
    const [selected, setSelected] = useState('');
    //console.log(selected)
    const options = [
        {value:'Вконтакте', label:'Вконтакте'},
        {value:'WhatsApp', label:'WhatsApp'},
        {value:'Telegram', label:'Telegram'},
        {value:'SMS', label:'SMS'},
    ]


    const handleSubmit = () => {
        return 
    }
    


    return(
        <>
        <form method="post" onSubmit={handleSubmit}>
            <label>
                <Select
                    placeholder="Выберите каналы"
                    defaultValue={selected}
                    isMulti
                    name="canals" 
                    options={options}
                    onChange={setSelected}
                 />
                <p></p>
                
            </label>
        {selected.length > 0 && 
            selected.map(canal=>(
                <Settings key={canal.value} nameCanal={canal.value}/>    
            ))
        }
            
            
            
        <input type="submit" value="Сохранить"/>
        </form>
        </>    
    )
}