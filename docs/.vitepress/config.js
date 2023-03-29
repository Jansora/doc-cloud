
function install() {
    return [
        {
            text: '安装 kubernetes', collapsed: false, items: [
                { text: '', link: '/install' },
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
                { text: 'k8s deployment 命令行调整镜像版本', link: '/devops/modify-deployment-from-command-line' },




            ]
        }
    ]
}

export default {
    title: '云原生成长记',
    titleTemplate: 'Jansora 的知识专栏',
    description: 'Just playing around.',
    cleanUrls: false,
    lang: 'zh-CN',
    lastUpdated: true,
    themeConfig: {
        nav: [
            { text: '安装配置', link: '/install' },
            { text: '查询', link: '/query' },
            { text: '运维', link: '/devops/modify-deployment-from-command-line' },
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