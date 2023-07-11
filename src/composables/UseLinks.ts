export function useLinks() {
    const links = [
        { name: 'ACCUEIL', path: '/' },
        { name: 'TARIFS', path: '/pricing' },
        { name: 'CONTACT', path: '/contact' },
        { name: 'Admin', path: '/admin' },
    ];

    const adminLinks = [
        { name: 'ACCUEIL', path: '/admin' },
        { name: 'PHOTOS', path: '/admin/images' },
        { name: 'TARIFS', path: '/admin/tarifs' },
        { name: 'CONTACT', path: '/admin/contact' },
    ];

    return {
        links,
        adminLinks
    };
}