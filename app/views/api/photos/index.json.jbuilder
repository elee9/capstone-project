json.array! @photos do |photo|
	json.id photo.id
	json.photo_url photo.photo_url
	json.title photo.title

	json.description photo.description
	json.user do
		json.extract! photo.user, :id, :username, :profile_pic
	end
end
