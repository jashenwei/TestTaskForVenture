type ProductsType = {
    name: string
    technologies: string
}
type EarningsType = {
    money: string
    status: string
}
type CommissionType = {
    money: string
    status: string
}
type CompanyType = {
    name: string
    structure: string
}
type RatingType = {
    estimation: string
    title: string
}

export type ArrivalsType = {
    products: ProductsType
    earnings: EarningsType
    commission: CommissionType
    company: CompanyType
    rating: RatingType
}
/*,
            {name: 'Jessie Clarcson', technologies: 'C#, ASP.NET, MS SQL'},
            {name: 'Lebron Wayde', technologies: 'PHP, Laravel,VueJS'},
            {name: 'Natali Trump', technologies: 'Python, PostgreSQL, ReactJs'},*/