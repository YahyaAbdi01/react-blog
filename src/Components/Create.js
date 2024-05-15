import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import {Button, ToastContainer} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Create =()=>{

    const [data, setData]= useState({
        title:'',
        author:'',
        body:''
    })

    const handlChange=(e)=>{
        const {name, value} = e.target;
        setData((prev)=>{
            return{...prev, [name]: value}
    
        })

    }


    const handleSubmit=(e)=>{
        //code handle submit
    }

return (
<div onSubmit={handleSubmit}>


    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title:</Form.Label>
        <Form.Control name="title" type="text" onChange={handlChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Author:</Form.Label>
        <Form.Control name="author" type="text"  onChange={handlChange}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Body</Form.Label>
        <Form.Control as="textarea" name="body" type="text"  onChange={handlChange}  />
      </Form.Group>

      <Button variant="primary" type="submit">save blog</Button>

      <ToastContainer/>
      <p>{data.title}</p>
    <p>{data.author}</p>
    <p>{data.body}</p>
    </Form>
 







</div>


)



};

export default Create;