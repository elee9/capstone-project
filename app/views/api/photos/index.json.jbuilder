json.array! @photos do |photo|
	json.id photo.id
	json.photo_url photo.photo_url
	json.title photo.title

	json.description photo.description
	json.user do
		json.extract! photo.user, :id, :username, :first_name, :last_name, :profile_pic, :bio
	end

	json.comments photo.comments do |comment|
	  json.body comment.body
	  json.user_id comment.user_id
		json.user do
			json.extract! comment.user, :id, :username, :profile_pic
		end
	end
end
