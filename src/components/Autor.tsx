type Props = {
    name: string;
    last_name: string;
}
function Autor(props: Props){
   
    return (
        <div>
            <h3>Autor: {props.name} {props.last_name} </h3>
        </div>
    );
}

export default Autor;