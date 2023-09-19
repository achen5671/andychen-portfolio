export const getToolImage = (type) => {
    switch (type) {
        case 'html':
            return 'https://achen5671.github.io/andychen-portfolio/images/tools/html.png';
        case 'css':
            return 'https://achen5671.github.io/andychen-portfolio/images/tools/css.png'
        case 'js':
            return 'https://achen5671.github.io/andychen-portfolio/images/tools/javascript.svg';
        case 'ts':
            return 'https://achen5671.github.io/andychen-portfolio/images/tools/typescript.png'
        case 'bootstrap':
            return 'https://achen5671.github.io/andychen-portfolio/images/tools/bootstrap.png';
        case 'psql':
            return 'https://achen5671.github.io/andychen-portfolio/images/tools/psql.svg';
        case 'node':
            return 'https://achen5671.github.io/andychen-portfolio/images/tools/node.svg';
        case 'python':
            return 'https://achen5671.github.io/andychen-portfolio/images/tools/python.png';
        case 'react':
            return 'https://achen5671.github.io/andychen-portfolio/images/tools/react.png';
        case 'android-studio':
            return 'https://achen5671.github.io/andychen-portfolio/images/tools/android-studio.png';        
        case 'react-native':
            return 'https://achen5671.github.io/andychen-portfolio/images/tools/react.png';        
        case 'jira':
            return 'https://achen5671.github.io/andychen-portfolio/images/tools/jira.png';
        default:
            return '';   
    }
}
