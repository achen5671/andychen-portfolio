export const getToolImage = (type) => {

    switch (type) {
        case 'html':
            return 'https://achen5671.github.io/andychen-portfolio/images/tools/html5.png';
        case 'css':
            return 'https://achen5671.github.io/andychen-portfolio/images/admin-portal.png'
        case 'js':
            return;
        case 'ts':
            console.log('nice')
            return 'https://achen5671.github.io/andychen-portfolio/images/typescript.png'
        case 'bootstrap':
            return;
        case 'psql':
            return 'https://achen5671.github.io/andychen-portfolio/images/psql.svg';
        case 'node':
            return;
        case 'python':
            return;
        case 'react':
            return;
        case 'android-studio':
            return;        
        case 'react-native':
            return;        
        case 'jira':
            return;     
        default:
            return '';   
    }
}