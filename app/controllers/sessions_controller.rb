class SessionsController < ApplicationController
  def create
    @user = User.find_by(username: params[:username])
    respond_to do |format|
      format.any(:js, :json) do
        if @user && @user.authenticate(params[:password])
          session[:user_id] = @user.id
          render json: { id: @user.id }
        else
          render json: {}, status: 401
        end
      end
    end
  end
end
