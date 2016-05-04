json.extract! @photo, :id, :photo_url, :title, :user_id, :description

json.comments @photo.comments do |comment|
  json.body comment.body
  json.user_id comment.user_id
end
