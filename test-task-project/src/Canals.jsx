import {useState} from "react"
import Select from 'react-select';

export default function Canals(){
    const [selected, setSelected] = useState('');

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
                <input type="submit" value="Сохранить"/>
            </label>
            
            <label>

            </label>
        </form>
        </>    
    )
}