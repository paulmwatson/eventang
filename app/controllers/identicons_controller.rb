class IdenticonsController < ApplicationController
  def show
    identicon = Quilt::Identicon.new params[:name], scale: params[:scale] ? params[:scale].to_i : 10
    send_data identicon.to_blob, :type => 'image/png', :disposition => 'inline'
  end
end
