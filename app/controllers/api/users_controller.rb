class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login_user!(@user)
      render 'api/users/show'
    else
      @errors = @user.errors.full_messages
      render 'api/shared/errors', status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render 'api/users/show'
  end

  def edit

  end

  def update
    @user = User.find(params[:id])

    if @user.update_attributes(user_params)
      render 'api/users/show'
    else
      @errors = @user.errors.full_messages
      render 'api/shared/errors', status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :first_name, :last_name,
                                 :password, :profile_pic, :bio)
  end
end
