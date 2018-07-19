export const header = {
    shapesContainer: '#header-background',
    shapesColorDark: ['#ffffff', '#fffa00', '#ff2167', '#26ff9d', '#ff966d', '#ff00fa', '#00ffd0', '#ff0000'], // when the background is dark
    shapesColorLight: ['#000000', '#3cff5f', '#456d5c', '#0037ff','#19ba03', '#00d4ff', '#6b3470', '#af186e', '#d10202'], // when white
    shapeSize: 40, // n x n in px
    shapeStrokeWidth: 3, // px
    shapesCount: 20,
};
export const switchTimer = 1000;
export const projects = [
    {
        title: 'motus',
        repoName: 'motus',
        description: 'descriereeeee lorem   aa',
        images: ['https://i.imgur.com/e2ZZ8Wa.png', 'https://i.imgur.com/E2WfSVv.png'],
        technologies: {
            frontend: ['typescript', 'parcel'],
            backend: []
        }
    },
    {
        title: 'Rapoarte Drumuri',
        repoName: 'Rapoarte-Drumuri',
        description: 'descriereeeee lorem   aa',
        images: ['https://i.imgur.com/E2WfSVv.png'],
        technologies: {
            frontend: ['javascript', 'react', 'react-native'],
            backend: ['nodejs', 'mongodb', 'express'],
        }
    },
    {
        title: 'Studeo',
        repoName: 'studeo',
        description: 'descriereeeee lorem   aa',
        images: ['https://i.imgur.com/e2ZZ8Wa.png'],
        technologies: {
            frontend: ['javascript', 'vuejs', 'sass','bulma'],
            backend: ['php', 'laravel','mysql'],
        },
        contributors: ['ovidiumihaibelciug']
    },
    // {
    //     name: '40-lines-of-sass'
    // } portfolio, rapoarte drumuri, studeo, extension, motus
];