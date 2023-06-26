export function useLinks() {
    const links = [
        { name: 'ACCUEIL', path: '/' },
        { name: 'TARIFS', path: '/pricing' },
        { name: 'CONTACT', path: '/contact' },
        { name: 'Admin', path: '/admin' },
    ];

    return {
        links,
    };
}