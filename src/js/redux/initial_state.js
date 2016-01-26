import {fromJS} from 'immutable'

const INITIAL_STATE = fromJS({
  activeProfileIds: {
    director: null,
    producer: null
  },
  isVideoPlaying: false,
  profiles: [
    {
      id: 0,
      name: 'Aino Suni',
      title: 'Film director and Screenwriter, Finland',
      description: 'Aino graduated in 2014 from Salford with a Master’s degree in Film Screenwriting. Her short film ‘Wolf Carver’ travelled many festivals including Clermont-Ferrand and was broadcasted by Canal+. She is developing her first feature film and directing her first feature documentary film.',
      descriptionImage: 'Aino-Suni-desc.png',
      photo: 'Aino-Suni.jpeg',
      type: 'director'
    },
    {
      id: 1,
      name: 'Alexander Lind',
      title: 'Film director, Denmark',
      description: 'Alexander received international recognition in 2014 when he won the New Nordic Voice Award. His films balance between hybrid, documentary and arts that stand out by being highly artistic in a strong visual language.',
      descriptionImage: 'Alexander-Lind-desc.png',
      photo: 'Alexander-Lind.jpeg',
      type: 'director'
    },
    {
      id: 2,
      name: 'Calle Holck',
      title: 'Artist, Sweden',
      description: 'Calle works within art interactivity to create life and unpredictable outcomes of this framework. He wishes not to provide answers but to let go and see what happens in the encounter with the viewer through his work.',
      descriptionImage: 'Calle-Holck-desc.png',
      photo: 'Calle-Holck.jpeg',
      type: 'director'
    },
    {
      id: 3,
      name: 'Camilla Figenschou',
      title: 'Film director, Norway',
      description: 'Camilla is a visual artist, working in cross-disciplinary media where she explores the interaction between body and place. She wants to describe how the element of a subject’s body and a particular terrain or place can become a temporary state.',
      descriptionImage: 'Camilla-Figenschou-desc.png',
      photo: 'Camilla-Figenschou.jpeg',
      type: 'director'
    },
    {
      id: 4,
      name: 'Elín Hansdóttir',
      title: 'Artist, Iceland',
      description: 'Elín creates self-contained worlds that seem to operate under their own set of rules, completely transforming a benign space into one that defies expectations and only exists at a particular moment in time. Her site-specific installations take many forms, including auditory or optical illusions.',
      descriptionImage: 'Elin-Hansdottir-desc.png',
      photo: 'Elin-Hansdottir.jpeg',
      type: 'director'
    },
    {
      id: 5,
      name: 'Frida and Lasse Barkfors',
      title: 'Film directors, Sweden and Denmark',
      description: 'Lasse graduated from the Royal Danish Art Academy, and Frida studied fiction directing at the National Film School of Denmark. They are married and have recently worked together on a film called “Pervert Park” that screened last year at Sundance.',
      descriptionImage: 'Frida-And-Lasse-Barkfors-desc.png',
      photo: 'Frida-And-Lasse-Barkfors.jpeg',
      type: 'director'
    },
    {
      id: 6,
      name: 'Rasmus Kloster Bro',
      title: 'Film director, Denmark',
      description: 'Rasmus graduated from the alternative film school, Super16, in 2012 after working in the field of visual installations and video art as well as directing films of multiple genres; short, feature, music and series.',
      descriptionImage: 'Rasmus-Kloster-Bro-desc.png',
      photo: 'Rasmus-Kloster-Bro.jpeg',
      type: 'director'
    },
    {
      id: 7,
      name: 'Tobias Gundorff Boesen',
      title: 'Film director and Animator, Denmark',
      description: 'Tobias’ passion lies within the scope of storytelling. His work has been in the crossfield between animation, artwork and live action since 2010 when his stop-motion film ‘Out Of A Forest’ received international prizes, attention and recognition throughout.',
      descriptionImage: 'Tobias-Gundorff-Boesen-desc.png',
      photo: 'Tobias-Gundorff-Boesen.jpeg',
      type: 'director'
    },
    {
      id: 8,
      name: 'Allan Luckow',
      title: 'Producer, Denmark',
      description: 'Allan has been a figure in the Danish film community for 25 years. He started close to the camera, but his interest in advanced film technology led him to being a leading specialist in motion control, 3D live camera tracking, onset visualization, and the latest virtual reality pipeline techniques.',
      descriptionImage: 'Allan-Luckow-desc.png',
      photo: 'Allan-Luckow.jpeg',
      type: 'producer'
    },
    {
      id: 9,
      name: 'Anna J. Ljungmark',
      title: 'Producer, Sweden',
      description: 'Anna has developed ground breaking new media arenas such as BoostHbg. Her new baby is House of Real, a house of factual storytelling and innovation. Since 1994, she has worked as a commissioning editor and has a heart in creative development.',
      descriptionImage: 'Anna-Ljungmark-desc.png',
      photo: 'Anna-Ljungmark.jpeg',
      type: 'producer'
    },
    {
      id: 10,
      name: 'Birgitte Rask',
      title: 'Producer, Denmark',
      description: 'Birgitte has previously studied at CBS and been a restaurant manager before stepping into film production. Through freelancing she was hired by a production company Bacon as a production coordinator. She has almost 40 commercials-on her filmography list and is now a producer student at Super16.',
      descriptionImage: 'Birgitte-Rask-desc.png',
      photo: 'Birgitte-Rask.jpeg',
      type: 'producer'
    },

    {
      id: 11,
      name: 'Christian Vangsgaard',
      title: 'Producer, Denmark',
      description: 'In 2012 Christian founded Kamikaze Film CPH together with Malthe Koch. He has produced fiction, commercials and trans media projects. In 2013 he co-created the trans media project MURDER:CPH, fascinated by new ways of telling stories and integrating and combining different media platforms.',
      descriptionImage: 'Christian-Vangsgaard-desc.png',
      photo: 'Christian-Vangsgaard.jpeg',
      type: 'producer'
    },
    {
      id: 12,
      name: 'Janus Heiberg Madsen',
      title: 'Co-founder of Panorama Video, Denmark',
      description: 'Janus Heiberg Madsen graduated from IT University of Copenhagen and is co-founder of Panorama Video who produces 360-degree videos. Together with his companion, Janus founded the production company to explore and develop opportunities for telling stories through virtual reality content.',
      descriptionImage: 'Janus-Heiberg-Madsen-desc.png',
      photo: 'Janus-Heiberg-Madsen.jpeg',
      type: 'producer'
    },
    {
      id: 13,
      name: 'Kristian Kryger',
      title: 'Producer, Denmark',
      description: 'Kristian graduated from the Danish School of Media and Journalism with a BA in Media Production in 2011. He has functioned as a creative director for production houses such as Bastard Film and Monday Media. Now working as a visual producer, he is stationed at Strong Production A/S.',
      descriptionImage: 'Kristian-Kryger-desc.png',
      photo: 'Kristian-Kryger.jpeg',
      type: 'producer'
    },
    {
      id: 14,
      name: 'Maximillian Mayrshofer',
      title: 'Producer, Denmark',
      description: 'Maximillian has a bachelor in International Business and Politics from Copenhagen Business School. He now functions as a production assistant for Lene Børglum at Space Rocket Nation and as a short film producer through 73collective. He also assisted Morten Kaplers in “Screen Talent Europe.”',
      descriptionImage: 'Maximillian-Mayrshofer-desc.png',
      photo: 'Maximillian-Mayrshofer.jpeg',
      type: 'producer'
    },
    {
      id: 15,
      name: 'Niels Ahlefeldt Wetterberg',
      title: 'Producer, Denmark',
      description: 'Niels W. is an entrepreneur by heart. He has more than 12 years of professional experience in the film industry. Coupled with a business degree he is always looking at how new media platforms and technological advances can converge to innovate creative expression. He has primarily worked with advertising for big brands. However, great stories are what makes him tick. He is also an avid gamer and see a bright future ahead for both film and gaming. As a producer at Investigate North he seeks to make that come true.  ',
      descriptionImage: 'Niels-Wetterberg-desc.png',
      photo: 'Niels-Ahlefeldt-Wetterberg.jpeg',
      type: 'producer'
    },
    {
      id: 16,
      name: 'Rikke Tambo Andersen',
      title: 'Producer, Denmark',
      description: 'Rikke has worked as a producer at Bullitt Film since 2010. She has a BA in Film and Media Studies, and will soon finish her graduate studies in Management of Creative Business Processes at CBS while studying as a producer at Super16. She has produced several short fictions and documentary projects.',
      descriptionImage: 'Rikke-Tambo-Andersen-desc.png',
      photo: 'Rikke-Tambo-Andersen.jpeg',
      type: 'producer'
    },
    {
      id: 17,
      name: 'Karna Sigurdardóttir',
      title: 'Filmmaker, Iceland',
      description: 'Karna is a documentary filmmaker with background in design and dramaturgy. She has worked on various productions around the world and recently received the Icelandic Design Award for the project Austurland: Designs from Nowhere.    ',
      descriptionImage: 'Karna-Sigurdardottir-desc.png',
      photo: 'Karna-Sigurdardottir.jpeg',
      type: 'director'
    }
  ]
})

export default INITIAL_STATE