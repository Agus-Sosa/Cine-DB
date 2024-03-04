export const movies = [
  // {
  //   id: 1,
  //   title: "Oppenheimer",
  //   director: "Director 1",
  //   year: 2022,
  //   genre: "Suspenso",
  //   synopsis: "Una película emocionante que narra...",
  //   duration: 120,
  //   rating: 8.5,
  //   actors: ["Actor 1", "Actor 2", "Actor 3"],
  //   trailerLink: "https://www.youtube.com/watch?v=XXXXXXXXX",
  //   image: "https://artofthemovies.co.uk/cdn/shop/files/IMG_0932_ee270402-73bd-4bbe-8770-224a1d9d7151.jpg?v=1693771441",
  //   backgroundImage: "https://th-thumbnailer.cdn-si-edu.com/f9626cwd5YfEjaYenWHvV-AbS8A=/fit-in/1072x0/filters:focal(950x498:951x499)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/82/5f/825fe3f9-d0c6-4fd6-835d-b68ed644dcb3/oppenheimer-still2-62e2a85a448bb-1.jpeg"
  // },
  {
    id: 2,
    title: "John Wick: Chapter 4",
    director: "Director 2",
    year: 2023,
    genre: ["Aventura", "Accion"],
    synopsis: "John Wick descubre un camino para derrotar a La Alta Mesa. Pero antes de que pueda ganar su libertad, Wick debe enfrentarse a un nuevo enemigo con poderosas alianzas en todo el mundo y fuerzas que convierten a viejos amigos en enemigos.",
    duration: 169 ,
    rating: 6.8,
    actors: [
      {name:"Keanu Reeves", image: "https://www.diarioelnorte.com.ar/wp-content/uploads/2023/02/MV5BNGJmMWEzOGQtMWZkNS00MGNiLTk5NGEtYzg1YzAyZTgzZTZmXkEyXkFqcGdeQXVyMTE1MTYxNDAw._V1_.jpg" },
      {name: "Donnie Yen", image:"https://m.media-amazon.com/images/M/MV5BZGU0ZjFjZGMtZGU4My00ZmRmLTk2Y2EtOWNlZjhhZmE2MjIwXkEyXkFqcGdeQXVyMTA2MDIzMDE5._V1_.jpg" },
      {name: "Bill Skarsgård", image:"https://images.mubicdn.net/images/cast_member/67837/cache-211503-1490770733/image-w856.jpg?size=800x"},
      {name: "Natalia Tena", image: "https://images.mubicdn.net/images/cast_member/57751/cache-602339-1603763364/image-w856.jpg?size=800x"}
    ],
    gallery: [
      {url: "https://images.squarespace-cdn.com/content/v1/5d6c08092a5c4f0001efa7ef/1679858793390-9RCQ3CLP27NZGRTGRN86/image.jpeg?format=1500w"},
      {url: "https://www.otroscines.com/images/fotos/john-wick-4-critica-1000.jpg"},
      {url: "https://media.cntraveler.com/photos/6418ccbb2ddecc09fa462353/master/pass/John%20Wick%204_JW4_Unit_211109_01128_R.jpg"},
      {url: "https://media.gq.com/photos/636d5a5e81d8a404117fe04d/3:2/w_3000,h_1999,c_limit/MCDJOWI_LG001.jpeg"},
      {url: "https://cdn.sortiraparis.com/images/80/98390/855094-john-wick-4-les-photos-du-tournage-a-paris.jpg"},
      {url: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F02%2Fjohn-wick-chapter-4-keanu-reeves-new-still-images-revealed-003.jpg?cbr=1&q=90"},

    ],
    trailerLink: "https://www.youtube.com/embed/qEVUtrk8_B4?si=pBQbNqkp82W6ypyU",
    image: "https://w0.peakpx.com/wallpaper/324/121/HD-wallpaper-new-2023-movie-john-wick-4-poster-movie.jpg",
    backgroundImage: "https://images.alphacoders.com/125/1259920.jpg"
  },
  {
    id: 3,
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    genre: ["Accion", "Suspenso"],
    synopsis: "When the Joker wreaks havoc on Gotham, Batman must confront his greatest adversary.",
    duration: 152,
    rating: 9.0,
    actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
    trailerLink: "https://www.youtube.com/watch?v=EXeTwQWrcwY",
    image: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/57618417a0ddf3b7aa29db658bef2fc3b9608bb11a021631d3b6408441c1e0f7._RI_TTW_.jpg",
    backgroundImage: "https://img-assets.drafthouse.com/images/shows/the-dark-knight/THE-DARK-KNIGHT_hero.jpg?ixlib=js-2.3.2&ar=16%3A9"
  },
  {
    id: 4,
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    genre: "Drama",
    synopsis: "The life story of a man with a low IQ who witnesses and unwittingly influences several defining historical events.",
    duration: 142,
    rating: 8.8,
    actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    trailerLink: "https://www.youtube.com/watch?v=bLvqoHBptjg",
    image: "https://m.media-amazon.com/images/M/MV5BZTY4NjcxNDctZmVjMC00NzM0LWIxYTctNjdhNzdlN2VkNjNiXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg",
    backgroundImage: "https://www.aarp.org/content/dam/aarp/entertainment/movies-for-grownups/2020/05/1140-forrest-gump.jpg"
  },
  {
    id: 5,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    genre: ["Accion"],
    synopsis: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
    duration: 175,
    rating: 9.2,
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    trailerLink: "https://www.youtube.com/watch?v=sY1S34973zA",
    image: "https://www.wonderwall.com/wp-content/uploads/sites/2/2022/03/shutterstock_editorial_4421089a.jpg?h=800",
    backgroundImage: "https://digwallpapers.com/wallpapers/full/0/6/f/85086-3840x2160-the-godfather-background-photo-desktop-4k.jpg"

  },
  {
    id: 6,
    title: "Inglourious Basterds",
    director: "Quentin Tarantino",
    year: 2009,
    genre: "Accion",
    synopsis: "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers is set in motion.",
    duration: 153,
    rating: 8.3,
    actors: ["Brad Pitt", "Diane Kruger", "Christoph Waltz"],
    trailerLink: "https://www.youtube.com/watch?v=KnrRy6kSFF0",
    image: "https://pasioncinefilaobsesivocompulsiva.files.wordpress.com/2016/12/inglourious-poster.jpg",
    backgroundImage: "https://images.alphacoders.com/689/689085.jpg"

  },

  {
    id: 7,
    title: "The Matrix",
    director: "The Wachowskis",
    year: 1999,
    genre: ["Fantasia", "Accion"],
    synopsis: "A computer hacker learns about the true nature of his reality and his role in a war against the controllers of a simulated reality.",
    duration: 136,
    rating: 8.7,
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    trailerLink: "https://www.youtube.com/watch?v=m8e-FF8MsqU",
    image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    backgroundImage: "https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg"

  },

  // Agrega más películas según sea necesario
];


export const frontPage = 
  {
    title: "Spider-Man: Across The Spider-Verse",
    description: "Spider-Man: Across The Spider-Verse: ¡Un viaje multiversal épico con Spider-Man que desafía la realidad",
    image: "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_.jpg",
    backgroundImage: "https://images.hdqwalls.com/wallpapers/spiderman-across-the-spiderverse-2023-5k-yc.jpg",
    genre: "Accion",
    trailerLink: 'https://www.youtube.com/embed/shW9i6k8cB0?si=ayovg1BeQpJoR_Fr',
    year: 2023
  }
