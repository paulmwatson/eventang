class UsersController < ApplicationController
  def index
    users = User.all

    respond_to do |format|
      format.json { render json: users.as_json(include: :events) }
    end
  end

  def show
    id = get_id(params[:id])
    user = User.find(id)

    respond_to do |format|
      format.json { render json: user.as_json(include: :events)}
    end
  end

  def update
    id = get_id(params[:id])
    user = User.find(id)
    user.name = params[:name]
    user.save
    render json: user
  end

  def sign_out
    session[:user_id] = nil
    redirect_to :root
  end

  private

  def get_id(id_param)
    if id_param == 'me'
      if !session[:user_id]
        user = User.create({name: 'Agent Prism'})
        session[:user_id] = user.id
      end
      id = session[:user_id]
    else
      id = id_param
    end
    id
  end

end