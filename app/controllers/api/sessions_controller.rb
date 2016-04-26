class Api::SessionsController < ApplicationController
  def create
    @user.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login_user!(@user)
      render :show
    else
      @errors = @user.errors.full_messages
      render :errors
    end
  end

  def show
    @user = current_user
    render :show
  end

  def destroy
    @user = current_user

    logout_user!
    render :show
  end
end
