class Api::UsersController < ApplicationController
 
    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    def create 
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            # render :show
            render 'api/users/show'
        else
            render json: @users.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:email, :password)
    end

end
