import React, {useState} from "react"
import Select from 'react-select';

export default function Canals(){
    const [selected, setSelected] = useState({});

    const options = [
        {value:'vk', label:'Вконтакте'},
        {value:'wp', label:'WhatsApp'},
        {value:'tg', label:'Telegram'},
        {value:'sms', label:'SMS'},
    ]


    
    const handleChange = (event) => {
        
        setSelected(event.target.value);
    } 

    const handleSubmit = () => {
        return 
    }
    


    return(
        <>
        <form method="post" onSubmit={handleSubmit}>
            <label>
                <Select
                    defaultValue={[]}
                    isMulti
                    name="canals" 
                    options={options}
                 />
                <p></p>
                <input type="submit" value="Сохранить"/>
            </label>
        </form>
        </>    
    )
}