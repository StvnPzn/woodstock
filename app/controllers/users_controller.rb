class UsersController < ApplicationController
  def index
    @pieces = current_user.pieces
    @parts = current_user.parts
  end
end
