# Casa de Papel (Money Heist) API

## Documentation

Welcome to the Casa de Papel (Money Heist)! This documentation will supply
with you all the information you need to start making your HTTP
requests on this iconic TV-series. Give our documentation a read before you get started on your project!

Bella Ciao.

## Base URL

[To edit](https://localhost:3000/)

## Rate Limit

This API is free. However, to prevent harmful activity, there is a rate limit of 10,000 requests a day. If you happen to reach that limit, you will receive a 429 status code, and regain access after 24 hours.

## Character Endpoints

#### Character Attributes

| Attribute  |  Type   | Description                                     |
| ---------- | :-----: | ----------------------------------------------- |
| id         | integer | Unique Id per character                         |
| name       | string  | A character's full name                         |
| birthday   | string  | A character's birthday                          |
| occupation |  array  | List of character's known occupation            |
| img        | string  | Character's image (as jpg)                      |
| status     | string  | Are they alive(or did Heisenberg get to them??) |
| nickname   | string  | A known nickname they are refered as            |
| appearance |  array  | List of seasons that the character appeared in  |

#### Get all characters

Endpoint to retrieve information from all characters.

```
/api/characters
```

#### Get single character

```
/api/characters/1
```

#### Get a random character

```
/api/character/random
```

#### Get paginated characters

```
/api/characters?limit=10&offset=10
```

This request would give you an array of 10 characters, starting at index 10 (the 11th id).

#### Get specific character by name

```
/api/characters?name=Raquel+Murillo
```

Notice the 'plus sign' between the first and last name represents a space. This query only works with the full name of a character. Double check your spelling!

## Episode Endpoints

#### Episode Attributes

| Attribute  |  Type   | Description                                          |
| ---------- | :-----: | ---------------------------------------------------- |
| id         | integer | Unique Id per episode                                |
| title      | string  | The title of the episode                             |
| season     | integer | The season that the episode belongs to               |
| episode    | integer | The episode number of it's season                    |
| air_date   | string  | The original air date of the episode                 |
| characters |  array  | Main characters that are associated with the episode |

#### Get all episodes

```
/api/episodes
```

#### Get an episode by id

```
/api/episodes/id
```

## Built With

- [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js
- [Maven](https://www.heroku.com/) - PaaS that enables developers to build, run, and operate applications entirely in the cloud.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/rjNemo/casa_de_papel_money_heist_api/tags).

## Authors

- **Ruidy** - _Initial work_ - [Github](https://github.com/rjNemo)

See also the list of [contributors](https://github.com/rjNemo/casa_de_papel_money_heist_api/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
