import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id   : 'about',
        title: 'ABOUT',
        type : 'item',
        icon : 'camera_front',
        url  : '/home/about'
    },
    {
        id   : 'contact',
        title: 'CONTACT',
        type : 'item',
        icon : 'card_travel',
        url  : '/home/contact'
    },
    {
        id   : 'whitepaper',
        title: 'WHITEPAPER',
        type : 'item',
        icon : 'credit_card',
        url  : '/whitepaper'
    },
    {
        id   : 'source-code',
        title: 'SOURCE CODE',
        type : 'item',
        icon : 'desktop_mac',
        url  : '/myaccount'
    },
    {
        id   : 'blog',
        title: 'BLOG',
        type : 'item',
        icon : 'child_care',
        url  : '/blog'
    }
];
