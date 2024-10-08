type Props = {
    name: string;
    last_name: string;
    age: number;
}
function Autor(props: Props){
   
    return (
        <div>
            <h3>Autor: {props.name} {props.last_name}<br /> idade: {props.age}</h3>
        </div>
    );
}

export default Autor;