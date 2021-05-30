import { QuestionType, ResultType } from './components/organisms/Game';

export const Questions: QuestionType[] = [
    {
        title: 'Quel est le grand philosophe qui a dit ça ?',
        content: {
            type: 'text',
            data: "Il est compliqué d'écrire sur les voyages dans le temps",
        },
        hint: 'ses facile',
        time: 5,
    },
    {
        title: `Comment s'appelle ce personnage de Naruto ?`,
        content: {
            type: 'image',
            data: 'https://fr.techtribune.net/wp-content/uploads/2020/10/jujutsu-kaisen-sukuna-domain-expansion-malevolent-shrine-anime-1242150-1280x0.jpeg',
        },
        time: 5,
    },
    {
        title: 'De quel jeu vient cet OST ?',
        content: {
            type: 'music',
            data: `${process.env.PUBLIC_URL}/marisa theme.mp3`,
        },
        time: 15,
    },
    {
        title: "De quel village ce signe est-il l'emblème ?",
        content: {
            type: 'image',
            data: 'https://lh3.googleusercontent.com/proxy/9H5tkyeY49IZAJ2yY-SbP6FrGsqCdJdEV0gwLvNwC3A_4YEcR84ZPpKLGTvzxGP2X7ICaGx2_u4lAFXKCXX-XvnThUVZlO9-0Opfu9SCUXqZBZpF0A',
        },
        time: 10,
    },
    {
        title: 'Quel est le nom complet du 3ème Hokage ?',
        hint: "Oui oui il s'appelle Sarutobi mais le prénom ?",
        time: 10,
    },
    {
        title: "Comment s'appelle le village de Naruto ?",
        choices: ['Konoha', 'Suna', 'York Shin City'],
        time: 10,
    },
];

export const Results: ResultType[] = [
    {
        answer: 'Karim Debbache',
        description:
            "Et oui en effet il est compliqué d'écrire sur les voyages dans le temps !",
        author: 'Samee',
    },
    {
        answer: 'Ryomen Sukuna',
        description: 'Bande de cons',
        author: 'Mayday',
    },
    {
        answer: 'Touhou Spell Bubble',
        description: `C'est le thème de Marisa`,
        author: 'Mayday',
    },
    {
        answer: "Le village de l'herbe",
        description: `Ce pays possède deux ponts, le Pont Kannabi et le Pont Tenchi.`,
        author: 'Mayday',
    },
    {
        answer: 'Haruzen Sarutobi',
        description: `Pas évident`,
        author: 'Mayday',
    },
    {
        answer: 'Konoha',
        description: `Bande de cons`,
        author: 'Mayday',
    },
];
