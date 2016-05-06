json.extract! @user, :id, :username, :first_name, :last_name, :profile_pic, :bio

json.photos @user.photos
