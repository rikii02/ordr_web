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
            const response = await api.get("/api/v1/oplaces");
            console.log(response.data);
            setOplaces(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    const addOplace = async (name, otag, description) => {
        try {
            await api.post("/api/v1/oplaces", { name, otag, description });
            const response = await api.get("/api/v1/oplaces");
            setOplaces(response.data);
        } catch (err) {
            console.log(err);
        }
    };
      
    const deleteOplace = async (id) => {
        try {
          await api.delete(`/api/v1/oplaces/${id}`);
          setOplaces(oplaces.filter((oplace) => oplace.id !== id));
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
      
      const editService = async (name, otag, description, id) => {
        try {
          const updatedOplaces = oplaces.map((oplace) =>
            oplace.id === id ? { ...oplace, name, otag, description, isEditing: !oplace.isEditing } : oplace
          );
          setOplaces(updatedOplaces);
          await api.put(`/api/v1/oplaces/${id}`, { name, otag, description });
        } catch (err) {
          console.log(err);
        }
    };

    useEffect(() => {
        getOplaces();
    },[])

    return (
      <div className='wrapper-container'>
        <div className='OplaceWrapper'>
            <h1>Add your Oplace</h1>
            <OplaceForm addOplace={addOplace}/>
          
            {oplaces.map(oplace => (
                oplace.isEditing ? (
                    <EditOplaceForm editOplace={editService} service={oplace}/>
                ) : (
                    <Oplace service={oplace} key={oplace.id} 
                    deleteOplace={deleteOplace} editOplace={editOplace}/>
                )
            ))}
        </div>
        </div>
    )
}
export default OplaceWrapper;