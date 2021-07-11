import { useEffect, useRef, useState } from "react"
import { reqRes } from "../api/reqRes"
import { ReqResListado, Usuario } from "../interaces/reqRes"

export const useUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([])
    const pagRef = useRef(1)

    useEffect(() => {
        cargarUsuarios()
    }, [])

    

    const cargarUsuarios = async () => {

        const res = await reqRes.get<ReqResListado>('/users', {
            params: {
                page: pagRef.current
            }
        })

        if (res.data.data.length > 0) {
            setUsuarios(res.data.data)
        }else {
            pagRef.current --
            alert('No hay mas registros')
        }
        
    }

    const pagSiguiente = () => {
        pagRef.current ++
        cargarUsuarios()
    }

    const pagAnterior = () => {
        if (pagRef.current > 1) {
            pagRef.current --
            cargarUsuarios()
        }
    }

    return {
        usuarios,
        pagSiguiente,
        pagAnterior
    }
}