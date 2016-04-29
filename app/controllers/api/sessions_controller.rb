class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login_user!(@user)
      render 'api/users/show'
    else
      @errors = ["Invalid username or password!"]
      render 'api/shared/errors', status: 401
    end
  end

  def show
    if current_user
      @user = current_user
      render 'api/users/show'
    else
      @errors = nil
      render 'api/shared/errors', status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout_user!
      render 'api/users/show'
    else
      @errors = nil
      render 'api/shared/errors', status: 401
    end
  end
end
