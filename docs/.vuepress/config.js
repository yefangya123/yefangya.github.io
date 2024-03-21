module.exports = {
    title: 'STUDY SPACE',
    description: '',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.jpg' }]
    ],
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        type: 'blog',
        logo: '/img/logo.jpg', // 左上角logo
        authorAvatar: '/img/logo.jpg',
        nav: require('./nav.js'),
        sidebar: 'auto', // 侧边栏配置
        sidebarDepth: 2, // 侧边栏显示2级
        // 博客配置
        blogConfig: {
            category: {
                location: 1, // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认文案 “分类”
            },
            tag: {
                location: 2, // 在导航栏菜单中所占的位置，默认3
                text: '标签' // 默认文案 “标签”
            },
            // socialLinks: [ // 信息栏展示社交信息
            //     { icon: 'reco-github', link: 'xxxxx' },
            //     { icon: 'reco-npm', link: 'xxxxx' }
            // ]
        }
    },
    serviceWorker: true,
    theme: 'reco',
    plugins: {
        "vuepress-plugin-cursor-effects": {
            size: 2, // size of the particle, default: 2
            shape: 'circle', // shape of the particle, default: 'star'
            zIndex: 999999999 // z-index property of the canvas, default: 999999999
        },
        'vuepress-plugin-helper-live2d': {
            // 是否开启控制台日志打印(default: false)
            log: true,
            live2d: {
                // 是否启用(关闭请设置为false)(default: true)
                enable: true,
                // 模型名称(default: hibiki)
                // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
                model: 'hibiki',
                display: {
                    vOffset: -55, //  垂直偏移(default: 0)
                },
                mobile: {
                    show: false // 是否在移动设备上显示(default: false)
                },
                react: {
                    opacity: 0.8 // 模型透明度(default: 0.8)
                }
            }
        },
        //音乐播放器
        '@vuepress-reco/vuepress-plugin-bgm-player': {
            audios: [{
                    name: '生活在别处的你',
                    url: '/bgm/生活在别处的你.mp3',
                    artist: '毛不易',
                    cover: '/img/02.jpg'
                },
                {
                    name: '这世界那么多人',
                    url: '/bgm/这世界那么多人.mp3',
                    artist: '莫文蔚',
                    cover: '/img/01.jpg'
                }
            ],
            position: {
                left: '10px',
                bottom: '10px',
                'z-index': '999999'
            },
            autoShrink: true,
            floatPosition: 'left',
            floatStyle: {
                bottom: '80px',
                'z-index': '999999'
            }
        }
    }
};