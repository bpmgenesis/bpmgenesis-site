module.exports = {
    title: 'bpmgenesis',
    tagline: 'BPM Superapp for Small Bussiness',
    url: 'http://bpmgenesis.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    favicon: 'icon/tuval.ico',
    organizationName: 'tuvalframework',
    projectName: 'RealmOcean',
    themeConfig: {
        zoom: {
            selector: '.markdown img',
            background: {
              light: 'rgb(255, 255, 255)',
              dark: 'rgb(50, 50, 50)'
            },
            config: {
              // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
            }
          },
        docs: {
            sidebar: {
                hideable: true,
            },
        },
        navbar: {
            title: 'Celmino',
            logo: {
                alt: 'Tuval Framework Logo',
                src: 'img/tuval-logo.png',
                // srcDark: 'img/logo white.svg'
            },
            hideOnScroll: true,
            items: [{
                to: '/',
                position: 'left',
                label: 'Home',
            },
            {
                to: '/appstore',
                position: 'left',
                label: 'App Store',
            },
            {
                type: 'docsVersion',
                position: 'left',
                label: 'Documentation',
            },
            /* {
                type: 'docsVersionDropdown',
                position: 'right',
            }, */
            {
                to: 'hireanexpert',
                position: 'right',
                label: 'Hire an expert',
            },
            {
                type: 'localeDropdown',
                position: 'right',
            },

            {
                type: 'doc',
                docId: 'training/tuval-101',
                position: 'left',
                label: 'Tutorials',
                activeSidebarClassName: 'navbar__link--active',
            },

            {
                to: 'blog',
                label: 'Startup diary',
                position: 'left'
            },
            {
                href: 'http://app.celmino.com',
                html: '<b>Log In</b>',
                position: 'right',

                target: '_self',
                'aria-label': 'GitHub repository'
            },
            {
                href: 'http://apps.bpmgenesis.com',
                html: 'Get Started',
                position: 'right',
                className: 'get-started-button',
                target: '_self',
                'aria-label': 'GitHub repository'
            }
                /*   {
                      alt: 'Github repository',
                      href: 'https://github.com/tuvalframework/framework',
                      className: 'header-gitlab-link',
                      position: 'right'
                  }, */
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                title: 'Docs',
                items: [{
                    label: 'Introduction',
                    to: 'docs/',
                }],
            },
            {
                title: 'Community',
                items: [{
                    label: 'Stack Overflow',
                    href: 'https://stackoverflow.com/questions/tagged/tuvalframework',
                },

                ],
            },
            {
                title: 'More',
                items: [{
                    label: 'Github repository',
                    href: 'https://github.com/tuvalframework/framework',
                }],
            },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Tuvalsoft`,
        },
        /*   algolia: {
              appId: '6Q4OIC1WEX',
              apiKey: 'c2f659f7d38e9b697dfa69f1e1dd1407',
              indexName: 'website',
              contextualSearch: true,
          },*/
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: true,
            respectPrefersColorScheme: true,
        },
        /*   prism: {
              additionalLanguages: ['java'],
          }, */
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'tr'],
        localeConfigs: {
            en: {
                label: 'English',
                direction: 'ltr',
            },
            es: {
                label: 'Turkish',
                direction: 'ltr',
            },
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                gtag: {
                    trackingID: 'G-0TB89S1HZ8',
                    anonymizeIP: true,
                },
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://gitlab.com/aweframework/awe/edit/master/website/',
                    includeCurrentVersion: true,
                    showLastUpdateTime: true,
                    showLastUpdateAuthor: true,
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://gitlab.com/aweframework/awe/edit/master/website/',
                    postsPerPage: 3,
                    feedOptions: {
                        type: 'all',
                        language: 'es',
                        copyright: `Copyright © ${new Date().getFullYear()} Almis, Inc.`,
                    },
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
     plugins: [
        require.resolve('docusaurus-plugin-image-zoom')
    ] 
};