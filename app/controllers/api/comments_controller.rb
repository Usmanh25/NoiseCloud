class Api::CommentsController < ApplicationController

    def create
        @comment = Comment.new(comment_params)
        
        @comment.commenter_id = current_user.id

        if @comment.save
            render "api/comments/show"
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def index
        @comments = Comment.all
        render `api/comments/index`
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        @comment.destroy
        render json: {}
    end

    private
    def comment_params
        params.require(:comment).permit(:body, :commenter_id, :track_id)
    end
end
