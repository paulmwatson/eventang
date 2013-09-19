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
    
    require 'pusher'
    Pusher.url = "http://62877fc93f132dae8ec4:3bbfce4976096d770454@api.pusherapp.com/apps/54576"
    Pusher['events'].trigger('create', { message: event.to_json })
  end
end
