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
                <td>
                    <img className={'avatar'}
                         id={'a'}
                         src={arrival.avatar}
                         alt={'avatar_logo'}/>
                </td>
                <td>
                    <strong>
                        {arrival.name}
                    </strong>
                    <div className={'text-gr'}>
                        {arrival.technologies}
                    </div>
                </td>
            </td>
            <td>
                <strong>
                    {arrival.earnings}
                </strong>
                <div className={'text-gr'}>
                    {arrival.eStatus}
                </div>
            </td>
            <td>
                <strong>
                    $ {arrival.commission}
                </strong>
                <div className={'text-gr'}>
                    {arrival.cStatus}
                </div>
            </td>
            <td>
                <strong>
                    {arrival.company}
                </strong>
                <div className={'text-gr'}>
                    {arrival.structure}
                </div>
            </td>
            <td>
                {arrival.rating}
                <div className={'text-gr'}>
                    {arrival.ratingTitle}
                </div>
            </td>
            <td>
                <button type="button"
                        className={'viewButton'}
                        onClick={() => setShow(!show)}>{show ? "View Offer" : "View Offer"}</button>
                {show &&
                    <div className='view'>
                        <button type="button"
                                onClick={() => handleDuplicateClick(arrival._id)}
                                id={'btnDup'}>Duplicate
                        </button>
                        <br/>
                        <button type="button"
                                onClick={() => handleDeleteClick(arrival._id)}
                                id={'btnDel'}>Delete Task
                        </button>
                    </div>
                }
            </td>
        </tr>
    )
}