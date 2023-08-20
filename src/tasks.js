
function tasks(props){
    return(
        <button type="button" className="btn-toggle-btn" aria-pressed="true" >
            <span>{props.name}
            </span>
        </button>
    );
}


export default tasks;