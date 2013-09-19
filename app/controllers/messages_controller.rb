class MessagesController < ApplicationController
  def index
    event = Event.find(params[:event_id])
    messages = event.messages

    respond_to do |format|
      format.json { render json: messages.as_json(include: :user) }
    end

  end

  def create
    message = Message.create({event_id: params[:event_id], user_id: session[:user_id], body: params[:body]})
    render json: message.as_json(include: :user)
  end
end
