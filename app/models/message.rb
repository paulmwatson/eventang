class Message < ActiveRecord::Base
  belongs_to :event
  belongs_to :user
  after_create :push_message

  def push_message
    require 'pusher'
    Pusher.url = "http://62877fc93f132dae8ec4:3bbfce4976096d770454@api.pusherapp.com/apps/54576"
    Pusher['messages'].trigger('create', { message: self.to_json(include: :user) })
  end
end
