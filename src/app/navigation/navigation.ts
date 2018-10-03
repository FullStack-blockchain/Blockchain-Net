import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id   : 'about',
        title: 'ABOUT',
        type : 'item',
        icon : 'about',
        url  : '/home/about'
    },
    {
        id   : 'contact',
        title: 'CONTACT',
        type : 'item',
        icon : 'contact',
        url  : '/home/contact'
    },
    {
        id   : 'whitepaper',
        title: 'WHITEPAPER',
        type : 'item',
        icon : 'whitepaper',
        url  : 'https://github.com/Health-Port/White-Paper',
        externalUrl : true,
        openInNewTab : true
    },
    {
        id   : 'source-code',
        title: 'SOURCE CODE',
        type : 'item',
        icon : 'sourcecode',
        url  : 'https://github.com/Health-Port',
        externalUrl : true,
        openInNewTab : true
    },
    {
        id   : 'blog',
        title: 'BLOG',
        type : 'item',
        icon : 'blog',
        url  : 'https://medium.com/@healthport',
        externalUrl : true,
        openInNewTab : true
    }
];
