import React from 'react';
import {useForm} from 'react-hook-form';

const AddUserForm = (props) => {
    const {register,errors, handleSubmit} = useForm();

    const onSubmit = (data,e) =>{
        console.log(data);
        props.addUser(data);
        e.target.reset();
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name" id="" ref={
                register({
                    required: { value: true, message: "LLenar el campo"}
                })
            }/>
            <div>
                {errors?.name?.message}
            </div>
            <label>Name</label>
            <input type="text" name="username" id="" ref={
                register({
                    required: { value: true, message: "LLenar el campo"}
                })
            }/>
            <div>
                {errors?.username?.message}
            </div>
            <button>Agregar Usuario</button>
        </form>
    );
}

export default AddUserForm; 