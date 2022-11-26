

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">MailingCult</h3>
  <p align="center">
    Simple NodeJS, Express, and MySQL Implementation
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![mailingcult.png](https://i.postimg.cc/FzRxtTkC/mailingcult.png)](https://postimg.cc/1nkFwcHD)

MailingCult is a fictonal organization that works underground like a cult. They use this web to search prospects that will be their waitlist. If you want to be one
of their prospects, just register using that form.

This is a simple project that based from ColtSteele MySQL Udemy Course. I implemented faker to generate random datasets that populate the database.
I hosted the database using Clever Cloud and made it live with heroku. Feel free to fork and add or suggest changes.

### Built With

This project is built using:

*  ![Node.js][Node.js]
*  ![Express][Express]
*  ![Faker][Faker]
*  ![MySQL][MySQL]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To run this app locally on your machine, you can follow these steps:

### Prerequisites

To install npm, type this on your favorite cli
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_To install and run this app locally, simply follow this installation steps_

1. Clone the repo
   ```sh
   git clone https://github.com/baihaqi2193/mailing-cult.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Start the node server
   ```js
   node app.js;
   ```
4. Replicate MySQL schema locally on your machine
5. Configure DB credentials on .env
   ```js
    DB_HOST = "localhost"
    DB_USERNAME = "username"
    DB_PASSWORD = "password"
    DB_DBNAME = "yourdbname"
   ```
6. Access using localhost 
   ```js
   localhost:5000
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [x] Add readme files
- [ ] Add additional features
- [ ] Add more more features
- [ ] Multi-theme support
    - [ ] Dark mode based on time
    - [ ] Light camouflgae mode


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/FeatureSubmission`)
3. Commit your Changes (`git commit -m 'Added some features'`)
4. Push to the Branch (`git push origin feature/FeatureSubmission`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Project Link: [https://github.com/baihaqi2193/mailing-cult](https://github.com/baihaqi2193/mailing-cult)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[product-screenshot]: images/screenshot.png
[Express]: https://img.shields.io/badge/express.js-0000ff?style=for-the-badge&logo=express&logoColor=white
[Faker]: https://img.shields.io/badge/faker-000000?style=for-the-badge&logo=fakerdotjs&logoColor=white
[Node.js]: https://img.shields.io/badge/node.js-000000?style=for-the-badge&logo=nodedotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[MySQL]: https://img.shields.io/badge/MySQL-FFA500?style=for-the-badge&logo=mysql&logoColor=0000ff
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
