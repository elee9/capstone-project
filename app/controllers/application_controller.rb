class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  private

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def login_user!(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout_user!
    if current_user
      current_user.reset_session_token!
    end
    session[:session_token] = nil
    @current_user = nil
  end
end
