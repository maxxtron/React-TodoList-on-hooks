import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid'
import {Col, Row, Button, FormControl} from "react-bootstrap";
import s from './AddTodo.module.css'
import { faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const AddTodo =({todo,setTodo}) => {

    const [value, setValue] = useState('');

    function saveTodo(){
        if(value){setTodo(
            [...todo, {
                id: uuidv4(),
                title: value,
                status: true
            }]
        )
            setValue('')}
    }
    return(
            <Row >
                <Col className={s.addTodoForm}>
                <FormControl placeholder='Enter task' value={value} onChange={(e)=>setValue(e.target.value)}/>
                <Button onClick={saveTodo} className={s.btn} size='sm'><FontAwesomeIcon icon={faPlusCircle}/></Button>
        </Col>
            </Row>
    )
}

export default AddTodo;