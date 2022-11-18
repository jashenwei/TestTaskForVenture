import React, {useState} from 'react';
import './../App.css'

export type ArrivalsType = {
    id?: number
    avatar: string
    name: string
    technologies: string
    earnings: string
    eStatus: string
    commission: string
    cStatus: string
    company: string
    structure: string
    rating: string
    ratingTitle: string
    handleDeleteClick: (arrivalId: number) => void

}
type TypeProps = {
    arrivals: Array<ArrivalsType>

}

// @ts-ignore
export const Arrivals = ({arrival, handleDeleteClick, handleDuplicateClick}) => {

    const [show, setShow] = useState(false)

    return (
        <tr>
            <td className={'people'}>
                <td><img className={'avatar'} id={'a'} src={arrival.avatar} alt={'avatar_logo'}/></td>
                <td><strong>{arrival.name}</strong><br/>
                    {arrival.technologies}</td>
            </td>
            <td>
                <strong>{arrival.earnings}</strong><br/>
                {arrival.eStatus}<br/>
            </td>
            <td>
                <strong>$ {arrival.commission}</strong><br/>
                {arrival.cStatus}<br/>
            </td>
            <td>
                <strong>{arrival.company}</strong><br/>
                {arrival.structure}<br/>
            </td>
            <td>
                {arrival.rating}<br/>
                {arrival.ratingTitle}<br/>
            </td>
            <td>
                <button type="button" className={'viewButton'}
                        onClick={() => setShow(!show)}>{show ? "View Offer" : "View Offer"}</button>
                {show &&
                    <div className='view'>
                        <button type="button" onClick={() => handleDuplicateClick(arrival._id)} id={'btnDup'}>Duplicate</button>
                        <br/>
                        <button type="button" onClick={() => handleDeleteClick(arrival._id)} id={'btnDel'}>Delete Task</button>
                    </div>
                }
            </td>
        </tr>
    )
}