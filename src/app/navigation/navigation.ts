import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id   : 'about',
        title: 'ABOUT',
        type : 'item',
        icon : 'camera_front',
        url  : '/about'
    },
    {
        id   : 'contact',
        title: 'CONTACT',
        type : 'item',
        icon : 'card_travel',
        url  : '/signup'
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
        url  : '/source-code'
    },
    {
        id   : 'blog',
        title: 'BLOG',
        type : 'item',
        icon : 'child_care',
        url  : '/blog'
    }
];
