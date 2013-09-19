class Event < ActiveRecord::Base
  has_and_belongs_to_many :users
  has_many :messages
  after_create :push_message

  def push_message
    require 'pusher'
    Pusher.url = "http://62877fc93f132dae8ec4:3bbfce4976096d770454@api.pusherapp.com/apps/54576"
    Pusher['events'].trigger('create', { message: self.to_json(include: :users) })
  end
end
