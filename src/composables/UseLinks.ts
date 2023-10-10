export function useLinks() {
    const links = [
        {name: 'ACCUEIL', href: '/', current: true},
        {name: 'TARIFS', href: '/pricing', current: false},
        {name: 'CONTACT', href: '/contact', current: false},
    ];


    return {
        links,

    };
}