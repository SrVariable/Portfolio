export const PROJECTS = [
    {
        name: 'Mongo exporter - Exportador de métricas para MongoDB',
        description: 'Exportador de métricas para MongoDB. Recolecta métricas de una base de datos y los expone en un formato compatible con Prometheus y que posteriormente es mostrado en Grafana. Desarrollado en Go como parte de mis prácticas en iAR Soft.',
        technologies: [
            'Go',
            'Docker',
            'Prometheus',
            'Grafana',
            'MongoDB',
        ],
        image: '/images/mongo-exporter.webp',
        source: 'https://github.com/SrVariable/mongo-exporter',
    },
    {
        name: 'Cub3D - Juego en 2.5D',
        description: 'Un juego 2.5D parecido a DOOM. Desarrollado en C desde cero aplicando técnicas de raycasting y utilizando MLX42 para renderizar los gráficos. Forma parte del currículum de la escuela 42',
        technologies: [
            'C',
            'MLX42',
            'Makefile',
        ],
        image: '/images/cub3d.webp',
        source: 'https://github.com/ribana-b/cub3d',
    },
    {
        name: 'DynSoul - Página web de almacenes',
        description: 'Una página web para mi empresa ficticia de almacenes. Desarrollado utilizando Astro + TailwindCSS como parte de un proyecto de Digitalización en el Grado Superior de Desarrollo de Aplicaciones Web',
        technologies: [
            'Astro',
            'TailwindCSS',
        ],
        image: '/images/dynsoul.webp',
        source: 'https://github.com/SrVariable/DynSoul',
        url: 'https://dynsoul.vercel.app/',
    },
    {
        name: 'PascuiBOT - Bot de Discord para uso personal',
        description: 'Una bot de Discord para uso personal. Inicialmente desarrollado en Python y posteriormente migrado a Go',
        technologies: [
            'Go',
            'Docker',
            'MariaDB',
        ],
        image: '/images/pascuibot.webp',
    },
]
