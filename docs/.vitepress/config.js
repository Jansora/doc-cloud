
function install() {
    return [
        {
            text: '安装 kubernetes', collapsed: false, items: [
                { text: '基础知识', link: '/install' },
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
    title: '深入浅出 kubernetes ',
    titleTemplate: 'Jansora 的知识专栏',
    description: 'Just playing around.',
    cleanUrls: false,
    lang: 'zh-CN',
    lastUpdated: true,
    themeConfig: {
        nav: [
            { text: '安装配置', link: '/install' },
            { text: '查询', link: '/query' },
            { text: '运维', link: '/devops' },
        ],
        sidebar: {
            '/install/': install(),
            '/query/': query(),
            '/devops/': devops(),
        },
        editLink: {
            pattern: 'https://github.com/Jansora/doc-cloud/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        footer: {
            message: "知识专栏 @ Jansora",
            copyright: 'Copyright © 2019-present Jansora'
        }
    }
}