// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Ukraine, Kyiv',
}

var footer = {
  social: {
    email: {
      text: 'ivan@gmail.com',
      href: 'mailto:ivan@gmail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/dmytro-test',
      text: 'LinkedIn',
    },
  },
}
// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to 
        work on a new project I learn the domain and try to understand the idea of the project. Good team player, 
        every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebar',
          point: 9,
          isTop: false,
        },
        {
          name: 'VS Code & NPM',
          point: 10,
          isTop: true,
        },
        {
          name: 'GIT & Terminal',
          point: 8,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Hockey',
          isMain: false,
        },
        {
          name: 'Music',
          isMain: false,
        },
        {
          name: 'Travel',
          isMain: true,
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'School 40',
          isEnd: true,
        },
        {
          name: 'MBK',
          isEnd: true,
        },
        {
          name: 'KNUBA',
          isEnd: true,
        },
        {
          name: 'NLP',
          isEnd: false,
        },
        {
          name: 'IT Brains',
          isEnd: false,
        },
      ],

      certificates: [
        {
          name: 'Sert. Level 1: №',
          id: 777,
          isID: true,
        },
        {
          name: 'Sert. Level 2: №',
          id: 888,
          isID: true,
        },
        {
          name: 'Sert. Level 3: №',
          id: 999,
          isID: false,
        },
      ],
    },

    footer,
  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://www.it-brains.com.ua/',
            // url: null,
          },
          duration: {
            from: '10.10.2023',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              // url: 'https://retino.in.ua/',
              url: 'https://retino.in.ua/',
              about: 'blablabla',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Nodejs',
                },
              ],
              stackAmount: 5,
              awards: [
                {
                  name: 'burburbur',
                },
                {
                  name: 'dukdukduk',
                },
              ],
              stackAwards: 2,
            },
          ],
        },
      ],
    },

    footer,
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
