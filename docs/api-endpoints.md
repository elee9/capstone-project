# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Photos

- `GET /api/photos`
  - Photo index
  - accepts `hashtag` query param to list photos by tag
- `POST /api/photos`
- `GET /api/photos/:id`
- `PATCH /api/photos/:id`
- `DELETE /api/photos/:id`

### Albums

- `GET /api/albums`
- `POST /api/albums`
- `GET /api/albums/:id`
- `PATCH /api/albums/:id`
- `DELETE /api/albums/:id`
- `GET /api/albums/:id/photos`
  - index of all photos for a album

### Comments
- `POST /api/photos/:id/comments`
- `DELETE /api/photo/:id/comments`

### Tags

- A note's tags will be included in the note show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/photos/:photo_id/tags`: add tag to photo by name
  - if photo doesn't already exist, it will be created
- `DELETE /api/photos/:photo_id/tags/:tag_name`: remove tag from photo by
  name
