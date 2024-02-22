import { useState } from "react";
import Button from './Button'

export default function UrlKey(){
    const [urlMesInput,setUrlMesInput] = useState([])

    const handleAddUrl = () => {
        setUrlMesInput(prevUrls => {
            const newUrl = {id : uuidv4(), urlValue: '', namebutton: ''}
            return [...prevUrls,newUrl]
        })
    }

    const handleDeleteUrl = (id) => {
        const newUrl = [...urlMesInput];
        const index = newUrl.findIndex(itemUrl => itemUrl.id === id);
        newUrl.splice(index,1);
        setUrlMesInput(newUrl)
    }
    const handleUrlChange = (id, value, isClear) => {
        const newUrl = [...urlMesInput];
        const index = newUrl.findIndex(itemUrl => itemUrl.id === id);
        newUrl[index].urlValue  = isClear ? '' : value;
        setUrlMesInput(newUrl);
    }

    return (
        <>
            {urlMesInput.length > 0 && (
                urlMesInput.map(itemUrl => (
                        <label className='canal-url' key ={itemUrl.id}>
                            URL для кнопки с ссылкой 
                                <input name="name-button" id = {itemUrl.id} placeholder='название кнопки'/>
                                <input 
                                    name="url-button" 
                                    id = {itemUrl.id} 
                                    key = {itemUrl.id} 
                                    placeholder='введите ссылку' 
                                    value ={itemUrl.urlValue}
                                    onChange = {(e) => handleUrlChange(itemUrl.id,e.target.value,false)}
                                />
                                <div className='buttons'>
                                    <Button classname='button' handleClick={(e) => 
                                        handleUrlChange(itemUrl.id,e.target.value,true)}>
                                        Очистить
                                    </Button>
                                    <Button classname='button' handleClick={(e) => 
                                        handleDeleteUrl(itemUrl.id)}>
                                        Удалить
                                    </Button>
                                </div>  
                        </label>
                    ))   
            )}
        </>
    )
}