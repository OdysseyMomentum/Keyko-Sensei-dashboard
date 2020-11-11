import { BaseRouter } from '@react-navigation/native';
import React from 'react';
import { Button, Text, View, Image } from 'react-native';
import { useForm } from 'react-hook-form'


//Get this data calling on chain or to the metadata-api
interface Props {
  route: any,
  navigation: any
}
type Inputs = {
    example: string,
    exampleRequired: string,
  };



export function Register() {
    const { register, handleSubmit, errors } = useForm<Inputs>()
    const onSubmit = (data:any) => console.log(data)

    return (
    <View style={{ flex: 1,  alignItems: 'center', justifyContent: 'center' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="example" defaultValue="test" ref={register} />
            <br/>    
            <input name="exampleRequired" ref={register({ required: true })} />
            <br/>    
            {errors.exampleRequired && <span>This field is required</span>}
            <br/>    
            <input type="submit" />

        </form>
    </View>
    );
    
}