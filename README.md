# Pyxels

[Heroku link][heroku]

[heroku]: http://pyxels.herokuapp.com

## Minimum Viable Product

Pyxels is a web application inspired by 500px that will be built using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [x] New account creation, login, and guest/demo login
- [x] Smooth, bug-free navigation
- [x] Adequate seed data to demonstrate the site's features
- [x] The minimally necessary features for a 500px-inspired site: photo creation and saving, photo commenting/viewing, and saving photos to albums
- [x] Hosting on Heroku
- [x] CSS styling that is satisfactorily visually appealing
- [x] A production README, replacing this README (**NB**: check out the [sample production README](https://github.com/appacademy/sample-project-proposal/blob/master/docs/production_readme.md) -- you'll write this later)

## Product Goals and Priorities

Pyxels will allow users to do the following:

- [x] Create an account (MVP)
- [x] Log in / Log out, including as a Guest/Demo User (MVP)
- [x] Create, read, edit, and delete pictures (MVP)
- [x] Comment on pictures (MVP)

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[flux-cycles]: ./docs/flux-cycles.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [x] create new project
- [x] create `User` model
- [x] authentication
- [x] user signup/signin pages
- [x] blank landing page after signin

### Phase 2: Photos Model, API, and basic APIUtil (1.5 days)

**Objective:** Photos can be created, read, edited and destroyed through
the API.

- [x] create `Photo` model
- [x] seed the database with a small amount of test data
- [x] CRUD API for photos (`PhotosController`)
- [x] jBuilder views for photos
- [x] setup Webpack & Flux scaffold
- [x] setup `APIUtil` to interact with the API
- [x] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Photos can be created, read, edited and destroyed with the
user interface.

- [x] setup the flux loop with skeleton files
- [x] setup React Router
- implement each photo component, building out the flux loop as needed.
  - [x] `PhotosIndex`
  - [x] `PhotoIndexItem`
  - [x] `PhotoForm`
- [x] save Photos to the DB when the form loses focus or is left idle
  after editing.

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [x] create a basic style guide
- [x] position elements on the page
- [x] add basic colors & styles

### Phase 5: Comments (1.5 days)

**Objective:** Photos and other comments can be commented on, and will display on the photo's page.

- [x] create `Comment` model
- build out API, Flux loop, and components for:
  - [x] Comment CRUD
  - [x] adding comments
  - [x] deleting comments
- Style new elements


### Phase 6: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [x] Get feedback on my UI from others
- [x] Refactor HTML classes & CSS rules
- [x] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Tags and tag-based search
- [ ] Album creation and photo adding
- [ ] Geotagging pictures with the Google Maps API
- [ ] Show related photos based on number of matching tags
- [ ] Pagination / infinite scroll for Photos Index
