import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


export default function Session(props) {
    const { session_id } = props.match.params;
    const history = useHistory()


    const [blocks, setBlocks] = useState([])

    useEffect(() => {
        axios.get(`/api/sessions/${session_id}/blocks`).then(res => {
            setBlocks(res.data)
        })
    }, [])

    let createBlock = async (block_type_id) => {
        await axios
            .post(`/api/sessions/${session_id}/blocks`, { block_type_id })
            .then(res => {
                history.push(`/dashboard/${session_id}/${res.data[0].block_id}/${block_type_id}`)
            })
            .catch(err => console.log(err))
    }

    // let createBreakBlock = async (block_type_id) => {
    //     await axios
    //         .post(`/api/sessions/${session_id}/blocks`, { block_type_id })
    //         .then(res => {
    //             history.push(`/dashboard/${session_id}/${res.data[0].block_id}/${block_type_id}`)
    //         })
    //         .catch(err => console.log(err))
    // }


    let mappedBlocks = blocks.map((e, i) => {
        return (
            <div key={e.block_id}>
                <h1>{i + 1}</h1>
                <h3> block_id:
                    {e.block_id}
                </h3>
                <h5> block_type_id:
                    {e.block_type_id}
                </h5>
            </div>

        )
    })

    return (
        <div className="session">
            <h1>Your Blocks:</h1>
            <div>
                {mappedBlocks}
            </div>
            <div>
                <button onClick={() => createBlock(1)}>Create Work Block</button>
                <button onClick={() => createBlock(2)}> Create Break Block</button>
            </div>
        </div>
    )
}


