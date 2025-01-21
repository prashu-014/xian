import React from 'react'
import BusinessPartners from '../data/BusinessPartnerData'
import Table from '../components/ui/Table'
import HeadingHelp from '../components/ui/HeadingHelp'

const BusinessPartner = () => {
    const keys = Object.keys(BusinessPartners[0]);
    return (
        <div>
            <HeadingHelp />
            <Table tbody={BusinessPartners} thead={keys} />
        </div>
    )
}

export default BusinessPartner