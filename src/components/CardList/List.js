import './List.css'

function List({children}){
    return <ul className='state-list'>
       {children} 
    </ul>
}

export default List