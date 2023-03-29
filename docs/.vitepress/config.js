
function basic() {
    return [
        {
            text: '基础知识', collapsed: false, items: [
                { text: '基础知识', link: '/basic' },
            ]
        }
    ]
}

function query() {
    return [
        {
            text: '查询', collapsed: false, items: [
                { text: '查询', link: '/query/' },
            ]
        }
    ]
}
function devops() {
    return [
        {
            text: '运维', collapsed: false, items: [
                { text: '运维', link: '/devops' },
            ]
        }
    ]
}

export default {
    title: 'Doc Template',
    titleTemplate: 'Jansora\'s knowledge base',
    description: 'Just playing around.',
    cleanUrls: false,
    lang: 'zh-CN',
    lastUpdated: true,
    themeConfig: {
        nav: [
            { text: '基础', link: '/basic' },
            { text: '查询', link: '/query' },
            { text: '运维', link: '/devops' },
        ],
        sidebar: {
            '/basic/': basic(),
            '/query/': query(),
            '/devops/': devops(),
        },
        editLink: {
            pattern: 'https://github.com/Jansora/doc-template/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        footer: {
            message: "知识专栏 @ Jansora",
            copyright: 'Copyright © 2019-present Jansora'
        }
    }
}