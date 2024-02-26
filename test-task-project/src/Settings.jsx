import Button from './Button'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
//import UrlKey from './UrlKey';

export default function Settings(props){
    const [textMes,setTextMes] = useState('');
    const [fastMesArea,setFastMesArea] = useState([])
    const [urlMesInput,setUrlMesInput] = useState([])

    const handleTextMesChange = (value,isClear) => {
        isClear ? setTextMes("") : setTextMes(value)
    }

    const handleAddFast = () => {
        setFastMesArea(prevAreas => {
            const newArea = {id : uuidv4(), textareaValue: '', namebutton: ''}
            return [...prevAreas,newArea]
        })
    }
    const handleDeleteFast = (id) => {
        const newAreas = [...fastMesArea];
        const index = newAreas.findIndex(area => area.id === id);
        newAreas.splice(index,1);
        setFastMesArea(newAreas)
    }

    const handleTextareaChange = (id, value, isClear) => {
        const newAreas = [...fastMesArea];
        const index = newAreas.findIndex(area => area.id === id);
        newAreas[index].textareaValue  = isClear ? '' : value;
        setFastMesArea(newAreas);
    };

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


    return(
       <div className='settings'>
            <label className='canal-text'>
                {props.nameCanal}
                Текст сообщения
                <textarea 
                    value={textMes}
                    name="canal-text-content" 
                    onChange={(e)=>handleTextMesChange(e.target.value,false)}
                    maxLength="11"
                />
                <div className='buttons'>
                    <Button classname='button' handleClick={handleAddFast}>Быстрый ответ +</Button>
                    <Button classname='button' handleClick={handleAddUrl}>Ссылка +</Button>
                    <Button classname='button' handleClick={(e)=>handleTextMesChange(e.target.value,true)}>Очистить</Button>
                </div>
            </label>

            {fastMesArea.length > 0 && (
                    fastMesArea.map(area => (
                            <label className='canal-fast' key ={area.id}>
                                Текст для кнопки быстрого ответа 
                                    <input id = {area.id} placeholder='название кнопки'/>
                                    <textarea
                                        placeholder='текст ответа'
                                        key = {area.id}
                                        id = {area.id}
                                        value ={area.textareaValue}
                                        name ="canal-fast-content"
                                        onChange = {(e) => handleTextareaChange(area.id,e.target.value,false)}
                                        maxLength="11"
                                    />
                                    <div className='buttons'>
                                        <Button classname='button' handleClick={(e) => 
                                            handleTextareaChange(area.id,e.target.value,true)}>
                                            Очистить
                                        </Button>
                                        <Button classname='button' handleClick={(e) => 
                                            handleDeleteFast(area.id)}>
                                            Удалить
                                        </Button>
                                    </div>
                            </label>
                        ))   
            )}
            {/* <UrlKey /> */}
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
       </div>
       
    )
}