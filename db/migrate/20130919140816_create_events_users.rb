class CreateEventsUsers < ActiveRecord::Migration
  def change
    create_table :events_users do |t|
      t.integer :event_id
      t.integer :user_id
    end
  end
end
