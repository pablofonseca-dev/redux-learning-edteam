import { ADD_TO_CAR, REMOVE_FROM_CAR } from "./actions"
//Declarar las acciones que suceden en mi proyecto
//Acciones son objetos que encapsulan tanto el tipo de accion que se va a realizar como la data que se va a mandar. 

const addToCar = (id) => ({
    type: ADD_TO_CAR,
    id
})

const removeFromCar = (id) => ({
    type: REMOVE_FROM_CAR, 
    id
})

//En este archivo se meten todas las funciones.
export {
    addToCar, 
    removeFromCar
}