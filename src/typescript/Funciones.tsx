
export const Funciones = () => {

    const sumar = (dig1: number, dig2: number):number => {
        return dig1 + dig2
    }

    return (
        <>
           <h3>Funciones</h3> 
           <span>El resultado es {sumar(1,1)}</span>
        </>
    )
}
