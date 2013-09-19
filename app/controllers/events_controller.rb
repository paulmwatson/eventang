class EventsController < ApplicationController
  def index
    events = Event.all

    respond_to do |format|
      format.json { render json: events.as_json(include: :users) }
    end
  end

  def show
    event = Event.find(params[:id])

    respond_to do |format|
      format.json { render json: event.as_json(include: :users) }
    end
  end

  def create
    event = Event.create({title: params[:title]})
    render json: event
  end

  def join
    event = Event.find(params[:id])
    user = User.find(session[:user_id])
    event.users << user
    render json: event.as_json(include: :users)

    Message.create({event_id: event.id, user_id: user.id, body: "Just joined..."})
  end

  def leave
    event = Event.find(params[:id])
    user = User.find(session[:user_id])
    event.users.destroy(user)
    render json: event.as_json(include: :users)

    Message.create({event_id: event.id, user_id: user.id, body: "Just left..."})
  end
end
