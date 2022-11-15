import React from 'react';
import {Products} from './Products';


type EarningsType = {
    earning: ArrivalsType["earnings"]
    status: ArrivalsType["eStatus"]
}
type CommissionType = {
    commission: ArrivalsType["commission"]
    status: ArrivalsType["cStatus"]
}
type CompanyType = {
    companyTitle: ArrivalsType["company"]
    structure: ArrivalsType["structure"]
}
type RatingType = {
    estimation: ArrivalsType["rating"]
    title: ArrivalsType["ratingTitle"]
}

export type ArrivalsType = {
    id: number
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
}


const Message = (props: MessageTypeProps) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

export const Arrivals = (props: ArrivalsType[]) => {

    let arrivals: ArrivalsType[] =
        [
            {
                id: 1,
                avatar: '$',
                name: 'Brad Simmons',
                technologies: 'HTML, JS, React JS',
                earnings: '$8 000 000',
                eStatus: 'In Proccess',
                commission: '$520',
                cStatus: 'Paid',
                company: 'Interico',
                structure: 'Web, UI/UX Design',
                rating: '5',
                ratingTitle: 'Best Rated'
            },
            {
                id: 2,
                avatar: '$',
                name: 'Jessie Clarcson',
                technologies: 'C#, ASP.NET',
                earnings: '$23 000 000',
                eStatus: 'Pending',
                commission: '$1600',
                cStatus: 'Rejected',
                company: 'Agoda',
                structure: 'Houses & Hotels',
                rating: '5',
                ratingTitle: 'Best Rated'
            },
            {
                id: 3,
                avatar: '$',
                name: 'Lebron Wayde',
                technologies: 'PHP, Laravel,VueJS',
                earnings: '$34 000 000',
                eStatus: 'Paid',
                commission: '$6700',
                cStatus: 'Paid',
                company: 'RoadGee',
                structure: 'Transportation',
                rating: '5',
                ratingTitle: 'Best Rated'
            },
            {
                id: 4,
                avatar: '$',
                name: 'Natali Trump',
                technologies: 'Python, PostgreSQL, ReactJs',
                earnings: '$2 600 000',
                eStatus: 'Paid',
                commission: '$14000',
                cStatus: 'Pending',
                company: 'The Hill',
                structure: 'Insurance',
                rating: '4,5',
                ratingTitle: 'Avarage'
            },
        ]

    return (
        <div>
            <table>
                <Products />
            </table>
        </div>
    );
};