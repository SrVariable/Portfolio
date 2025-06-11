export const PROJECTS = [
    {
        name: 'Mongo exporter - A simple metric exporter',
        description: 'Metric exporter for a MongoDB database. It collects metrics from a database and exposes them in a format that can be scraped by Prometheus and displayed in Grafana. Developed in Go as part of my intership in iAR Soft.',
        technologies: [
            'Go',
            'Docker',
            'Prometheus',
            'Git',
            'Grafana',
            'MongoDB',
        ],
        image: '/images/mongo-exporter.webp',
        source: 'https://github.com/SrVariable/mongo-exporter',
    },
    {
        name: 'Cub3D - A simple 2.5D game like DOOM',
        description: 'Simple 2.5D game like DOOM. Using raycasting techniques. Developed in C from scratch using MLX42 (graphic library) as part of the 42 School curriculum.',
        technologies: [
            'C',
            'MLX42',
            'Git',
            'Makefile',
        ],
        image: '/images/cub3d.webp',
        source: 'https://github.com/ribana-b/cub3d',
    },
    {
        name: 'DynSoul - A web page for my fictional company',
        description: 'Web page for my fictional company. Developed using Astro and TailwindCSS as part of my Web Development Higher Technical Degree.',
        technologies: [
            'Astro',
            'TailwindCSS',
            'Git',
        ],
        image: '/images/dynsoul.webp',
        source: 'https://github.com/SrVariable/DynSoul',
        url: 'https://dynsoul.vercel.app/',
    },
    {
        name: 'PascuiBOT - A Discord bot for personal use',
        description: 'Discord bot for personal use. Initially developed in Python, then migrated to Go.',
        technologies: [
            'Go',
            'Docker',
            'Git',
        ],
        image: '/images/pascuibot.webp',
    },
]
