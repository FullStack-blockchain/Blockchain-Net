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
        url  : '/whitepaper'
    },
    {
        id   : 'source-code',
        title: 'SOURCE CODE',
        type : 'item',
        icon : 'sourcecode',
        url  : '/myaccount'
    },
    {
        id   : 'blog',
        title: 'BLOG',
        type : 'item',
        icon : 'blog',
        url  : '/blog'
    }
];
