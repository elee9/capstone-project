# Pyxels

[Heroku link][heroku]

[heroku]: http://pyxels.herokuapp.com

## Minimum Viable Product

Pyxels is a web application inspired by 500px that will be built using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] New account creation, login, and guest/demo login
- [ ] Smooth, bug-free navigation
- [ ] Adequate seed data to demonstrate the site's features
- [ ] The minimally necessary features for a 500px-inspired site: photo creation and saving, photo commenting/viewing, and saving photos to albums
- [ ] Hosting on Heroku
- [ ] CSS styling that is satisfactorily visually appealing
- [ ] A production README, replacing this README (**NB**: check out the [sample production README](https://github.com/appacademy/sample-project-proposal/blob/master/docs/production_readme.md) -- you'll write this later)

## Product Goals and Priorities

Pyxels will allow users to do the following:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [ ] Create an account (MVP)
- [ ] Log in / Log out, including as a Guest/Demo User (MVP)
- [ ] Create, read, edit, and delete pictures (MVP)
- [ ] Organize pictures within albums (MVP)
- [ ] Comment on pictures (MVP)
- [ ] Tag pictures with multiple hashtags (expected feature, but not MVP)

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

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Photos Model, API, and basic APIUtil (1.5 days)

**Objective:** Photos can be created, read, edited and destroyed through
the API.

- [ ] create `Photo` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for photos (`PhotosController`)
- [ ] jBuilder views for photos
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Photos can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each photo component, building out the flux loop as needed.
  - [ ] `PhotosIndex`
  - [ ] `PhotoIndexItem`
  - [ ] `PhotoForm`
- [ ] save Photos to the DB when the form loses focus or is left idle
  after editing.

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: Albums (1 day)

**Objective:** Photos can belong to user-specified Albums, and can be viewed by album.

- [ ] create `Album` model
- build out API, Flux loop, and components for:
  - [ ] Album CRUD
  - [ ] adding notes requires a album
  - [ ] moving notes to a different album
  - [ ] viewing notes by album
- Use CSS to style new views

Phase 3 adds organization to the Photos. Photos belong to a Album,
which has its own `Index` view.

### Phase 6: Tags (1.5 days)

**Objective:** Notes can be tagged with multiple tags, and tags are searchable.

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for notebook
  - [ ] adding tags to notebook
  - [ ] creating tags while adding to notebooks
  - [ ] searching notebooks by tag
- [ ] Style new elements

### Phase 7: Allow Complex Styling in Photos (0.5 days)

**objective:** Enable complex styling of notes.

- [ ] Integrate `react-quill` (based on Quill.js).
- [ ] Use Rails helpers to sanitize HTML before rendering.
- [ ] Style the new Quill elements.

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Geotagging pictures with the Google Maps API
- [ ] Show related photos based on number of matching tags
- [ ] Pagination / infinite scroll for Photos Index

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
