function List(){
    const fruits = ["apple", "mango","banana"]
    fruits.sort();
    const listitems = fruits.map(fruits => <li>{fruits}</li>)
    return(<ol>{listitems}</ol>)
}
export default List; 