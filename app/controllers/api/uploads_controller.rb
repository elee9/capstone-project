class Api::UploadsController < ApplicationController
    def upload
      render json: Upload.presign(params[:prefix], params[:filename], limit: 5.megabyte)
    end
end
