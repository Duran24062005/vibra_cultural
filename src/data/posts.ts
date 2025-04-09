interface Post {
    id: number;
    image: string;
    title: string;
    text: string;
    creador: string;
    created_at: string;
}

const posts: Post[] = [
    {
        id: 1,
        image: 'https://via.placeholder.com/300',
        title: 'Post 1',
        text: 'Texto del post 1...',
        creador: 'Juan Graza',
        created_at: '08/04/2024',
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/300',
        title: 'Post 2',
        text: 'Texto del post 2...',
        creador: 'María López',
        created_at: '15/04/2024',
    },
    {
        id: 3,
        image: 'https://via.placeholder.com/300',
        title: 'Post 3',
        text: 'Texto del post 3...',
        creador: 'Carlos Pérez',
        created_at: '22/04/2024',
    },
    {
        id: 4,
        image: 'https://via.placeholder.com/300',
        title: 'Post 4',
        text: 'Texto del post 4...',
        creador: 'Ana Torres',
        created_at: '29/04/2024',
    },
    {
        id: 5,
        image: 'https://via.placeholder.com/300',
        title: 'Post 5',
        text: 'Texto del post 5...',
        creador: 'Luis Fernández',
        created_at: '06/05/2024',
    },
    {
        id: 6,
        image: 'https://via.placeholder.com/300',
        title: 'Post 6',
        text: 'Texto del post 6...',
        creador: 'Sofía Martínez',
        created_at: '13/05/2024',
    },
    {
        id: 7,
        image: 'https://via.placeholder.com/300',
        title: 'Post 7',
        text: 'Texto del post 7...',
        creador: 'Pedro Sánchez',
        created_at: '20/05/2024',
    },
    {
        id: 8,
        image: 'https://via.placeholder.com/300',
        title: 'Post 8',
        text: 'Texto del post 8...',
        creador: 'Lucía Gómez',
        created_at: '27/05/2024',
    },
    {
        id: 9,
        image: 'https://via.placeholder.com/300',
        title: 'Post 9',
        text: 'Texto del post 9...',
        creador: 'Miguel Ramírez',
        created_at: '03/06/2024',
    },
    {
        id: 10,
        image: 'https://via.placeholder.com/300',
        title: 'Post 10',
        text: 'Texto del post 10...',
        creador: 'Elena Ruiz',
        created_at: '10/06/2024',
    },
    // Resto de los posts...
];

export default posts;