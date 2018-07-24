export const header = {
    shapesContainer: '#header-background',
    shapesColorDark: ['#ffffff', '#fffa00', '#ff2167', '#26ff9d', '#ff966d', '#ff00fa', '#00ffd0', '#ff0000'], // when the background is dark
    shapesColorLight: ['#000000', '#3cff5f', '#456d5c', '#0037ff','#19ba03', '#00d4ff', '#6b3470', '#af186e', '#d10202'], // when white
    shapeSize: 40, // n x n in px
    shapeStrokeWidth: 3, // px
    shapesCount: 20,
};
export const switchTimer = 3500;
export const projects = [
    {
        title: 'Portfolio',
        repoName: 'alexcambose.github.io',
        description: 'My website',
        images: ['https://i.imgur.com/muEHJg1.png'],
        technologies: {
            frontend: ['html', 'sass', 'javascript', 'webpack', 'handlebars'],
            backend: []
        }
    },
    {
        title: 'motus',
        repoName: 'motus',
        description: 'Animation library that mimics CSS keyframes when scrolling',
        images: ['https://i.imgur.com/urs3fwK.png', 'https://i.imgur.com/GjcS3Mo.png'],
        technologies: {
            frontend: ['typescript', 'parcel'],
            backend: []
        }
    },
    {
        title: 'Rapoarte Drumuri',
        repoName: 'Rapoarte-Drumuri',
        description: '\n' +
        'Rapoarte Drumuri (Roads Reports) is meant to help drivers who are tired of unexpected events on Romanian roads. With this app anyone can report a closed, broken, in repair or dangerous road so that other drivers are aware of the problem. ',
        images: ['https://i.imgur.com/enOqOI3.png', 'https://i.imgur.com/gvgRCPR.png'],
        technologies: {
            frontend: ['javascript', 'react', 'react-native', 'flux'],
            backend: ['nodejs', 'jwt', 'mongodb'],
        }
    },
    {
        title: 'Studeo',
        repoName: 'studeo',
        description: 'An e-learning platform to help students learn faster and easier for exams.',
        images: [
            'https://i.imgur.com/nP1zd4q.jpg',
            'https://i.imgur.com/xUEtPNj.png',
            'https://i.imgur.com/8sER8ot.png',
            'https://i.imgur.com/ZZpPEVV.png',
            'https://i.imgur.com/8pTQq5n.png',
            'https://i.imgur.com/hXhG0co.png',
            'https://i.imgur.com/i9TDvuP.jpg',
            'https://i.imgur.com/wbQ5SFL.png',
            'https://i.imgur.com/WB1CWb0.png',
            'https://i.imgur.com/d1wcZf3.png',
            'https://i.imgur.com/YQ7yUrF.png',
            'https://i.imgur.com/yZbpPdj.png',
            'https://i.imgur.com/mIXAOfN.png',
            'https://i.imgur.com/U6QbWeo.png',
            'https://i.imgur.com/9Kief4u.jpg',
            'https://i.imgur.com/DzgiMgK.jpg',
            'https://i.imgur.com/rfQF843.png',
            'https://i.imgur.com/PsGAMYf.png',
            'https://i.imgur.com/1XzCLvZ.png',
        ],
        technologies: {
            frontend: ['html', 'sass', 'javascript', 'vuejs','bulma'],
            backend: ['php', 'laravel','mysql'],
        },
        contributors: [['Belciug Ovidiu-Mihai', 'ovidiumihaibelciug']],
    },
    // {
    //     name: '40-lines-of-sass'
    // } portfolio, rapoarte drumuri, studeo, extension, motus
];