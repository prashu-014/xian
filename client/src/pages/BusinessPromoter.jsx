import React from 'react'
import HeadingHelp from '../components/ui/HeadingHelp'
import businessPromotor from '../data/BusinessPromoter'
import Table from '../components/ui/Table'

const BusinessPromoter = () => {
    const businesskeys = Object.keys(businessPromotor[0])
    return (
        <div>
            <HeadingHelp />
            <Table tbody={businessPromotor} thead={businesskeys} />
        </div>
    )
}

export default BusinessPromoter