import Tasks from './tasks'

export default function Todo(props){
    return(
        <li className="todo-stack-small" >
            <div className="c-cb">
                <input id="todo=0" type="checkbox" defaultChecked={props.completed} />
                <label className="todo-label" htmlFor="todo-0">
                    <h3 className="todotext"> {props.name}
                    </h3>
                </label>
                <Tasks name="edit" />
                <Tasks name="delete" />
            </div>
        </li>
    );
}