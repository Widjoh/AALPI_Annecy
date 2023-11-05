
export const useMainSection = () => {
    const mainSectionData = [
        {
            name: 'Dépannage & assistance',
            description:
                'Dépannage ordinateurs fixes et portables. Installation de matériel. Configuration (remise à neuf, débogage, formatage...). Mise à jour matérielle et/ou logicielle. Conseils d’achat et aide au choix de matériel  ',
           
            imagePath: 'ensemble',
        },
        {
            name: 'Formation',
            description:
                'Microsoft Office (Word,Excel,Power Point...). Windows (explorateur Windows, réseau, configuration générale…). Internet. Emails. gestion des imprimantes. réseaux sociaux. Diagnostique de panne…',
            imagePath: 'conseil',
        },
        {
            name: 'Assistance démarches en ligne',
            description:
                'Litiges opérateurs (Orange, Free, SFR…). Optimisation des forfaits (téléphonie & Internet). Aide aux démarches en ligne. Assurance maladie (ameli.fr). Retraite / assurance vieillesse (lassuranceretraite.fr). Titres sécurisés, pièces d’identité, passeports, cartes grises (ants.gouv.fr). Impôts (impots.gouv.fr).',
            imagePath: 'vieux',
        },
        {
            name: 'Aide personnalisée',
            description:
                'Expliquez vos attentes et vos besoins, nous verrons ensemble de quelle manière je pourrais vous aider.',
            imagePath: 'bug_pc',
        },
    ]


    return {mainSectionData}
}