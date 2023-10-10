import {ref} from "vue";

export function useLinks() {
    const links = [
        {name: 'ACCUEIL', href: '/'},
        {name: 'TARIFS', href: '/pricing'},
        {name: 'CONTACT', href: '/contact'},
    ];

    return {
        links,
    };
}