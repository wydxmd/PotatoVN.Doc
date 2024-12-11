import {Options, generateSidebar} from 'vitepress-sidebar';

const vitepressSidebarOptions: Options[] = [
    {
        scanStartPath : 'usage',
        resolvePath : '/usage/',
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        sortMenusByFrontmatterOrder: true,
    },
    {
        scanStartPath : 'development',
        resolvePath : '/development/',
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        sortMenusByFrontmatterOrder: true,
        collapseDepth: 2,
    },
    {
        scanStartPath : 'upgrade-log',
        resolvePath : '/upgrade-log/',
        useTitleFromFileHeading: true,
        useFolderTitleFromIndexFile: true,
        sortMenusByFrontmatterOrder: true,
    },
];

export default generateSidebar(vitepressSidebarOptions);