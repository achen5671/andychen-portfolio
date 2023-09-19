export const getToolImage = (type) => {
    switch (type) {
        case 'html':
            return 'https://achen5671.github.io/andychen-portfolio/images/tools/html5.png';
        case 'css':
            return 'https://achen5671.github.io/andychen-portfolio/images/admin-portal.png'
        case 'js':
            return 'https://achen5671.github.io/andychen-portfolio/images/javascript.svg';
        case 'ts':
            return 'https://achen5671.github.io/andychen-portfolio/images/typescript.png'
        case 'bootstrap':
            return 'https://achen5671.github.io/andychen-portfolio/images/bootstrap.png';
        case 'psql':
            return 'https://achen5671.github.io/andychen-portfolio/images/psql.svg';
        case 'node':
            return 'https://achen5671.github.io/andychen-portfolio/images/node.svg';
        case 'python':
            return 'https://achen5671.github.io/andychen-portfolio/images/python.png';
        case 'react':
            return 'https://achen5671.github.io/andychen-portfolio/images/react.png';
        case 'android-studio':
            return 'https://achen5671.github.io/andychen-portfolio/images/android-studio.png';        
        case 'react-native':
            return 'https://achen5671.github.io/andychen-portfolio/images/react.png';        
        case 'jira':
            return 'https://achen5671.github.io/andychen-portfolio/images/jira.png';
        default:
            return '';   
    }
}