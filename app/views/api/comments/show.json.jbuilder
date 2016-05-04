json.extract! @photo, :id, :photo_url, :title, :user_id, :description

json.user do
  json.extract! @photo.user, :id, :username, :profile_pic
end

json.comments @photo.comments do |comment|
  json.body comment.body
  json.user_id comment.user_id
  json.user do
    json.extract! comment.user, :id, :username, :profile_pic
  end
end
