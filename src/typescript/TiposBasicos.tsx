

export const TiposBasicos = () => {

    const nombre: string = 'Fernando';
    const edad: number = 35;
    const estaActivo: boolean = false;
    const poderes : string[] = []; //'1','2','3','4'

    return (
        <div>
            <h3>Tipos Básicos</h3>
            {nombre}, {edad}, {(estaActivo) ? 'Activo' : 'Inactivo'}
            <br />
            {poderes.join(', ')}
        </div>
    )
}

