class Api::CommentsController < ApplicationController

  def show

  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.save!

    @photo = Photo.includes(:user, comments: :user).find(comment_params[:photo_id])

    render :show
  end

  def destroy
    @comment = Comment.find(comment_params)
    @comment.destroy!
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :photo_id)
  end
end
