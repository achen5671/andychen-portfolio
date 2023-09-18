export const getToolImage = (type) => {
    switch (type) {
        case type === 'html':
            return 'https://achen5671.github.io/andychen-portfolio/images/tools/html5.png';
        case type === 'css':
            return 'https://achen5671.github.io/andychen-portfolio/images/admin-portal.png'
        case type === 'js':
            return;
        case type === 'ts':
            return 'https://achen5671.github.io/andychen-portfolio/images/typescript.png'
        case type === 'bootstrap':
            return;
        case type === 'psql':
            return;
        case type === 'node':
            return;
        case type === 'python':
            return;
        case type === 'react':
            return;
        case type === 'android-studio':
            return;        
        case type === 'react-native':
            return;        
        case type === 'jira':
            return;     
        default:
            return '';   
    }
}