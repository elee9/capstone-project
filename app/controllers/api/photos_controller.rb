class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.includes(:user, comments: :user).all.order(id: :desc)

    render :index
  end

  def show
    @photo = Photo.find(params[:id])
    render :show
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id

    if @photo.save
      @photos = Photo.includes(:user, comments: :user).all.order(id: :desc)
      render :index
    else
      render 'api/shared/errors', status: 422
    end
  end

  def update
    @photo = Photo.find(params[:id])
    if @photo.update_attributes(photo_params)
      render :show
    else
      render 'api/shared/errors', status: 422
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy!
    render :show
  end

  private

  def photo_params
    params.require(:photo).permit(:title, :description, :photo_url)
  end
end
