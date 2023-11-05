export const UsePricing = () => {
    const infoHeader = {
        title: 'Tarifs',
        description: 'Entreprise enregistrée par l’Etat en tant que prestataire de service à la personne. Elle vous permet de bénéficier d’une réduction ou d’un crédit d’impôt de 50%, dans la limite de 1 500 euros de remboursement par an'
    }


    const pricingData = [
        {
            name: 'Tarifs  intervention',
            id: 'Intervention',
            href: '#',
            description: `avant réduction d'impôts`,
            mostPopular: false,
        },
        {
            name: 'Montants',
            id: 'Montants',
            href: '#',
            description: `avant réduction d'impôts`,
            mostPopular: true,
        },
        {
            name: 'Coût réels',
            id: 'Reel',
            href: '#',
            description: `après réduction d'impôts`,
            mostPopular: false,
        },
    ]

    const sections = [
        {
            name: `Une intervention correspond à 30 minutes`,
            features: [
                { name: 'Formule à la demande', tiers: { Intervention: '44 €', Montants: '44 €', Reel: '22 €' } },
                { name: 'Formule 5 tickets', tiers: { Intervention: '39 €', Montants: '195 €', Reel: '97.5 €' } },
                { name: 'Formule 10 tickets', tiers: { Intervention: '34 €', Montants: '340 €', Reel: '170 €' } },
            ],
        },
    ]

    return {pricingData, infoHeader, sections}
}