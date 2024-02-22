export default function Button ({children,handleClick,classname}){
    let classNameBut = classname ?  'mybutton' + ' ' + classname : 'mybutton'
    return (
    <div className={classNameBut} onClick={handleClick}>
        {children} 
        </div>
    )
}