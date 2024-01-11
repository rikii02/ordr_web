import React, {useState, useEffect} from 'react'
import { Oplace } from "./Oplace";
import { OplaceForm } from './OplaceForm'
import { v4 as uuidv4 } from 'uuid';
import { EditOplaceForm } from './EditOplaceForm';
import api from '../api/axiosConfig';
uuidv4();

export const OplaceWrapper = () => {
    
    const [oplaces, setOplaces] = useState([]);

    const getOplaces= async () => {
        try {
            const response = await api.get("/api/v1/oplace");
            console.log(response.data);
            setTodos(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const addOplace = async (name, otag, description) => {
        try {
            await api.post("/api/v1/oplace", { name, otag, description });
            const response = await api.get("/api/v1/oplace");
            setOplaces(response.data);
        } catch (err) {
            console.log(err);
        }
    };
    const deleteOplace = async (id) => {
        try {
          await api.delete(`/api/v1/oplace/${id}`);
          setTodos(oplaces.filter((oplace) => oplace.id !== id));
        } catch (err) {
          console.log(err);
        }
    };

    const editOplace = async (id) => {
        try {
          const updatedOplaces = oplaces.map((oplace) =>
            oplace.id === id ? { ...oplace, isEditing: !oplace.isEditing } : oplace
          );
          setOplaces(updatedOplaces);
        } catch (err) {
          console.log(err);
        }
    };
      
      const editTask = async (name, otag, description, id) => {
        try {
          const updatedOplaces = oplaces.map((oplace) =>
            oplace.id === id ? { ...todo, name, otag, description, isEditing: !oplace.isEditing } : oplace
          );
          setOplaces(updatedOplaces);
          await api.put(`/api/v1/oplace/${id}`, { name, otag, description });
        } catch (err) {
          console.log(err);
        }
    };
    useEffect(() => {
        getOplaces();
    },[])

    return (
        <div className='OplaceWrapper'>
            <h1>Get things done!</h1>
            <OplaceForm addOplace={addOplace}/>
            
            <h2>Oplaces</h2>
            {oplaces.map(todo => (
                oplace.isEditing ? (
                    <EditOplaceForm editOplace={editTask} task={oplace}/>
                ) : (
                    <Oplace task={todo} key={todo.id} 
                    deleteTodo={deleteTodo} editTodo={editTodo}/>
                )
            ))}
        </div>
    )
}